<template>
    <div class="group p-6 flex flex-col h-full lg:p-4">
        <div class="relative flex flex-col h-full">
            <!--исходник было - пусть будет-->
            <!-- <div
                class="max-h-[200px] aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <img v-if="product.images && product.images.length" :src="storage + product.images[0]"
                    :alt="product.title" class="h-full w-full object-cover object-center" />
                <img v-else src="/assets/img/default-product-img.webp" :alt="product.title"
                    class="h-full w-full object-cover object-center">
            </div> -->

            <div
                class="flex items-center shrink-0 justify-center h-48 aspect-h-1 aspect-w-1 overflow-hidden rounded-lg ring-1 bg-white    ring-gray-200 transition-base group-hover:opacity-75">

                <img v-if="product.images && product.images.length" :src="storage + product.images[0]"
                    :alt="product.title" class="object-cover w-full object-center h-full xs:object-contain" />
                <img v-else src="/assets/img/default-product-img.webp" :alt="product.title"
                    class="object-cover object-center h-full xs:object-contain">
            </div>

            <div class="flex flex-col h-full pb-4 pt-10 text-center lg:pt-6">
                <h3 class="text-sm mb-4">
                    <NuxtLink :to="'/catalog/' + product.slug_path">
                        <span aria-hidden="true" class="absolute inset-0" />
                        {{ product.title }}
                    </NuxtLink>
                </h3>
                <span class="mt-auto text-base font-semibold ">
                    {{ product.price ? formatNumber(product.price) : '' }}
                </span>
            </div>

            <button
                class="absolute top-2.5 right-2.5 flex items-center justify-center transition-all p-1 bg-white/70 rounded-md ring-1 ring-gray-300/20 hover:bg-red-600 hover:text-white">
                <Icon name="hugeicons:heart-add" class="w-6 h-6 ">
                </Icon>
            </button>
        </div>

        <div class="">
            <ElementsProductCounter :item="product" />
        </div>
    </div>
</template>

<script setup>

const { storage } = useRuntimeConfig().public.backOptions;
const props = defineProps({
    product: Object
});
</script>