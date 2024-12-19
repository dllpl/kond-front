<template>
    <TransitionRoot as="template" :show="drawer">
        <Dialog class="relative z-20" @close="popupStore.close('drawer')">
            <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <TransitionChild as="template"
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full" enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leave-from="translate-x-0" leave-to="translate-x-full">
                            <DialogPanel class="pointer-events-auto w-screen max-w-2xl">

                                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div class="flex items-center justify-between px-4 py-4 sm:px-6">
                                        <DialogTitle class="text-lg font-medium">Корзина
                                        </DialogTitle>
                                        <div class="ml-3 flex h-7 items-center">

                                            <button type="button" @click="popupStore.close('drawer')"
                                                class="flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20 transition-base text-gray-400 hover:text-indigo-950 hover:ring-indigo-950 group">
                                                <span class="sr-only">Закрыть корзину</span>
                                                <Icon name="material-symbols:close-rounded" class="h-6 w-6"
                                                    aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>

                                    <div class="flex-1 overflow-y-auto custom-scroll px-4 sm:px-6">
                                        <div class="mt-8">
                                            <div class="flow-root">
                                                <p v-if="!products.length" class="text-center text-sm text-gray-500">В
                                                    корзине пока пусто</p>

                                                <!-- pinia cartStore -->
                                                <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                    <li v-for="product in products" :key="product.id" class="flex py-4">
                                                        <div
                                                            class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                            <!-- <img :src="product.imageSrc" :alt="product.imageAlt"
                                                                class="h-full w-full object-cover object-center" /> -->
                                                            <img v-if="product.images && product.images.length"
                                                                :src="storage + product.images[0]" :alt="product.title"
                                                                class="h-full w-full object-cover object-center" />
                                                            <img v-else src="/assets/img/default-product-img.webp"
                                                                :alt="product.title"
                                                                class="h-full w-full object-cover object-center">
                                                        </div>

                                                        <div class="ml-4 flex flex-1 flex-col ">
                                                            <h3 class="text-base font-medium">
                                                                <NuxtLink :to="product.slug_path">
                                                                    {{ product.title }}
                                                                </NuxtLink>
                                                            </h3>

                                                            <div class="flex gap-5 justify-between">
                                                                <div class="">
                                                                    <p class="text-base font-medium">
                                                                        <span class="text-gray-500 text-sm">Цена:
                                                                        </span>
                                                                        {{ formatNumber(product.price) }}
                                                                    </p>

                                                                    <p class="text-base font-medium">
                                                                        <span
                                                                            class="text-gray-500 text-sm">Кол-во:</span>
                                                                        {{ product.inCart }}
                                                                    </p>

                                                                    <p v-if="product.inCart > 1"
                                                                        class="text-base font-medium">
                                                                        <span class="text-gray-500 text-sm">Сумма:
                                                                        </span>{{
                                                                            formatNumber(cartStore.totalPriceProduct(product))
                                                                        }}
                                                                    </p>
                                                                </div>
                                                                <button type="button"
                                                                    @click="cartStore.removeCart(product.id)"
                                                                    class="ml-4 flex items-end justify-center transition-base p-1 transition-base text-gray-400 hover:text-indigo-950 group">
                                                                    <Icon name="mdi-light:delete" class="h-6 w-6"
                                                                        aria-hidden="true" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="border-t border-gray-200 px-4 py-4 sm:px-6">
                                        <div class="flex justify-between text-base font-medium">
                                            <p>Общая сумма</p>
                                            <p v-if="cartStore.totalPriceAllProducts">{{ formatNumber(
                                                cartStore.totalPriceAllProducts
                                            ) }}</p>
                                        </div>
                                        <p class="mt-0.5 text-sm text-gray-500">Способ доставки выбирается при офомлении
                                            заказа</p>
                                        <div class="mt-6">
                                            <a href="#"
                                                class="flex items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium shadow-sm bg-amber-400 hover:bg-amber-300 transition-base">Офомить
                                                заказ</a>
                                        </div>

                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
const { storage } = useRuntimeConfig().public.backOptions;

const popupStore = usePopupStore();
const { drawer } = storeToRefs(popupStore);

const cartStore = useCartStore();
const { products } = storeToRefs(cartStore);
</script>