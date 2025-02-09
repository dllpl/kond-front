export const usePopupStore = defineStore('popupStore', {
    state: () => ({
        search: {
            open: false,
            options: {}
        },
        burger: {
            open: false,
            options: {}
        },
        modal: {
            open: false,
            options: {
                title: null,
                subtitle: null,
                type: 'login',
            }
        },
        drawer: {
            open: false,
            options: {}
        },
        toast: {
            open: false,
            options: {
                type: 'success',
                title: null,
                subtitle: null,
                timeout: 3000,
            },
        },
    }),
    actions: {
        toggle(type, options = {}) {

            if (this[type].open) {
                this[type].open = false
            }

            if (type === 'toast' || this[type].open) {
                setTimeout(() => {
                    this[type].open = false
                }, options.timeout || 3000)
            }
            this[type].open = !this[type].open
            this[type].options = options
        },

        close(type) {
            this[type].open = false;
            // this[type].options = {};
        },
    },
    getters: {},
})