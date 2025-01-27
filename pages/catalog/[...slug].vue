<template>

  <div class="">
    <section>
      <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs"/>
    </section>

    <main class="wrapper-container pb-16">
      <template v-if="!data.product">
        <SectionCatalogList :data="data.data"
                            :class="data.data[0].children.length === 0 || data.products.length === 0 ? 'mb-0' : 'mb-20'"/>
        <SectionProductList :data="data.products" v-if="data.products.length"/>
      </template>

      <SectionProductPage v-else :product="data.product"/>
    </main>
  </div>
</template>


<script setup>
const route = useRoute();
const {public: config} = useRuntimeConfig();

let uri = route.params?.slug ? route.params.slug.join('/') : '';
const {data} = await useFetch(config.backOptions.api + '/products-categories/' + uri);

const breadcrumbs = [
  {
    name: 'Каталог',
    uri: 'catalog',
  },
  ...(data.value?.breadcrumbs ? data.value.breadcrumbs : {}),
]
</script>