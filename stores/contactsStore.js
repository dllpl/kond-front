
export const useContactsStore = defineStore('contactsStore', {
    state: () => {
        return {
            contacts: {
                whatsapp_link: '',
                email: '',
                phone: '',
                address: '',
                instagram_link: '',
                telegram_link: '',
            }, // Массив контактов
        }
    },
    actions: {
        setContacts(data) {
            this.contacts = data; // Метод для записи данных в store
        },

    },

})



