export const usePopupStore = defineStore('popupStore', {
    state: () => ({
        search: false,
        burger: false,
        modal: false,
        drawer: false,
    }),
    getters: {},
    actions: {
        toggle(value) {
            console.log('open')
            this[value] = !this[value]
        },

        close(value) {
            console.log('close')
            this[value] = false;
        },
    }
})