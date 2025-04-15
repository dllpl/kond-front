export const useNotificationStore = defineStore('notificationStore', {

    actions: {
        push(productId) {
            const { public: config } = useRuntimeConfig();
            const profileStore = useProfileStore();
            const popupStore = usePopupStore();
            const { currentRoute } = useRouter();

            if (!profileStore.isAuth()) {
                popupStore.toggle('modal', { title: 'Авторизация', subtitle: 'Авторизуйтесь, что бы получить уведомление о поступлении товара', type: 'login', redirect: currentRoute.value.path })
            }
            else {
                $fetch(`${config.backOptions.api}/products-notification`, {
                    method: 'POST',
                    body: { product_id: productId },
                    headers: {
                        'Authorization': `Bearer ${profileStore.credentials.token}`
                    }
                }).then((data) => {
                    popupStore.toggle('toast', { title: data.message, timeout: 1000 })
                }).catch(({ response }) => {
                    popupStore.toggle('toast', { title: response?._data?.message ?? 'Ошибка сервера', timeout: 6000, type: 'error' })
                })
            }

        }
    }
})


