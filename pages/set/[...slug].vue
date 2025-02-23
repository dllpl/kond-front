<template>

    <div class="">
        <section class="flex items-center wrapper-container">
            <ElementsMobileCatalogPopover />
        </section>

        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>

        <main class="wrapper-container  pb-16">
            <h1 class="mb-8 font-bold text-4xl 2xl:text-3xl xs:text-2xl">{{
                data.data.title ?? 'Каталог праздничных предложений'
            }}
            </h1>
            <SectionProductTop :data="data.data" class="mb-20" v-if="data.data?.length" />

            <SectionProductList :data="data.data.products" v-if="data.data?.products" />

        </main>
    </div>
</template>


<script setup>
const route = useRoute();
const { public: config } = useRuntimeConfig();

let uri = route.params?.slug ? route.params.slug.join('/') : '';
const { data } = await useFetch(config.backOptions.api + '/products-sets/' + uri);

const breadcrumbs = [
    {
        name: 'Подборки',
        uri: 'set',
    },
    ...data.value.breadcrumbs
]


let current_title = 'Каталог праздничных предложений'
if (data.value.breadcrumbs.length) {
    current_title = 'Товары для кондитеров на ' + data.value.breadcrumbs[data.value.breadcrumbs.length - 1].name
}

// const id_product_page = !!data.value.product

useHead({
    title: current_title,
    meta: [
        {
            name: 'description',
            content: current_title === 'Каталог праздничных предложений' ? 'Тематические подборки товаров для праздников в интернет-магазине «Всё для кондитера»' : 'Купить ' + current_title + ' интернет-магазин Всё для кондитера. Доставка по г. Набережные Челны и всей России'
        }
    ],
})
</script>