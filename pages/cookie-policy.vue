<script setup lang="ts">
useHead({
    title: 'Условия использования файлов cookie магазина Всё для кондитера',
    meta: [
        {
            name: "description",
            content: 'Мы используем cookies. Они делают сайт удобнее, запоминают данные для входа и ваши настройки. Узнайте подробнее',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: '/cookie-policy'
        }
    ]
})

definePageMeta({
    title: 'Условия использования файлов cookie'
})

const breadcrumbs = [
    {
        name: 'Условия файлов cookie', slug: '/cookie-policy'
    },
]

</script>

<template>
    <main class="mb-5">
        <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        <div class="wrapper-container">
            <section class="section">
                <h1 class="text-5xl">Условия использования файлов cookie</h1>
                <p>
                    Мы используем файлы cookie и храним данные пользователей в соответствии с <NuxtLink to="/policy" target="_blank" class="text-gray-500">Политикой</NuxtLink> обработки персональных данных. Посещая сайт, вы соглашаетесь с обработкой cookies.
                </p>

                <h2 class="text-2xl text-accent my-4">Что такое cookies</h2>
                <p>
                    Это файлы, которые браузер хранит на вашем устройстве. Они содержат логин и пароль, историю посещений и другую информацию о вас. Также cookies обеспечивают стабильную работу сайтов и запоминают ваш выбор — например, город, в котором вы находитесь, или языковые настройки.
                </p>

                <h2 class="text-2xl text-accent my-4">
                    Как управлять cookies
                </h2>
                <p>
                    Вы можете настроить использование файлов cookie. Для этого перейдите в настройки браузера и выберите подходящий вариант: разрешить или блокировать cookies.
                </p>
            </section>
        </div>
    </main>
</template>

<style scoped>

</style>