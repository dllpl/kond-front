<template>
  <div>
    <section>
      <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
    </section>

    <main class="wrapper-container pb-16">
      <template v-if="!data.product">
        <LazySectionCatalogList :data="data.data"
          :class="data.data[0].children.length === 0 || data.products.length === 0 ? 'mb-0' : 'mb-20'" />
        <LazySectionProductList :data="data.products" v-if="data.products.length" />
      </template>

      <LazySectionProductPage v-else :product="data.product" />
    </main>
  </div>
</template>


<script setup>
const route = useRoute();
const { public: config } = useRuntimeConfig();
const { storage } = useRuntimeConfig().public.backOptions;
const profileStore = useProfileStore();

const uri = route.params?.slug ? route.params.slug.join('/') : '';

const full_url = config.backOptions.api + '/products-categories/' + uri;

const { data } = await useFetch(full_url, {headers: { ...profileStore.getAuthHeader()}},);

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

const id_product_page = !!data.value.product

useHead({
  title: current_title,
  meta: [
    {
      name: 'description',
      content: current_title === 'Каталог товаров' ? 'Каталог товаров интернет-магазина Всё для кондитера' : 'Купить ' + current_title + 'онлайн в интернет-магазине Всё для кондитера. Доставка по г. Набережные Челны и всей России'
    }
  ],
})

if (id_product_page) {
  useSchemaOrg([
    defineProduct({
      name: data.value.product.title,
      ...(data.value.product.images?.length ? {
          image: storage + data.value.product.images[0]
      }: {
          image : '/assets/img/default-product-img.webp'
      }),
      sku: data.value.product.id,
      brand: 'Всё для кондитера',
      offers: [
        { price: data.value.product.price, priceCurrency: 'RUB' }
      ],
    })
  ])
}

</script>