<template>
    <div class="">
        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>
        <main class="wrapper-container pt-3 pb-16">
            <div class="mb-10 space-y-10">
                <h1 class="text-4xl font-semibold">
                    Оформление заказа
                </h1>
                <div class="rounded-lg bg-gray-200/20 p-6">

                    <div class="relative">
                        <label for="coupon" class="block font-medium">Введите код купона для скидки</label>
                        <div class=" flex gap-6 mt-2 max-w-xl relative">

                            <input name="coupon" type="text" required
                                class="relativeblock w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all sm:text-sm">

                            <button type="submit" class="
                            absolute right-0 top-0
                            flex items-center justify-center
                                rounded-md ring-1 ring-inset ring-amber-400 bg-amber-400 px-2.5 hover:bg-amber-300 focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all
                                h-full
                                ">
                                <Icon name="mdi-light:arrow-right" class="h-6 w-6 text-inherit" />
                            </button>
                        </div>
                    </div>
                </div>

                <!-- <div class="grid grid-cols-6 my-6 gap-12"> -->
                <section class="col-span-4 mb-12">
                    <ul class="divide-y divide-gray-200 border-b border-t border-gray-200">
                        <li v-for="product in products" :key="product.id" class="flex py-4 gap-4">
                            <div class="size-16 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img v-if="product.images && product.images.length" :src="storage + product.images[0]"
                                    :alt="product.title" class="size-full object-cover" />
                                <img v-else src="/assets/img/default-product-img.webp" :alt="product.title"
                                    class="size-full object-cover">
                            </div>


                            <div class="flex gap-6 justify-between w-full">
                                <!-- name, price -->
                                <div class="mr-auto">
                                    <h3>{{ product.title }}</h3>
                                    <p class="text-base font-medium">
                                        <span class="text-gray-500 text-sm">Цена:
                                        </span>
                                        {{ formatNumber(product.price) }}
                                    </p>
                                </div>

                                <!-- counter -->
                                <div class="">
                                    <ElementsProductCounter :item="product" context="small" />
                                </div>

                                <!-- total -->
                                <p class="text-base font-medium">
                                    <span class="text-gray-500 text-sm">Сумма:
                                    </span>{{
                                        formatNumber(cartStore.totalPriceProduct(product))
                                    }}
                                </p>

                                <!-- delete -->
                                <div class="">
                                    <button type="button" @click="cartStore.removeCart(product.id)" class="flex items-end justify-center transition-base p-1 transition-base text-gray-500 rounded-md ring-1 ring-gray-400/20                                            
                                            hover:ring-indigo-950 focus:rounded-md focus:ring-indigo-950
                                            hover:text-indigo-950 group">

                                        <Icon name="material-symbols-light:close-rounded" class="h-4 w-4"
                                            aria-hidden="true" />


                                        <!-- relative flex items-center justify-center transition-base p-1 rounded-md ring-2
                                    ring-gray-300/20 hover:text-red-600 hover:ring-red-500 group focus:rounded-md
                                    focus:ring-red-500 focus:text-red-600 -->
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>

                <section class="mb-12">
                    <ElementsSliderProduct :data="productsOffers.data" title="Спецпредложения" class="relative" />
                </section>

                <section class="rounded-lg bg-gray-200/20 p-8">
                    <h2 class="text-lg font-medium text-gray-900">Ваш заказ</h2>

                    <ul class="mt-6 space-y-4">
                        <li class="flex items-center justify-between">
                            <span class="text-sm text-gray-600">Товаров на сумму:</span>
                            <span class="text-sm font-medium text-gray-900">{{
                                formatNumber(cartStore.totalPriceAllProducts) }}</span>
                        </li>

                        <li class="flex items-center justify-between border-t border-gray-200 pt-4">
                            <span class="flex items-center text-sm text-gray-600">
                                <span>Сумма скидки:</span>
                            </span>
                            <span class="text-sm font-medium text-gray-900">{{
                                formatNumber(0) }}</span>
                        </li>
                        <li class="relative border-t border-gray-200 pt-4">

                            <label for="coupon" class="text-sm text-gray-600">Введите код купона для скидки:</label>
                            <div class="relative max-w-md mt-2">

                                <input name="coupon" type="text" required
                                    class="block text-sm w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all">

                                <button type="submit"
                                    class="absolute right-0 top-0 shadow-sm flex items-center justify-center rounded-md ring-1 ring-inset ring-amber-400 bg-amber-400 px-2.5 hover:bg-amber-300 focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all h-full">
                                    <Icon name="material-symbols:arrow-right-alt-rounded"
                                        class="h-5 w-5 text-grey-900" />
                                </button>
                            </div>

                        </li>

                        <li class="flex items-center justify-between border-t border-gray-200 pt-4">
                            <span class="text-base font-medium ">Итого:</span>
                            <span class="text-base font-medium ">{{
                                formatNumber(cartStore.totalPriceAllProducts) }}</span>
                        </li>
                    </ul>
                </section>







                <!-- <section class="col-span-2 ">
                        <div class="rounded-lg bg-gray-200/20 p-8">
                            <h2 class="text-lg font-medium text-gray-900">Ваш заказ</h2>

                            <ul class="mt-6 space-y-4">
                                <li class="flex items-center justify-between">
                                    <span class="text-sm text-gray-600">Товаров на сумму:</span>
                                    <span class="text-sm font-medium text-gray-900">{{
                                        formatNumber(cartStore.totalPriceAllProducts) }}</span>
                                </li>

                                <li class="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <span class="flex items-center text-sm text-gray-600">
                                        <span>Сумма скидки:</span>
                                    </span>
                                    <span class="text-sm font-medium text-gray-900">{{
                                        formatNumber(0) }}</span>
                                </li>

                                <li class="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <span class="text-base font-medium ">Итого:</span>
                                    <span class="text-base font-medium ">{{
                                        formatNumber(cartStore.totalPriceAllProducts) }}</span>
                                </li>
                            </ul>
                        </div>
                    </section> -->
            </div>
            <!-- </div> -->

        </main>
    </div>
</template>

<script setup>
const breadcrumbs = [
    {
        name: 'Оформление заказа',
        href: '/cart',
    },
]
const { public: config } = useRuntimeConfig();
const { data: productsOffers } = await useFetch(config.backOptions.api + '/products/spec');
const { storage } = useRuntimeConfig().public.backOptions;
const cartStore = useCartStore();
const { products } = storeToRefs(cartStore);

console.log(products.value)

</script>