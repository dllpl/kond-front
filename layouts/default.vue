<script setup>
import HttpClient from "~/server/utils/httpClient.js";

const {public: config} = useRuntimeConfig();
const contactsStore = useContactsStore(); // Получаем доступ к store

const {data: response} = await HttpClient('contacts');
// Функция для загрузки контактов с API
contactsStore.setContacts(response.value.data); // Записываем полученные данные в store
</script>
<template>
    <Header/>
    <ElementsMobileCatalogPopover/>
    <slot/>
    <Footer/>
    <ElementsNotifications/>
    <ElementsModal/>
</template>
