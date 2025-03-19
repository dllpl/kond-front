<script setup>
useHead({
    title: 'Интернет-магазин для кондитеров с доставкой по г. Набережные Челны и России',
    meta: [
        {
            name: 'description',
            content: 'Всё для кондитера - товары для кондитеров с доставкой по г. Набережные Челны и России'
        }
    ],
    link: [
        {
            rel: 'canonical',
            href: '/'
        }
    ],
})

const {public: config} = useRuntimeConfig();
const profileStore = useProfileStore();

const banners = await $fetch(config.backOptions.api + '/banners');
const categories = await $fetch(config.backOptions.api + '/products-categories');

const {status: productsNewStatus, data: productsNew} = await useFetch(config.backOptions.api + '/products/new', {headers: {...profileStore.getAuthHeader()},});
const {
    status: productsOffersStatus,
    data: productsOffers
} = await useFetch(config.backOptions.api + '/products/spec', {headers: {...profileStore.getAuthHeader()},});
const {
    status: productsSetsStatus,
    data: productsSets
} = await useFetch(config.backOptions.api + '/products-sets', );
</script>
<template>
    <main class="wrapper-container py-16 sm:pb-8 sm:pt-4">
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

                <LazyElementsSliderProduct v-if="productsOffersStatus !== 'pending'" :data="productsOffers.data"
                                       title="Спецпредложения" class="col-span-2 lg:grid-cols-1 relative"/>
                <LazySectionProductTop v-if="productsSetsStatus !== 'pending'" :data="productsSets.data"
                                   class="col-span-2 lg:grid-cols-1 " title="Праздничные предложения"/>

            <SectionPromoPrice class="col-span-2 lg:grid-cols-1 "/>

                <LazyElementsSliderProduct v-if="productsNewStatus !== 'pending'" :data="productsNew.data"
                                           title="Новинки"
                                           class="col-span-2 lg:grid-cols-1  relative"/>

            <SectionAdvantages class="hidden lg:block"/>
            <SectionFollowSocial class="col-span-2 lg:grid-cols-1 "/>
            <SectionPromoCook class="col-span-2 lg:grid-cols-1 "/>
        </div>
    </main>
</template>