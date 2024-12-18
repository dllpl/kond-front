

export const useContactsStore = defineStore('contactsStore', {
    state: () => {
        return {
            contacts: [], // Массив контактов
        }
    },
    // getters: {
    //     getHeaderContactList() {
    //         return [
    //             { name: 'Позвонить нам', value: this.contacts.phone },
    //         ]
    //     },

    // },
    actions: {
        // async fetchContacts() {
        //     let { data } = await useFetch(config.backOptions.api + '/contacts');
        //     return this.contacts = data
        // }

        setContacts(data) {
            this.contacts = data; // Метод для записи данных в store
        },

    },

})



