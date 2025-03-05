<template>
    <div>
        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs"/>
        </section>
        <main class="wrapper-container pb-16">
            <template v-if="!data.product">
                <SectionCatalogList :data="data.data" :class="data.data[0].children.length === 0 || data.products.length === 0 ? 'mb-0' : 'mb-20'"/>
                <LazySectionProductList :data="data.products" v-if="data.products.length"/>
            </template>
            <LazySectionProductPage v-else :product="data.product"/>
        </main>
    </div>
</template>

<script setup>
const route = useRoute();
const {public: config} = useRuntimeConfig();
const {storage} = useRuntimeConfig().public.backOptions;
const profileStore = useProfileStore();

const uri = route.params?.slug ? route.params.slug.join('/') : '';

const full_url = config.backOptions.api + '/products-categories/' + uri;

const {data} = await useFetch(full_url,
    {headers: {...profileStore.getAuthHeader()},},
);

const breadcrumbs = [
    {
        name: 'Каталог',
        uri: 'catalog',
    },
    ...data.value.breadcrumbs,
]

let current_title = 'Каталог товаров'
if (data.value.breadcrumbs.length) {
    current_title = data.value.breadcrumbs[data.value.breadcrumbs.length - 1].name
}

const description = current_title === 'Каталог товаров' ? 'Каталог товаров интернет-магазина Всё для кондитера' : 'Купить ' + current_title + ' онлайн в интернет-магазине Всё для кондитера. Доставка по г. Набережные Челны и всей России'

const is_product_page = !!data.value.product

useHead({
    title: current_title,
    meta: [
        {
            name: 'description',
            content: description
        }
    ],
})

if (is_product_page) {
    useSchemaOrg([
        defineProduct({
            name: data.value.product.title,
            ...(data.value.product.images?.length ? {
                image: storage + data.value.product.images[0]
            } : {
                image: '/assets/img/default-product-img.webp'
            }),
            aggregateRating: {
                ratingValue: "4.8",
                reviewCount: 24
            },
            description: description,
            sku: data.value.product.id,
            brand: {
                "@type": "Brand",
                name: 'Всё для кондитера'
            },
            offers: [
                {
                    "@type": "Offer",
                    price: data.value.product.price,
                    priceCurrency: 'RUB',
                    availability: 'https://schema.org/InStock',
                    itemCondition: 'https://schema.org/NewCondition',
                    url: 'https://dljakonditera.ru/catalog/' + data.value.product.slug_path,
                    seller: {
                        "@type": "Organization",
                        name: 'Всё для кондитера dljakonditera.ru'
                    }
                }
            ],
        })
    ])
} else {

    useSchemaOrg([
        defineItemList({
            name: current_title,
            description: description,
            brand: 'Всё для кондитера',
            offers: [
                {price: 1, priceCurrency: 'RUB'}
            ],
        })
    ])
}

</script>