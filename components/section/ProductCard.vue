<template>
    <div class="group p-6 flex flex-col h-full lg:p-4">
        <div class="relative flex flex-col h-full">
            <div
                class="flex items-center shrink-0 justify-center h-48 aspect-h-1 aspect-w-1 overflow-hidden rounded-lg ring-1 bg-white ring-gray-200 transition-base group-hover:opacity-75">

                <img :loading="index > 1 ? 'lazy' : 'eager'" width="200" height="200"
                    v-if="product.images && product.images.length" :src="storage + product.images[0]"
                    :alt="product.title" class="object-cover w-full object-center h-full xs:object-contain" />
                <img :loading="index > 1 ? 'lazy' : 'eager'" width="200" height="200" v-else
                    src="/assets/img/default-product-img.webp" :alt="product.title"
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

            <button aria-label="В изранное" @click="favoriteStore.toggle(product)"
                :class="product.is_favorite ? 'bg-red-600 ring-red-500 text-white' : 'bg-white/70 text-indigo-950 ring-gray-300/20 '"
                class="group absolute top-2.5 right-2.5 flex items-center justify-center transition-all p-1 rounded-md ring-1 
            hover:bg-red-600 hover:ring-red-500 hover:text-white 
            focus:ring-red-500 focus:text-text-white">
                <Icon name="hugeicons:heart-add" class="w-6 h-6">
                </Icon>
            </button>
            <!-- <ElementsProductfavorits class="absolute top-2.5 right-2.5  transition-all p-1 ring-1" /> -->
        </div>

        <div class="">
            <ElementsProductCounter :item="product" />
        </div>
    </div>
</template>

<script setup>
defineProps({
    product: Object,
    index: Number
});
const { storage } = useRuntimeConfig().public.backOptions;
const favoriteStore = useFavoriteStore();
</script>
