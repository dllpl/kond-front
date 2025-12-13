import HttpClient from "~/server/utils/httpClient.js";

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        products: [],
        fullPrice: 0,//// сумма всех товаров
        discount: null, // скидка по промокоду
        total: 0, // итоговая сумма с учетом скидки
        promo: null, //промокод текст
        loyaltyParams: {
            bonus: 0,
            message: null,
            loyaltyLevel: null,
            code: null,
            options: {
                discount: null,
                min_sum: 0,
                type_id: null,
                hello_bonus_count: null
            }
        },
        loyaltyBalance: null,// Количество бонусов
        loyaltyMessage: '',
        loyaltyAmount: null,// Количество бонусов на списание
        with_bonuses: false,
    }),
    getters: {
        // сумма товара
        totalCountProducts() {
            return this.products.length
        },

        calculateFullPrice() {
            this.fullPrice = this.products.reduce(function (total, item) {
                if(item.promo_price > 0) {
                    return total + (item.promo_price * item.inCart)
                } else {
                    return total + (item.price * item.inCart)
                }
            }, 0);
            return this.fullPrice
        },

        //Сумма со скидкой промокод
        calculateTotal() {
            if (this.with_bonuses) {
                return this.fullPrice - this.loyaltyAmount;
            }
            // const fullPrice = this.products.reduce((total, item) => total + (item.price * item.inCart), 0);
            return this.total = Math.ceil(this.fullPrice - (this.fullPrice * this.discount) / 100)
        },

        //Сумма со скидкой бонусы
        calculateLoyalty() {
            if (this.promo) {
                return 0
            }
            this.loyaltyAmount = Math.min(this.loyaltyParams.bonus, Math.floor(this.fullPrice * this.loyaltyParams.options.discount / 100));
            return this.loyaltyAmount
        },

    },
    actions: {
        // Действие для проверки промокода
        async togglePromoCode(promoCode) {

            if (this.promo) {
                this.promo = null
                this.discount = null
                this.with_bonuses = false
                return
            }

            promoCode = promoCode.trim()

            const popupStore = usePopupStore();

            const {data, error} = await HttpClient('promo-codes/check', 'POST', {promo_code: promoCode})


            if (error.value) {
                popupStore.toggle('toast', {title: error.value.data.message, timeout: 2000, type: 'error'})
                return
            }

            popupStore.toggle('toast', {title: data.value.message, timeout: 2000, type: 'success'});

            this.promo = promoCode;
            this.discount = data.value.discount_percent;
            this.with_bonuses = false;
        },

        toggleLoyalty() {
            this.discount = 0
            this.promo = null
            this.with_bonuses = !this.with_bonuses
        },


        //получаем бонусы
        async getLoyalty() {
            const {data} = await HttpClient('bonus/info');

            this.loyaltyParams = {
                bonus: data.value.data.bonus,
                message: data.value.message,
                loyaltyLevel: data.value.data.loyalty_level,
                code: data.value.code,
                options: data.value.options
            }

            return this.loyaltyParams
        },

        // сумма шт * кол-во
        totalPriceProduct(item) {
            if(item.promo_price) {
                return item.inCart * item.promo_price;
            } else {
                return item.inCart * item.price;
            }
        },

        //удаление товара из корзины
        removeCart(productId) {
            const arr = this.products = this.products.filter(item => item.id !== productId);
            this.saveToLocalStorage(this.products)
            return arr
        },

        //проверяем если ли товар в корзине
        issetInCart(productId) {

            if (!this.products || typeof this.products !== 'object' || !this.products.length) {
                return false
            }

            const product = this.products.find(item => item.id === productId);
            if (typeof product !== 'undefined') {
                return product;
            }

            return false
        },

        getCountProductInCart(productId) {

            if (!this.products || typeof this.products !== 'object' || !this.products.length) {
                return 0
            }

            const product = this.products.find(item => item.id === productId);
            if (typeof product !== 'undefined') {
                return product.inCart;
            }
            return 0
        },

        // Увеличить количество товара  
        increment(product) {

            const {pushAddToCart} = useEcommerceHelper()

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

            pushAddToCart(product)
        },

        // Уменьшить количество товара
        decrement(product) {

            const {pushRemoveFromCart} = useEcommerceHelper()

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

            pushRemoveFromCart(product)
        },

        saveToLocalStorage(items) {
            localStorage.setItem('product_cart', JSON.stringify(items))
            localStorage.setItem('product_cart_stamp', Date.now())
        },

        loadFromLocalStorage() {
            localStorage.removeItem('cart')

            const savedCart = localStorage.getItem('product_cart')
            const savedStamp = localStorage.getItem('product_cart_stamp')
            if (savedCart) {
                if(savedStamp && (Date.now() - savedStamp < 1000 * 60 * 60 * 24 * 31)) {
                    this.products = JSON.parse(savedCart)
                } else {
                    localStorage.removeItem('product_cart')
                    localStorage.removeItem('product_cart_stamp')
                }
            }
        },

        async makePay(form) {

            const profileStore = useProfileStore()
            const {pushPurchase} = useEcommerceHelper()

            const products_all = form.products

            if (!profileStore.isAuth()) {
                popupStore.toggle('toast', {title: 'Войдите в аккаунт', timeout: 5000, type: 'warning'})
                return
            }

            const order_type_id = form.order_type_id

            const {phoneClear} = useHelper()
            const popupStore = usePopupStore()
            const {public: config} = useRuntimeConfig();

            form.products = products_all.map(item => {
                return {
                    id: item.id,
                    count: item.inCart
                }
            })

            if (form.is_pickup) {
                form.delivery_type_id = 1

                delete (form.full_address)
                delete (form.full_address_fias_id)
            } else {
                form.delivery_type_id = 2
            }

            if (form.delivery_type_id === 2) {
                if (!form.full_address) {
                    popupStore.toggle('toast', {title: 'Укажите адрес доставки', timeout: 5000, type: 'warning'})
                    return
                }
            }

            if (!form.first_name) {
                popupStore.toggle('toast', {title: 'Укажите имя', timeout: 3000, type: 'warning'})
                return
            }

            form.phone = phoneClear(form.phone)

            delete (form.is_pickup)

            $fetch(`${config.backOptions.api}/orders`, {
                method: 'POST',
                body: form,
                headers: {
                    'Authorization': `Bearer ${profileStore.credentials.token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(async (data) => {
                popupStore.toggle('toast', {title: data.message, timeout: 3000})

                // this.products = []
                // this.saveToLocalStorage(this.products)

                localStorage.setItem('product_cart_stamp', Date.now() + 1000 * 60 * 30)

                await pushPurchase(products_all, data.order_id)

                if (order_type_id === 1) {
                    navigateTo(data.formUrl, {external: true})
                } else {
                    popupStore.toggle('toast', {title: data.message, timeout: 2000})
                }
            }).catch(({response}) => {
                if (response.status === 422) {
                    popupStore.toggle('toast', {title: 'Проверьте введенные данные', timeout: 2000, type: 'error'})
                } else {
                    popupStore.toggle('toast', {title: response._data.message, timeout: 6000, type: 'error'})
                }
            })
        }

    },
    persist: true

})
