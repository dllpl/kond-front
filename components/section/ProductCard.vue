<template>
    <div class="group p-6 sm:p-4">
        <div class="relative">
            <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
            </div>
            <div class="pb-4 pt-10 text-center">
                <h3 class="text-sm ">
                    <a :href="product.href">
                        <span aria-hidden="true" class="absolute inset-0" />
                        {{ product.name }}
                    </a>
                </h3>
                <p class="mt-4 text-base font-semibold ">{{ product.price }}</p>
            </div>
            <button
                class="absolute top-2.5 right-2.5 flex items-center justify-center transition-all p-1 rounded-md ring-2 ring-gray-300/20 hover:bg-red-600 hover:text-white">
                <Icon name="material-symbols:favorite-outline-rounded" class="w-6 h-6 ">
                </Icon>
            </button>
        </div>
        <div class="">
            <!-- Кнопка "Купить" -->
            <!-- <button v-if="!inCart" @click="addToCart"
                        class="flex items-center gap-x-2 w-full justify-center rounded-lg bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base ">
                        <Icon name="material-symbols:shopping-cart-outline" class="w-5 h-5 ">
                        </Icon>
                        В корзину
                    </button> -->

            <ElementsProductCounter :inCart="product?.inCart" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    product: Object
});
// console.log()

</script>