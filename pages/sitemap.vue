<script setup lang="ts">
import HttpClient from "~/server/utils/httpClient";

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
            content: 'Карта сайта интернет-магазина Всё для кондитера'
        }
    ],
})

const links = await HttpClient('sitemap/generate?for=page_sitemap');

console.log(links)

</script>

<template>
    <div class="">
        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>
        <main class="wrapper-container pt-3 pb-16">
        </main>
    </div>
</template>