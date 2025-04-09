<script setup>
const breadcrumbs = [
    {
        name: 'Политика конфиденциальности', slug: '/policy'
    },
]
const { contacts } = useContactsStore();

useHead({
    title: 'Отзывы о магазине',
    meta: [
        {
            name: 'description',
            content: 'Отзывы о компании ☛ «Всё для кондитера» - один из лучших оптово розничных магазинов товаров для кондитеров в городе Набережные Челны.'
        }
    ],
})
</script>

<template>
    <div class="">

        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs"/>
        </section>
        <main class="wrapper-container pt-3 pb-16">
            <h1 class="text-3xl font-bold tracking-tight mb-4 xs:text-2xl">Отзывы о магазине на Яндекс и Google
            </h1>
            <div class="h-[1050px] overflow-hidden relative max-w-[760px]">
                <iframe src="https://yandex.ru/maps-reviews-widget/1925028904?comments" class="w-full h-full rounded-md"></iframe>
            </div>
        </main>
    </div>
</template>

<style scoped>

</style>