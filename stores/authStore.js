export const useAuthStore = defineStore('authStore', {
    state: () => ({
        register: {
            form: {
                email: null,
                password: null,
                phone: null,
            },
            errors: null
        },
        login: {
            form: {
                phone: null,
                password: null
            },
            errors: null
        },
    }),

    actions: {
        async makeRegister() {

            let form = this.register.form

            const {public: config} = useRuntimeConfig();
            const {phoneClear} = useHelper()
            const profileStore = useProfileStore()

            form.phone = phoneClear(form.phone)

            const res = await $fetch(`${config.backOptions.api}/user/register`, {
                method: 'POST',
                body: form
            }).catch(({response}) => {
                if (response.status === 422) {
                    this.register.errors = response._data.errors
                }
            })

            profileStore.setAuth(res)

            navigateTo('/lk')
        },
        async makeLogin() {

            let form = this.login.form

            const {public: config} = useRuntimeConfig();
            const {phoneClear} = useHelper()
            const profileStore = useProfileStore()

            form.phone = phoneClear(form.phone)

            const res = await $fetch(`${config.backOptions.api}/user/login`, {
                method: 'POST',
                body: form
            }).catch(({response}) => {
                if (response.status === 422) {
                    this.login.errors = response._data.errors
                }
            })

            profileStore.setAuth(res)

            navigateTo('/lk')
        }
    },

    getters: {}
})