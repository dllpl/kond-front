<template>
    <div class="">
        <section class="flex items-center wrapper-container">
            <ElementsMobileCatalogPopover />
        </section>
        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>
        <main class="wrapper-container pt-3 pb-16">
            <div class="mb-10">
                <h1 class="text-4xl font-semibold mb-4 2xl:text-3xl xs:text-2xl">Блог</h1>
                <p>
                    Наши статьи — это не только полезные рекомендации, но и увлекательные истории о мире кондитерства,
                    секреты
                    мастеров и интервью с ведущими специалистами. Мы уверены, что с нами любой кондитер, будь то
                    начинающий
                    или
                    опытный, сможет развивать свои навыки и создавать невероятные десерты. Следите за нашими новыми
                    публикациями, чтобы всегда быть в курсе последних трендов и не пропустить интересные акции и
                    предложения
                    нашего магазина.
                </p>
            </div>

            <div class="grid auto-rows-fr gap-8 max-w-none grid-cols-4 xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1">
                <article v-for="post in blog.data" :key="post.id" class="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-60 hover:scale-105 hover:shadow-lg hover:shadow-gray-700 transition-base
                    xl:pt-40 md:pt-25">
                    <img :src="storage + post.image" :alt="post.title"
                        class="absolute inset-0 -z-10 h-full w-full object-cover" />
                    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                    <div class="absolute inset-0 -z-10 rounded-2xl" />

                    <div v-if="post.is_recipe" class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm ">
                        <span
                            class="relative rounded-full bg-red-500 px-3 py-1.5 font-medium text-white cursor-pointer">
                            Рецепт
                        </span>
                    </div>

                    <h3 class="mt-3 text-xl font-semibold leading-6 text-white">
                        <NuxtLink :to="`/blog/${post.slug}`">
                            <span class="absolute inset-0" />
                            {{ post.title }}
                        </NuxtLink>
                    </h3>
                </article>
            </div>

        </main>
    </div>
</template>

<script setup>
const { public: config } = useRuntimeConfig();
const { storage } = useRuntimeConfig().public.backOptions;
const { data: blog } = await useFetch(config.backOptions.api + '/blog');

const breadcrumbs = [
    {
        name: 'Блог',
        href: '/blog',
    },
]
</script>
