export const useAuthStore = defineStore('authStore', {
    state: () => ({
        register: {
            form: {
                email: null,
                password: null,
                phone: null,
            },
            errors: null,
            disabled: false,
        },
        login: {
            form: {
                phone: null,
                password: null
            },
            errors: null,
            disabled: false,
        },
    }),

    actions: {
        async makeRegister() {

            this.register.disabled = true

            let form = this.register.form

            const {public: config} = useRuntimeConfig();
            const {phoneClear} = useHelper()
            const profileStore = useProfileStore()
            const popupStore = usePopupStore();

            form.phone = phoneClear(form.phone)

            await $fetch(`${config.backOptions.api}/user/register`, {
                method: 'POST',
                body: form
            }).then((res) => {

                popupStore.toggle('toast', {title: 'Вы успешно зарегистрировались', timeout: 2000})
                profileStore.setAuth(res)
                navigateTo('/lk')

            }).catch(({response}) => {
                if(response.status === 422) {
                    this.register.errors = response._data.errors
                } else {
                    popupStore.toggle('toast', {title: response._data.message, timeout: 6000, type: 'error'})
                    this.register.errors = null
                }
            }).finally(() => {
                this.register.disabled = false
            })
        },
        async makeLogin() {

            this.login.disabled = true

            let form = this.login.form

            const {public: config} = useRuntimeConfig();
            const {phoneClear} = useHelper()
            const profileStore = useProfileStore()
            const popupStore = usePopupStore();

            form.phone = phoneClear(form.phone)

            await $fetch(`${config.backOptions.api}/user/login`, {
                method: 'POST',
                body: form
            }).then((data) => {

                popupStore.toggle('toast', {title: 'Успешная авторизация', timeout: 2000, type: 'success'})
                profileStore.setAuth(data)
                navigateTo('/lk')

            }).catch(({response}) => {

                if(response.status === 422) {
                    this.login.errors = response._data.errors
                } else {
                    popupStore.toggle('toast', {title: response._data.message, timeout: 6000, type: 'error'})
                    this.login.errors = null
                }

            }).finally(() => {
                this.login.disabled = false
            })
        }
    },

    getters: {}
})