<script setup >
import HttpClient from "~/server/utils/httpClient.js";

const breadcrumbs = [
    {
        name: 'Скидки', slug: '/discount'
    },
]

useHead({
    title: 'Скидки',
    meta: [
        {
            name: 'description',
            content: 'Скидки. Скидочные предложения от магазина Всё для кондитера. Покупайте с выгодой.'
        }
    ],
})

const route = useRoute();
let uri = route.params?.slug ? route.params.slug.join('/') : '';
const {data: sets} = await HttpClient('products-sets/' + uri);

</script>

<template>
    <div class="">

        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>
        <main class="wrapper-container pt-3 pb-16">
            <h1 class="text-3xl font-bold tracking-tight mb-4 xs:text-2xl">
                Скидочные предложения от магазина Всё для кондитера
            </h1>

            <SectionProductTop :data="sets.data" class="mb-20" v-if="sets.data?.length" />

            <SectionProductList :data="sets.data.products" v-if="sets.data?.products" />
        </main>
    </div>
</template>

<style scoped>

</style>