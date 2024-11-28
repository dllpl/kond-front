<template>

  <div class="">
    <section>
      <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
    </section>

    <main class="wrapper-container pt-3 pb-16">
      <SectionCatalogList :data="categories.data"
        :class="categories.data[0].children.length === 0 || categories.products.length === 0 ? 'mb-0' : 'mb-20'" />
      <SectionProductList :data="categories.products" v-if="categories.products.length" />
    </main>
  </div>
</template>

<script setup>

const route = useRoute();
const { public: config } = useRuntimeConfig();

let uri = route.params?.slug ? route.params.slug.join('/') : '';
const { data: categories } = await useFetch(config.backOptions.api + '/products-categories/' + uri);


const breadcrumbs = [
  {
    name: 'Каталог',
    slug: 'catalog',
  },
]
// console.log(uri)
// console.log(categories.value.data.children)
// console.log(categories.value.products.length)
// console.log(categories.value.data[0].children.length)
</script>
