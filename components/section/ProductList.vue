<template>
    <div class="bg-white p-5 rounded-lg">

        <h2 class="sr-only">Products</h2>

        <div class=" grid grid-cols-6 border-l border-gray-200 mx-0">
            <!-- <div v-for="product in products" :key="product.id"
                class="group border-b border-r border-gray-200 p-6 sm:p-4">
                <div class="relative">
                    <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                        <img :src="product.imageSrc" :alt="product.imageAlt"
                            class="h-full w-full object-cover object-center" />
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
                <div class=""> -->
            <!-- Кнопка "Купить" -->
            <!-- <button v-if="!inCart" @click="addToCart"
                        class="flex items-center gap-x-2 w-full justify-center rounded-lg bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base ">
                        <Icon name="material-symbols:shopping-cart-outline" class="w-5 h-5 ">
                        </Icon>
                        В корзину
                    </button> -->

            <!-- <ElementsProductCounter :inCart="product?.inCart" />
                </div>
            </div> -->

            <SectionProductCard class="border-b border-r border-gray-200" v-for="product in products" :key="product.id"
                :product="product" />
        </div>

    </div>
</template>

<script setup>

// // Состояние, чтобы узнать, добавлен ли товар в корзину
// const inCart = ref(false);

// // Добавить товар в корзину
// const addToCart = () => {
//     inCart.value = true;
//     quantity.value = 1;
// };

const products = [
    {
        id: 1,
        name: 'Organize Basic Set (Walnut)',
        price: '149 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
        inCart: true
    },
    {
        id: 2,
        name: 'Organize Pen Holder',
        price: '1150 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 3,
        name: 'Organize Sticky Note Holder',
        price: '15 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 4,
        name: 'Organize Phone Holder',
        price: '785 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 5,
        name: 'Organize Basic Set (Walnut)',
        price: '963 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 6,
        name: 'Organize Pen Holder',
        price: '2100 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 7,
        name: 'Organize Sticky Note Holder',
        price: '433 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 8,
        name: 'Organize Phone Holder',
        price: '15 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 9,
        name: 'Organize Basic Set (Walnut)',
        price: '1200 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 10,
        name: 'Organize Pen Holder',
        price: '1150 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 11,
        name: 'Organize Sticky Note Holder',
        price: '15 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 12,
        name: 'Organize Phone Holder',
        price: '785 руб.',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    // More products...
]
// console.log(products)
</script>