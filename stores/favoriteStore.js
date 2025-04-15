export const useFavoriteStore = defineStore('favoriteStore', {

    actions: {

        toggle(product) {
            const { public: config } = useRuntimeConfig();
            const profileStore = useProfileStore();
            const popupStore = usePopupStore();
            const { currentRoute } = useRouter();

            // console.log(product.is_favorite)
            //проверка на наличие is_favorite в товаре=авторизацию
            //если делать проверку в catch идет задержка так как уходит запрос и еще срет в консоль
            if (product.is_favorite === undefined) {
                popupStore.toggle('modal', { title: 'Авторизация', subtitle: 'Авторизуйтесь, что бы добавить товар в избранное', timeout: 1000, type: 'login', redirect: currentRoute.value.path })
            } else {
                $fetch(`${config.backOptions.api}/favorits`, {
                    method: product.is_favorite ? 'DELETE' : 'POST',
                    body: { product_id: product.id },
                    headers: {
                        'Authorization': `Bearer ${profileStore.credentials.token}`
                    }
                }).then((data) => {
                    product.is_favorite = !product.is_favorite
                    popupStore.toggle('toast', { title: data.message, timeout: 1000 })
                }).catch(({ response }) => {
                    // if (response.status === 401) {
                    //     popupStore.toggle('modal', { title: 'Авторизация', subtitle: 'Авторизуйтесь, что бы добавить товар в избранное', timeout: 1000, type: 'login' })
                    //     this.errors = response._data.errors
                    // } else {
                    popupStore.toggle('toast', { title: response?._data?.message ?? 'Ошибка сервера', timeout: 6000, type: 'error' })
                    // }
                })
            }
        },
    },
})