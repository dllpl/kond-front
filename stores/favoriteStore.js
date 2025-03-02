export const useFavoriteStore = defineStore('favoriteStore', {

    actions: {

        toggle(product) {

            const { public: config } = useRuntimeConfig();
            const profileStore = useProfileStore();
            const popupStore = usePopupStore();


            $fetch(`${config.backOptions.api}/favorits`, {
                method: product.is_favorite ? 'DELETE' : 'POST',
                body: { product_id: product.id },
                headers: {
                    'Authorization': `Bearer ${profileStore.credentials.token}`
                }
            }).then((data) => {
                product.is_favorite = !product.is_favorite
            }).catch(({ response }) => {
                popupStore.toggle('toast', { title: response?._data?.message ?? 'Ошибка сервера', timeout: 6000, type: 'error' })
            })
        },
    },
})