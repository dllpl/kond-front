<script setup>
import HttpClient from "~/server/utils/httpClient.js";

useHead({
    title: 'Всё для кондитера онлайн магазин для кондитеров с доставкой по г. Набережные Челны и России',
    titleTemplate: null,
    meta: [
        {
            name: 'description',
            content: 'Товары для кондитеров с доставкой по г. Набережные Челны и России в магазине Всё для кондитера. Онлайн заказ и быстрая доставка товаров для кондитеров по России и г. Набережные Челны.'
        }
    ],
})

const profileStore = useProfileStore();

const {data: banners} = await HttpClient('banners');
const {data: categories} = await HttpClient('products-categories');

const {
    status: productsNewStatus,
    data: productsNew
} = await HttpClient('products/new');
const {
    status: productsOffersStatus,
    data: productsOffers
} = await HttpClient('products/spec');
const {
    status: productsSetsStatus,
    data: productsSets
} = await HttpClient('products-sets');
const {
    status: productsPromoStatus,
    data: productsPromo
} = await HttpClient('products/promo');
</script>
<template>
    <main class="wrapper-container py-16 sm:pb-8 sm:pt-4">
        <div class="grid grid-cols-custom gap-y-20 gap-x-8 lg:grid-cols-1 lg:gap-y-20 lg:gap-x-0">

            <h1 class="sr-only">Всё для кондитера - интернет-магазин для кондитеров с доставкой в Набережных Челнах</h1>

            <div class="col-span-1 lg:hidden">
                <ElementsMenuDropDown :data="categories.data"/>
            </div>

            <div class="col-span-1">
                <div class="mb-20 lg:mb-0">
                    <ElementsSliderBanner :data="banners.data"/>
                </div>
                <SectionAdvantages class="lg:hidden"/>
            </div>
            <LazyElementsSliderProduct v-if="productsPromoStatus !== 'pending' && productsOffers.data.length > 0" :data="productsPromo.data"
                                       title="Успей купить" class="col-span-2 lg:grid-cols-1 relative"
            />

            <LazySectionProductTop v-if="productsSetsStatus !== 'pending'" :data="productsSets.data"
                                 class="col-span-2 lg:grid-cols-1 " title="Праздничные предложения"/>

            <LazyElementsSliderProduct v-if="productsOffersStatus !== 'pending'" :data="productsOffers.data"
                                       title="Спецпредложения" class="col-span-2 lg:grid-cols-1 relative"/>
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