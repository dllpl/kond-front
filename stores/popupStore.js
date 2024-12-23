export const usePopupStore = defineStore('popupStore', {
    state: () => ({
        search: false,
        burger: false,
        modal: false,
        drawer: false,
        toast: false,
    }),
    getters: {},
    actions: {
        toggle(value) {
            console.log('open' + value)
            if (value === 'toast' || this[value]) {
                setTimeout(() => {
                    this[value] = false
                }, 2000)
            }
            this[value] = !this[value]
        },

        close(value) {
            this[value] = false;
        },
    }
})