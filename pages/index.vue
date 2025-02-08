<template>
  <main class="wrapper-container py-16 sm:py-8">
    <div class="grid grid-cols-custom gap-y-20 gap-x-8 lg:grid-cols-1 lg:gap-y-20 lg:gap-x-0">

      <div class="col-span-1 lg:hidden">
          <ElementsMenuDropDown :data="categories.data"/>
      </div>

      <div class="col-span-1">
        <div class="mb-20 lg:mb-0">
          <ElementsSliderBanner :data="banners.data"/>
        </div>
        <SectionAdvantages class="lg:hidden"/>
      </div>
      <ClientOnly>
        <ElementsSliderProduct v-if="productsOffers" :data="productsOffers.data" title="Спецпредложения"
                                   class="col-span-2 lg:grid-cols-1  relative"/>

        <SectionProductTop v-if="productsSets" :data="productsSets.data" class="col-span-2 lg:grid-cols-1 "
                           title="Популярные категории"/>
      </ClientOnly>

      <SectionPromoPrice class="col-span-2 lg:grid-cols-1 "/>
      <ClientOnly>
        <LazyElementsSliderProduct v-if="productsNew" :data="productsNew.data" title="Новинки"
                                   class="col-span-2 lg:grid-cols-1  relative"/>
      </ClientOnly>
      <SectionAdvantages class="hidden lg:block"/>
      <SectionFollowSocial class="col-span-2 lg:grid-cols-1 "/>
      <SectionPromoCook class="col-span-2 lg:grid-cols-1 "/>
    </div>

  </main>
</template>

<script setup>
const {public: config} = useRuntimeConfig();

const {data: banners} = await useFetch(config.backOptions.api + '/banners');
const {data: categories} = await useFetch(config.backOptions.api + '/products-categories');

const {data: productsNew} = await useFetch(config.backOptions.api + '/products/new', {server: false});
const {data: productsOffers} = await useFetch(config.backOptions.api + '/products/spec', {server: false});
const {data: productsSets} = await useFetch(config.backOptions.api + '/products-sets', {server: false});
</script>