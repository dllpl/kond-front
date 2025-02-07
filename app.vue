<template>
    <NuxtLayout>
        <Header />
        <NuxtPage />
        <Footer />
        <ElementsNotifications />
        <ElementsModal />
    </NuxtLayout>
</template>


<script setup>
const contactsStore = useContactsStore(); // Получаем доступ к store
const profileStore = useProfileStore();
const cartStore = useCartStore();

const { public: config } = useRuntimeConfig();
const { data: contacts } = await useFetch(config.backOptions.api + '/contacts');

// Функция для загрузки контактов с API
contactsStore.setContacts(contacts.value.data); // Записываем полученные данные в store

if (process.client) {
    cartStore.loadFromLocalStorage();
}
</script>