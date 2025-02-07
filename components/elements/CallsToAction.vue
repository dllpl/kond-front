<template>
    <div
        class="mt-10 border-y border-gray-200 divide-y divide-gray-900/5 sm:grid-cols-3 sm:divide-x  sm:border-x sm:border-gray-900/5">
        <NuxtLink :to="`tel:${contacts.phone}`"
            class="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 lg:justify-center sm:justify-center sm:px-0">
            <Icon name="mdi-light:phone" class="w-6 h-6 " />
            Позвонить нам
        </NuxtLink>

        <button
            @click="popupStore.toggle('modal', { title: 'Форма обратного звонка', subtitle: 'Заполните форму обратного звонка', type: 'login', })"
            class="w-full flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 lg:justify-center sm:justify-center sm:px-0">
            <Icon name="mdi-light:help-circle" class="w-6 h-6 " />
            Остались вопросы?
        </button>
    </div>
</template>

<script setup>
const { contacts } = useContactsStore();
const popupStore = usePopupStore();
</script>