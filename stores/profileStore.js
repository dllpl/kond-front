import {usePopupStore} from "~/stores/popupStore.js";

export const useProfileStore = defineStore('profileStore', {
    state: () => ({
        credentials: {
            token: null,
        },
        profile_is_set: false,
        profile: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            patronymic: '',
            full_address: '',
        },
        orders: [],
        favorites: [],

        errors: null,
        disabled: false,
    }),

    actions: {
        /**
         * @param data
         */
        setAuth(data) {
            this.$patch(data)

            const maxAge = data.credentials.expires_at * 60

            useCookie('auth_token', {
                maxAge: maxAge,
            }).value = data.credentials.token
        },

        setProfile(data) {
            this.$patch(data)
            this.profile_is_set = true
        },

        async getProfile() {

            const {public: config} = useRuntimeConfig();

            try {
                const {data: profile} = await useFetch(`${config.backOptions.api}/user/profile`, {headers: {'Authorization': `Bearer ${this.credentials.token}`}})

                this.setProfile(profile.value)

            } catch (error) {
                if (error.status === 401) {
                    return navigateTo('/login', {redirectCode: 401})
                }

                throw createError({
                    statusCode: error.status,
                    statusMessage: error.message
                })
            }
        },

        isAuth() {
            const auth_token = useCookie('auth_token').value
            if (auth_token) {

                this.credentials.token = auth_token

                return true
            }
            return false
        },

        async updateProfile() {

            const form = this.profile

            this.disabled = true

            const {public: config} = useRuntimeConfig();
            const {phoneClear} = useHelper()
            const profileStore = useProfileStore();
            const popupStore = usePopupStore();

            form.phone = phoneClear(form.phone)

            await $fetch(`${config.backOptions.api}/user/profile`, {
                method: 'POST',
                body: form,
                headers: {
                    'Authorization': `Bearer ${profileStore.credentials.token}`
                }
            }).then((data) => {
                this.profile = data.profile
                this.errors = null
                popupStore.toggle('toast', {title: 'Профиль обновлен', timeout: 2000})
            }).catch(({response}) => {

                if (response.status === 422) {
                    popupStore.toggle('toast', {title: 'Проверьте введенные данные', timeout: 2000, type: 'error'})
                    this.errors = response._data.errors
                } else {
                    popupStore.toggle('toast', {title: response._data.message, timeout: 6000, type: 'error'})
                    this.errors = null
                }

            }).finally(() => {
                this.disabled = false
            })
        },

        async goToOrder(id) {

            const {public: config} = useRuntimeConfig();
            const profileStore = useProfileStore()
            const popupStore = usePopupStore();

            await $fetch(`${config.backOptions.api}/orders/${id}`, {headers: {'Authorization': `Bearer ${profileStore.credentials.token}`}}).then((data) => {
                popupStore.toggle('modal', {type: 'order', products: data, width: 'max-w-full'})
            }).catch(({response}) => {
                popupStore.toggle('toast', {title: response._data.message, timeout: 6000, type: 'error'})
            })
        },
    },

    getters: {},
})