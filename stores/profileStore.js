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
            this.state = data

            const credentials = data.credentials

            useCookie('auth_token', {maxAge: credentials.expires_at * 60}).value = credentials.token
        },

        /**
         * @returns {boolean}
         */
        isAuth() {
            return !!this.credentials.token
        }
    },

    getters: {},
})