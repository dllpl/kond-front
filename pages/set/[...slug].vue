<template>

    <div class="">
        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>

        <main class="wrapper-container  pb-16">
            <h1 class="mb-8 font-bold text-4xl 2xl:text-3xl xs:text-2xl">{{ data.data.title ?? 'Популярные категории' }}
            </h1>
            <SectionProductTop :data="data.data" class="mb-20" v-if="data.data?.length" />

            <SectionProductList :data="data.data.products" v-if="data.data?.products" />

        </main>
    </div>
</template>


<script setup>
const route = useRoute();
const { public: config } = useRuntimeConfig();

let uri = route.params?.slug ? route.params.slug.join('/') : '';
const { data } = await useFetch(config.backOptions.api + '/products-sets/' + uri);
console.log(data.value.data);

const breadcrumbs = [
    {
        name: 'Подборки',
        uri: 'set',
    },
    // ...data.value.breadcrumbs
]
</script>