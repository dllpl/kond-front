export const useAuthStore = defineStore('authStore', {
    state: () => ({
        register: {
            form: {
                email: null,
                password: null,
                phone: null,
                agree: false
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

            const popupStore = usePopupStore();

            this.register.disabled = true

            let form = this.register.form

            if(!form?.agree) {
                popupStore.toggle('toast', {title: 'Дайте своё согласие', timeout: 6000, type: 'error'})
                this.register.disabled = false
                return;
            }

            const {public: config} = useRuntimeConfig();
            const {phoneClear} = useHelper()
            const profileStore = useProfileStore()

            form.phone = phoneClear(form.phone)

            await $fetch(`${config.backOptions.api}/user/register`, {
                method: 'POST',
                body: form
            }).then((res) => {

                popupStore.toggle('toast', {title: 'Вы успешно зарегистрировались', timeout: 2000})
                profileStore.setAuth(res)
                navigateTo('/lk', {external: true})

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
        async makeLogin(redirect = '/lk') {

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
                navigateTo(redirect, {external: true})

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