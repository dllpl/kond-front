<template>
    <div class="group p-6 sm:p-4">
        <div class="relative">
            <!--исходник было - пусть будет-->
            <!-- <div
                class="max-h-[200px] aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <img v-if="product.images && product.images.length" :src="storage + product.images[0]"
                    :alt="product.title" class="h-full w-full object-cover object-center" />
                <img v-else src="/assets/img/default-product-img.webp" :alt="product.title"
                    class="h-full w-full object-cover object-center">
            </div> -->

            <div
                class="flex items-center justify-center h-48 aspect-h-1 aspect-w-1 overflow-hidden rounded-lg ring-1 bg-white    ring-gray-200 transition-base group-hover:opacity-75">

                <img v-if="product.images && product.images.length" :src="storage + product.images[0]"
                    :alt="product.title" class="object-contain object-center h-full" />
                <img v-else src="/assets/img/default-product-img.webp" :alt="product.title"
                    class="object-cover object-center h-full">
            </div>

            <div class="pb-4 pt-10 text-center">
                <h3 class="text-sm ">
                    <NuxtLink :to="product.slug">
                        <span aria-hidden="true" class="absolute inset-0" />
                        {{ product.title }}
                    </NuxtLink>
                </h3>
                <p class="mt-4 text-base font-semibold ">{{ product.price }}</p>
            </div>

            <button
                class="absolute top-2.5 right-2.5 flex items-center justify-center transition-all p-1 bg-white/70 rounded-md ring-1 ring-gray-300/20 hover:bg-red-600 hover:text-white">
                <Icon name="material-symbols:favorite-outline-rounded" class="w-6 h-6 ">
                </Icon>
            </button>
        </div>

        <div class="">
            <ElementsProductCounter :inCart="product?.inCart" />
        </div>
    </div>
</template>

<script setup>
const { storage } = useRuntimeConfig().public.backOptions;
const props = defineProps({
    product: Object
});
</script>