<template>
    <main class="wrapper-container py-16">
        <div class="mb-10">
            <h1 class="text-4xl font-semibold mb-4">Блог</h1>
            <!-- <div class="relative h-96 flex flex-col justify-center gap-6 py-12 px-12 mb-14">
            <p class="text-lg max-w-4xl text-stone-800">
                Откройте для себя мир кондитерского искусства с нашим блогом! Здесь мы делимся полезными советами,
                рецептами и идеями, которые помогут создавать удивительные десерты с лучшими инструментами и
                ингредиентами
            </p>
            <picture class="absolute inset-0 -z-10">
                <source srcset="/assets/img/blog-1440.jpg" media="(max-width: 1440px)">
                <img class="absolute inset-0 object-cover object-right h-full w-full -z-10 rounded-2xl"
                    src="/assets/img/blog-1920.jpg" alt="">
            </picture>
        </div> -->

            <!-- <p>
            Добро пожаловать в блог нашего интернет-магазина! Здесь мы делимся полезными советами, новыми рецептами и
            вдохновением для всех, кто увлекается кондитерским искусством. Независимо от того, являетесь ли вы
            профессионалом или только начинаете свой путь в мире сладких творений, мы всегда готовы помочь вам создавать
            шедевры. Мы расскажем о новинках в мире кондитерских товаров, а также о том, как выбрать лучшие инструменты
            и ингредиенты для ваших кулинарных экспериментов.
        </p> -->

            <p>
                Наши статьи — это не только полезные рекомендации, но и увлекательные истории о мире кондитерства,
                секреты
                мастеров и интервью с ведущими специалистами. Мы уверены, что с нами любой кондитер, будь то начинающий
                или
                опытный, сможет развивать свои навыки и создавать невероятные десерты. Следите за нашими новыми
                публикациями, чтобы всегда быть в курсе последних трендов и не пропустить интересные акции и предложения
                нашего магазина.
            </p>
        </div>


        <div class="grid auto-rows-fr gap-8 max-w-none grid-cols-4">
            <article v-for="post in posts" :key="post.id"
                class="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-60  hover:scale-102 hover:shadow-lg hover:shadow-gray-700 transition-all">
                <img :src="post.img" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div class="absolute inset-0 -z-10 rounded-2xl" />

                <div v-if="post.is_recipe" class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm ">
                    <span
                        class="relative z-10 rounded-full bg-red-500 px-3 py-1.5 font-medium text-white cursor-pointer">
                        Рецепт
                    </span>
                </div>

                <h3 class="mt-3 text-xl font-semibold leading-6 text-white">
                    <NuxtLink :to="`/blog/${post.slug}`">
                        <span class="absolute inset-0" />
                        {{ post.title }}
                    </NuxtLink>
                    <!-- <a :href="post.href">
                        
                    </a> -->
                </h3>
            </article>
        </div>

    </main>

</template>


<script setup>
const posts = [
    {
        title: "Рецепт натурального шоколада",
        slug: "tex",
        text: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
        is_recipe: true,
        // recipe_items: [
        //     {
        //         title: '',
        //         price: 0,
        //         img: ''
        //     }
        // ]
    },
    {
        title: "Рецепт натурального шоколада",
        slug: "jhgjghj",
        text: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
        is_recipe: false,
    },
    {
        title: "Рецепт натурального шоколада",
        slug: "tu6u76uyt",
        text: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
        is_recipe: true,
    },
    {
        title: "Рецепт натурального шоколада",
        slug: "jghjghjg",
        text: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
        is_recipe: false,
    },
    {
        title: "Рецепт натурального шоколада",
        slug: "slug",
        text: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
        is_recipe: true,
    },
    {
        title: "Рецепт натурального шоколада",
        slug: "slug",
        text: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
        is_recipe: false,
    },
    {
        title: "Рецепт натурального шоколада",
        slug: "slug",
        text: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
        is_recipe: false,
    },
    {
        title: "Рецепт натурального шоколада",
        slug: "slug",
        text: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
        is_recipe: true,
    },

]

</script>
