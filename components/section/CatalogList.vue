<template>

    <div class="relative box-content py-2 overflow-visible">
        <!-- relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible -->
        <div class="relative grid grid-cols-5 gap-8 space-x-0 xl:grid-cols-4 lg:grid-cols-3 lg:gap-6
                            ">
            <!-- 
                                absolute flex space-x-8 px-4 
                                 sm:px-6 
                                 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0 
                                 -->
            <a v-for="category in categories" :key="category.name" :href="category.href"
                class="relative flex flex-col w-auto h-60 overflow-hidden rounded-lg p-6 transition-all hover:opacity-75 lg:h-50">
                <!-- relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto -->
                <span aria-hidden="true" class="absolute inset-0">
                    <img :src="category.imageSrc" alt="" class="h-full w-full object-cover object-center" />
                </span>

                <span aria-hidden="true"
                    class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                <span class="relative mt-auto text-center text-xl font-bold text-white">{{
                    category.name }}</span>

            </a>
        </div>
    </div>
</template>
<script setup>
const categories = [
    {
        name: 'New Arrivals',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-01.jpg',
    },
    {
        name: 'Productivity',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-02.jpg',
    },
    {
        name: 'Workspace',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-04.jpg',
    },
    {
        name: 'Accessories',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-05.jpg',
    },
    {
        name: 'Sale',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-03.jpg'
    },
    {
        name: 'New Arrivals',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-01.jpg',
    },
    {
        name: 'Productivity',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-02.jpg',
    },
    {
        name: 'Workspace',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-04.jpg',
    },
    {
        name: 'Accessories',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-05.jpg',
    },
    { name: 'Sale', href: '#', imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-03.jpg' },
]
</script>