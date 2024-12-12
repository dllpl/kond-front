export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      contacts: {
        phone: '79600594925',
        address: ''
      }
    }
  },
  getters: {
    getHeaderContactList() {
      return [
        { name: 'Позвонить нам', value: this.contacts.phone },
      ]
    },

  },
  actions: {
    async fetchContacts() {
      let { data } = await useFetch();

      this.contacts = data
    }
  },
})

//header
//product

//   const callsToAction = [
// 	{ name: 'Позвонить нам', href: '#', },
// 	{ name: 'Остались вопросы?', href: '#', },
// ]