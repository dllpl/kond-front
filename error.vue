<script setup>
const props = defineProps({
    error: Object
});

const title = props.error.statusCode === 404 ? 'Страница не найдена' : 'Ошибка';
const description = props.error.statusCode === 404 ? 'Мы не можем найти запрашиваемую страницу' : 'Произошла внутренняя ошибка';

const breadcrumbs = [
    {
        name: title,
    },
];

useHead({
    title: title,
    meta: [
        {
            name: 'description',
            content: description
        }
    ],
})

</script>
<template>
    <NuxtLayout name="default">
        <div>
            <section>
                <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs"/>
            </section>
            <main class="wrapper-container pt-3 pb-16">

                <div class="relative min-h-96 py-12 px-12 flex flex-col justify-center gap-5 mb-20 items-center text-center
                    md:py-10 md:px-8 md:min-h-80
                    sm:min-h-72
                    xs:min-h-80 xs:py-4 xs:px-4 xs:mb-10">
                    <Icon name="noto:crying-cat" class="h-20 w-20 "/>

                    <template v-if="error && error?.statusCode">
                        <template v-if="error.statusCode === 404">
                            <h1 class="text-4xl font-semibold 2xl:text-3xl xs:text-2xl ">Страница не найдена</h1>
                            <p class="text-lg  max-w-4xl">К сожалению, такой страницы не существует</p>
                        </template>
                        <template v-else>
                            <h1 class="text-4xl font-semibold 2xl:text-3xl xs:text-2xl ">{{ error.statusCode }}</h1>
                            <p class="text-lg  max-w-4xl">
                                {{ error.message || 'Что-то пошло не так' }}
                            </p>
                        </template>
                    </template>
                    <template v-else>
                        <h1 class="text-4xl font-semibold 2xl:text-3xl xs:text-2xl ">Что-то пошло не так</h1>
                        <p class="text-lg  max-w-4xl">Попробуйте зайти позже</p>
                    </template>
                    <div class="flex gap-6 mt-8 xs:flex-col-reverse xs:mt-0 xs:gap-2">
                        <NuxtLink to="/" external
                                  class="group flex items-center gap-x-1 w-auto  justify-center rounded-lg bg-amber-400 px-5 py-2 hover:bg-amber-300 transition-base lg:inline-flex lg:px-10">
                            <Icon name="hugeicons:home-05" class="h-5 w-5 flex-shrink-0" aria-hidden="true"/>
                            На главную
                        </NuxtLink>

                        <!-- <NuxtLink :to="'/lk'"
                            class="group flex items-center gap-x-1 w-auto  justify-center rounded-lg bg-amber-400 px-5 py-2 hover:bg-amber-300 transition-base lg:inline-flex lg:px-10 ">
                            <Icon name="hugeicons:shopping-basket-done-01" class="h-5 w-5 flex-shrink-0"
                                aria-hidden="true" />
                            Личный кабинет
                        </NuxtLink> -->
                    </div>
                </div>
            </main>
        </div>
    </NuxtLayout>
</template>
