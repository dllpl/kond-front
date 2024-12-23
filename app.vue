<template>
    <NuxtLayout>
        <Header />
        <NuxtPage />
        <Footer />
        <ElementsNotifications />
    </NuxtLayout>
</template>


<script setup>
const contactsStore = useContactsStore(); // Получаем доступ к store

const { public: config } = useRuntimeConfig();
const { data: contacts } = await useFetch(config.backOptions.api + '/contacts');

// Функция для загрузки контактов с API
contactsStore.setContacts(contacts.value.data); // Записываем полученные данные в store
</script>