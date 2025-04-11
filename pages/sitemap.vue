<script setup lang="ts">
import HttpClient from "~/server/utils/httpClient";
import RecursiveList from "~/components/section/RecursiveList.vue";

const breadcrumbs = [
    {
        name: 'Доставка и оплата',
        href: '/delivery',
    },
]
useHead({
    title: 'Карта сайта',
    meta: [
        {
            name: 'description',
            content: 'Карта сайта интернет-магазина Всё для кондитера'
        }
    ],
})

const {data: links} = await HttpClient('sitemap/generate?for=page_sitemap');

const blog = links.value.blog
const catalog = links.value.catalog

// Преобразуем catalog в универсальный формат
const normalizeItems = (items) => {
    return items.map(item => ({
        title: item.title,
        link: `/catalog/${item.slug_path}`,
        children: item.children?.length ? normalizeItems(item.children) : []
    }))
}

// Пример для blog
const blogItems = blog.map(item => ({
    title: item.title,
    link: item.href,
    children: []
}))

// Массив секций
const sections = [
    {
        title: 'Блог',
        items: blogItems
    },
    {
        title: 'Каталог',
        items: normalizeItems(catalog)
    }
]


</script>

<template>
    <div class="">
        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>
        <main class="wrapper-container pt-3 pb-16">
            <div class="mb-10 space-y-12">
                <h1 class="text-4xl font-semibold 2xl:text-3xl xs:text-2xl">
                    Карта сайта интернет-магазина Всё для кондитера
                </h1>
            </div>

            <div class="grid grid-cols-1 gap-8">
                <div v-for="(section, index) in sections" :key="index">
                    <h2 class="text-2xl font-semibold mb-2">{{ section.title }}</h2>
                    <RecursiveList :items="section.items" />
                </div>
            </div>


        </main>
    </div>
</template>