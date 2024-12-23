
export const useContactsStore = defineStore('contactsStore', {
    state: () => {
        return {
            contacts: [], // Массив контактов
        }
    },
    actions: {
        setContacts(data) {
            this.contacts = data; // Метод для записи данных в store
        },

    },

})



