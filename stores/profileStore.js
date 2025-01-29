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
         * @returns {Promise<unknown>}
         */
        init() {
            return new Promise(resolve => {
                const auth_token = useCookie('auth_token')
                if (auth_token.value) {

                    this.credentials.token = auth_token.value

                    resolve({isAuth: true, token: auth_token.value})
                }
                resolve({isAuth: false, token: null})
            })
        },
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