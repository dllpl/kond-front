<template>

    <div>
        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>

        <main class="wrapper-container  pb-16">
            <h1 class="mb-8 font-bold text-4xl 2xl:text-3xl xs:text-2xl">{{
                sets.data.title ?? 'Каталог праздничных предложений'
            }}
            </h1>
            <SectionProductTop :data="sets.data" class="mb-20" v-if="sets.data?.length" />

            <SectionProductList :data="sets.data.products" v-if="sets.data?.products" />

        </main>
    </div>
</template>


<script setup>
import HttpClient from "~/server/utils/httpClient.js";

const route = useRoute();
const { public: config } = useRuntimeConfig();

let uri = route.params?.slug ? route.params.slug.join('/') : '';
const {data: sets} = await HttpClient('products-sets/' + uri);

const breadcrumbs = [
    {
        name: 'Подборки',
        uri: 'set',
    },
    ...sets.value.breadcrumbs
]


let current_title = 'Каталог праздничных предложений'
if (sets.value.breadcrumbs.length) {
    current_title = 'Товары для кондитеров на ' + sets.value.breadcrumbs[sets.value.breadcrumbs.length - 1].name
}

// const id_product_page = !!data.product

useHead({
    title: current_title,
    meta: [
        {
            name: 'description',
            content: current_title === 'Каталог праздничных предложений' ? 'Тематические подборки товаров для праздников в интернет-магазине «Всё для кондитера»' : 'Купить ' + current_title + 'онлайн в интернет-магазин Всё для кондитера. Доставка по г. Набережные Челны и всей России'
        }
    ],
})
</script>