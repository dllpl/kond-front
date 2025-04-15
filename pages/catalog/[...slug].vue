<script setup>
import HttpClient from "~/server/utils/httpClient.js";

const route = useRoute();
const {public: config} = useRuntimeConfig();
const {storage} = useRuntimeConfig().public.backOptions;
const profileStore = useProfileStore();

const uri = route.params?.slug ? route.params.slug.join('/') : '';

const {data} = await HttpClient('products-categories/' + uri)

if (!data.value) {
    throw createError({statusCode: 404, statusMessage: 'Страница не найдена'})
}

const breadcrumbs = [
  {
    name: 'Каталог',
    uri: 'catalog',
  },
  ...data.value.breadcrumbs,
]

let current_title = 'Каталог товаров'
let real_title = ''
if (data.value.breadcrumbs.length) {
    current_title = data.value.breadcrumbs.map(b => b.name).reverse().join(' – ')
    real_title = data.value.breadcrumbs[data.value.breadcrumbs.length - 1].name
}

const description = current_title === 'Каталог товаров' ? 'Каталог товаров магазина Всё для кондитера. Онлайн заказ. Быстрая доставка по г. Набережные Челны и всей России' : 'Купить или заказать ' + current_title + ' онлайн в магазине Всё для кондитера. Быстрая доставка по г. Набережные Челны и всей России'

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

  useSeoMeta({
    ogType: 'product',
    ...(data.value.product.images?.length ? {
      ogImage: storage + data.value.product.images[0]
    } : {
      ogImage: 'https://dljakonditera.ru/default-product-img.webp'
    }),
    ogImageType: 'image/webp',
    ogImageHeight: 600,
    ogImageWidth: 1200,
    ogLocale: 'ru_RU',
  })

  useHead({
    meta: [
      { property: 'product:price:amount', content: data.value.product.price },
      { property: 'product:price:currency', content: 'RUB' },
      { property: 'product:availability', content: data.value.product.price ? 'in stock' : 'out of stock' }
    ]
  })

  useSchemaOrg([
    defineProduct({
      name: data.value.product.title,
      ...(data.value.product.images?.length ? {
        image: storage + data.value.product.images[0]
      } : {
        image: 'https://dljakonditera.ru/default-product-img.webp'
      }),
      aggregateRating: {
        ratingValue: "4.9",
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
          availability: data.value.product.count > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
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
      name: real_title,
      description: description,
      itemListOrder: "Descending",
      numberOfItems: data.value.products ? data.value.products.length : 0,
      ...(data.value.products ? {
        itemListElement: data.value.products.map(product => ({
          "@type": "Product",
          name: product.title,
          image: product.images?.length ? storage + product.images[0] : 'https://dljakonditera.ru/default-product-img.webp',
          description: description,
          sku: product.id,
          brand: {
            "@type": "Brand",
            name: 'Всё для кондитера'
          },
          offer: {
              "@type": "Offer",
              ...(product.price > 0 ? {
                price: product.price,
              } : {}),
              priceCurrency: 'RUB',
              availability: product.count > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
              itemCondition: 'https://schema.org/NewCondition',
              url: 'https://dljakonditera.ru/catalog/' + product.slug_path,
              seller: {
                "@type": "Organization",
                name: 'Всё для кондитера dljakonditera.ru'
              }
            },
        }))
      }: {})
    })
  ])
}
</script>
<template>
  <div>
    <section>
      <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs"/>
    </section>
    <main class="wrapper-container pb-16">
      <template v-if="!data.product">
        <SectionCatalogList :data="data.data"
                            :class="data.data[0].children.length === 0 || data.products.length === 0 ? 'mb-0' : 'mb-20'"/>
        <LazySectionProductList :data="data.products" v-if="data.products.length"/>
      </template>
      <LazySectionProductPage v-else :product="data.product"/>
    </main>
  </div>
</template>