export const useCartStore = defineStore('cartStore', {


    state: () => ({
        products: [],
        fullPrice: 0,//// сумма всех товаров
        discount: null, // скидка по промокоду
        total: 0, // итоговая сумма с учетом скидки
        promo: null, //промокод текст
        loyaltyBalance: null,// Количество бонусов
        loyaltyAmount: null,// Количество бонусов на списание
        bonuses: false,

    }),
    getters: {
        // сумма товара
        totalCountProducts() {
            return this.products.length
        },

        calculateFullPrice() {
            this.fullPrice = this.products.reduce((total, item) => total + (item.price * item.inCart), 0);
            return this.fullPrice
        },

        //Сумма со скидкой промокод
        calculateTotal() {
            if (this.bonuses) {
                return this.fullPrice - this.loyaltyAmount;
            }
            // const fullPrice = this.products.reduce((total, item) => total + (item.price * item.inCart), 0);
            return this.total = Math.ceil(this.fullPrice - (this.fullPrice * this.discount) / 100)
        },

        //Сумма со скидкой бонусы
        calculateLoyalty() {
            const maxBonusToUse = this.fullPrice * 0.1; // 10% от стоимости товаров
            console.log('можно списать - ' + maxBonusToUse)
            this.loyaltyAmount = Math.min(this.loyaltyBalance, maxBonusToUse);
            return this.loyaltyAmount
        },

    },
    actions: {

        // Действие для проверки промокода
        async applyPromoCode(promoCode) {
            const popupStore = usePopupStore();
            const profileStore = useProfileStore()
            const { public: config } = useRuntimeConfig();


            await $fetch(`${config.backOptions.api}/promo-codes/check`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${profileStore.credentials.token}`,
                },
                body: JSON.stringify({ promo_code: promoCode, })
            }).then((data) => {
                popupStore.toggle('toast', { title: data.message, timeout: 2000, type: 'success' });

                this.promo = promoCode;
                this.discount = data.discount_percent;
                this.bonuses = false;

            }).catch(({ response }) => {
                popupStore.toggle('toast', { title: response._data.message, timeout: 2000, type: 'error' })
            })
        },

        applyLoyalty() {
            this.discount = 0
            this.bonuses = true;
        },


        //получаем бонусы
        async getLoyalty() {
            const { public: config } = useRuntimeConfig();
            const profileStore = useProfileStore()
            const popupStore = usePopupStore();

            await $fetch(`${config.backOptions.api}/bonus/info`, { headers: { 'Authorization': `Bearer ${profileStore.credentials.token}` } }).then((data) => {
                this.loyaltyBalance = data.data.bonus;
            }).catch(() => {
                popupStore.toggle('toast', {
                    title: 'data.message',
                    timeout: 3000,
                    type: 'error'
                })
            })
        },

        // сумма шт * кол-во
        totalPriceProduct(item) {
            return item.inCart * item.price;
        },

        //удаление товара из корзины
        removeCart(productId) {
            const arr = this.products = this.products.filter(item => item.id !== productId);
            this.saveToLocalStorage(this.products)
            return arr
        },

        //проверяем если ли товар в корзине
        issetInCart(productId) {
            const product = this.products.find(item => item.id === productId);
            if (typeof product !== 'undefined') {
                return product;
            }
            return false
        },

        getCountProductInCart(productId) {
            const product = this.products.find(item => item.id === productId);
            if (typeof product !== 'undefined') {
                return product.inCart;
            }
            return 0
        },

        // Увеличить количество товара  
        increment(product) {
            if (this.products.length) {
                // Перебираем товары в корзине
                let isProductInCart = false;
                this.products = this.products.map(item => {
                    if (item.id === product.id) {
                        // Если товар уже есть в корзине, увеличиваем количество
                        item.inCart++;
                        isProductInCart = true;
                    }
                    return item;
                });
                // Если товар не найден в корзине, добавляем его
                if (!isProductInCart) {
                    product.inCart = 1;  // Добавляем новый товар с количеством 1
                    this.products.push(product);
                }
            } else {
                // Если корзина пустая, просто добавляем товар с количеством 1
                product.inCart = 1;
                this.products.push(product);
            }
            this.saveToLocalStorage(this.products)
        },

        // Уменьшить количество товара
        decrement(product) {
            if (this.products.length) {
                // Перебираем товары в корзине
                let isProductInCart = true;
                this.products = this.products.map(item => {
                    if (item.id === product.id) {
                        // Если товар найден, уменьшаем количество
                        if (item.inCart > 1) {
                            item.inCart--;  // Уменьшаем количество на 1
                        } else {
                            isProductInCart = false;
                        }
                    }
                    return item;
                });

                // Если товар не найден в корзине, ничего не делаем
                if (!isProductInCart) {
                    this.products = this.products.filter(item => item.id !== product.id);
                }
            }
            this.saveToLocalStorage(this.products)
        },

        saveToLocalStorage(items) {
            localStorage.setItem('cart', JSON.stringify(items))
        },

        loadFromLocalStorage(products) {
            const savedCart = localStorage.getItem('cart')
            if (savedCart) {
                this.products = JSON.parse(savedCart)
            }
        },

        makePay(data) {

            const profileStore = useProfileStore()

            if (!profileStore.isAuth()) {
                popupStore.toggle('toast', { title: 'Войдите в аккаунт', timeout: 5000, type: 'warning' })
                return
            }

            const { phoneClear } = useHelper()
            const popupStore = usePopupStore()
            const { public: config } = useRuntimeConfig();

            data.products = data.products.map(item => {
                return {
                    id: item.id,
                    count: item.inCart
                }
            })

            if (data.is_pickup) {
                data.delivery_type_id = 1

                delete (data.full_address)
                delete (data.full_address_fias_id)
            } else {
                data.delivery_type_id = 2
            }

            if (data.delivery_type_id === 2) {
                if (!data.full_address) {
                    popupStore.toggle('toast', { title: 'Укажите адрес доставки', timeout: 5000, type: 'warning' })
                    return
                }
            }

            data.phone = phoneClear(data.phone);

            if (this.bonuses) {
                data.with_bonuses = this.bonuses;
            }
            else {
                data.promo_code = this.promo;
            }

            delete (data.is_pickup)

            $fetch(`${config.backOptions.api}/orders`, {
                method: 'POST',
                body: data,
                headers: {
                    'Authorization': `Bearer ${profileStore.credentials.token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then((data) => {
                popupStore.toggle('toast', { title: data.message, timeout: 3000 })
                this.products = []
                this.saveToLocalStorage(this.products)
                navigateTo('/lk')
                if (data.order_type_id === 1) {
                    navigateTo(data.formUrl, { open: true })
                } else {
                    popupStore.toggle('toast', { title: data.message, timeout: 2000 })
                }
            }).catch(({ response }) => {
                if (response.status === 422) {
                    popupStore.toggle('toast', { title: 'Проверьте введенные данные', timeout: 2000, type: 'error' })
                } else {
                    popupStore.toggle('toast', { title: response._data.message, timeout: 6000, type: 'error' })
                }
            })
        }

    },
    persist: true
})
