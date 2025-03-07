export const useCartStore = defineStore('cartStore', {
    state: () => ({
        products: []
    }),
    getters: {
        // сумма товара
        totalCountProducts() {
            return this.products.length
        },

        // сумма все товаров
        totalPriceAllProducts() {
            let arr = this.products;
            let initialValue = 0;
            let result = arr.reduce((accumulator, arr) => {
                return accumulator = accumulator + (arr.price * arr.inCart);
            }, initialValue);
            return result
        },

    },
    actions: {
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
            // console.log(items)
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
                popupStore.toggle('toast', {title: 'Войдите в аккаунт', timeout: 5000, type: 'warning'})
                return
            }

            const {phoneClear} = useHelper()
            const popupStore = usePopupStore()
            const {public: config} = useRuntimeConfig();

            data.products = data.products.map(item => {
                return {
                    id: item.id,
                    count: item.inCart
                }
            })

            if (data.is_pickup) {
                data.delivery_type_id = 1

                delete(data.full_address)
                delete(data.full_address_fias_id)
            } else {
                data.delivery_type_id = 2
            }

            if (data.delivery_type_id === 2) {
                if (!data.full_address) {
                    popupStore.toggle('toast', {title: 'Укажите адрес доставки', timeout: 5000, type: 'warning'})
                    return
                }
            }

            data.phone = phoneClear(data.phone)

            delete (data.is_pickup)

            popupStore.toggle('toast', {title: 'Оформляем Ваш заказ', timeout: 2000})

            $fetch(`${config.backOptions.api}/orders`, {
                method: 'POST',
                body: data,
                headers: {
                    'Authorization': `Bearer ${profileStore.credentials.token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then((data) => {
                popupStore.toggle('toast', {title: data.message, timeout: 10000})
                this.products = []
                this.saveToLocalStorage(this.products)
                navigateTo('/lk')
                navigateTo(data.formUrl, {open: true})
            }).catch(({response}) => {
                // console.log(response._data)
                if (response.status === 422) {
                    popupStore.toggle('toast', {title: 'Проверьте введенные данные', timeout: 2000, type: 'error'})
                    // this.errors = response._data.errors
                } else {
                    popupStore.toggle('toast', {title: response._data.message, timeout: 6000, type: 'error'})
                    // this.errors = null
                }
            })
        }

    },
    persist: true

})
