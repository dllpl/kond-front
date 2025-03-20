<script setup>
const {public: config} = useRuntimeConfig();
const contactsStore = useContactsStore(); // Получаем доступ к store

const {data} = await $fetch(config.backOptions.api + '/contacts');
// Функция для загрузки контактов с API
contactsStore.setContacts(data); // Записываем полученные данные в store
</script>
<template>
  <Header/>
  <ElementsMobileCatalogPopover/>
  <slot/>
  <Footer/>
  <ElementsNotifications/>
  <ElementsModal/>
</template>
