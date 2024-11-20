<template>

    <section>
        <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
    </section>

    <main class="wrapper-container pt-3 pb-16">
        <h1 class="mb-8 font-bold text-4xl 2xl:text-3xl ">Каталог</h1>
        <SectionCatalogList class="mb-20" />
        <SectionProductList />
    </main>
</template>

<script setup>
const breadcrumbs = [
    {
        name: 'Каталог',
        href: '/catalog',
    },
]
</script>
