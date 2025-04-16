export const useEcommerceHelper = () => {
    return {
        // Просмотр товара
        // Данные должны отправляться в момент открытия страницы с карточкой товара.
        pushProductDetail: (product) => {

            if (!process.client) return

            window.dataLayer.push({
                "ecommerce": {
                    "currencyCode": "RUB",
                    "detail": {
                        "products": [
                            {
                                "id": product.id,
                                "name": product.title,
                                "price": product.price,
                                ...(product?.category?.title && {
                                    "category": product.category.title
                                }),
                            }
                        ]
                    }
                }
            });
        },

        // Добавление товара в корзину
        // Данные должны отправляться в момент добавления заказа в корзину. Например, при нажатии кнопки «Добавить в корзину».
        pushAddToCart: (product, qty = 1) => {

            if (!process.client) return

            window.dataLayer.push({
                "ecommerce": {
                    "currencyCode": "RUB",
                    "add": {
                        "products": [
                            {
                                "id": product.id,
                                "name": product.title,
                                "price": product.price,
                                ...(product?.category?.title && {
                                    "category": product.category.title
                                }),
                                "quantity": qty,
                            }
                        ]
                    }
                }
            });
        },

        // Удаление товара из корзины
        // Данные должны отправляться в момент удаления заказа из корзины.
        pushRemoveFromCart: (product, qty = 1) => {
            if (!process.client) return
            window.dataLayer.push({
                "ecommerce": {
                    "currencyCode": "RUB",
                    "remove": {
                        "products": [
                            {
                                "id": product.id,
                                "name": product.title,
                                "price": product.price,
                                ...(product?.category?.title && {
                                    "category": product.category.title
                                }),
                                "quantity": qty,
                            }
                        ]
                    }
                }
            });
        },

        // Покупка
        // Данные должны отправляться в момент подтверждения заказа.
        pushPurchase: (products, order_number) => {
            return new Promise((resolve, reject) => {
                try {

                    console.log({
                        "ecommerce": {
                            "currencyCode": "RUB",
                            "purchase": {
                                "actionField": {
                                    "id": order_number
                                },
                                "products": products.map(product => {
                                    return {
                                        "id": product.id,
                                        "name": product.title,
                                        "price": product.price,
                                        ...(product?.category?.title && {
                                            "category": product.category.title
                                        }),
                                        "quantity": product.inCart
                                    }
                                })
                            }
                        }
                    })

                    window.dataLayer.push({
                        "ecommerce": {
                            "currencyCode": "RUB",
                            "purchase": {
                                "actionField": {
                                    "id": order_number
                                },
                                "products": products.map(product => {
                                    return {
                                        "id": product.id,
                                        "name": product.title,
                                        "price": product.price,
                                        ...(product?.category?.title && {
                                            "category": product.category.title
                                        }),
                                        "quantity": product.inCart
                                    }
                                })
                            }
                        }
                    })
                } catch (error) {
                    reject(error)
                }

                resolve(true)
            })
        }
    }
}