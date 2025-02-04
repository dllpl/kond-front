export const useProfileStore = defineStore('profileStore', {
    state: () => ({
        credentials: {
            token: null,
        },
        profile: null,
        orders: [],
        favorites: []
    }),

    actions: {
        /**
         * @param data
         */
        setAuth(data) {
            this.$patch(data)

            const credentials = data.credentials

            useCookie('auth_token', {maxAge: credentials.expires_at * 60}).value = credentials.token
        },

        isAuth() {
            const auth_token = useCookie('auth_token')
            if (auth_token.value) {

                this.credentials.token = auth_token.value

                return true
            }
            return false
        },

        updateProfile() {

        }
    },

    getters: {},
})