

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        products: [
            // {
            //     id: 1,
            //     name: 'test1',
            //     href: '#',
            //     price: 10.00,
            //     quantity: 2,
            //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-03.jpg',
            // },
            // {
            //     id: 2,
            //     name: 'test2',
            //     href: '#',
            //     price: 2.00,
            //     quantity: 5,
            //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
            // },
            // {
            //     id: 3,
            //     name: 'test3',
            //     href: '#',
            //     price: 4.00,
            //     quantity: 2,
            //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-03.jpg',
            // },
        ]
    }),
    getters: {
        totalCountProducts() {
            return this.products.length
        },

        // сумма все товаров
        totalPriceAllProducts() {
            let arr = this.products;
            let initialValue = 0;
            let result = arr.reduce((accumulator, arr) => {
                return accumulator = accumulator + (arr.price * arr.quantity);
            }, initialValue);
            return result
        },

    },
    actions: {
        // сумма шт * кол-во
        totalPriceProduct(item) {
            return item.inCard * item.price;
        },

        //удаление товара из корзины
        removeCart(productId) {
            return this.products = this.products.filter(item => item.id !== productId);
        },

        // // Добавить товар в корзину
        // addToCart(i = 1) {
        //     inCart.value = true;
        //     quantity.value = i;
        // },

        // Увеличить количество товара
        increment(newProduct, i = 1) {
            console.log(newProduct.id);
            console.log(this.products);

            newProduct.inCard = i;
            return this.products.push(newProduct);
        },

        // Уменьшить количество товара
        decrement(productId) {
            if (quantity.value > 1) {
                quantity.value--;
            } else {
                removeFromCart();
            }
        },


    }

})
