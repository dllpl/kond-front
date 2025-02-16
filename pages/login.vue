<template>
    <div class="">
        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>
        <main class="wrapper-container relative">

            <div class="flex min-h-full flex-1 flex-col justify-center py-12 pb-20 md:py-8">
                <h1 class="text-center text-3xl font-semibold mb-6 md:mb-4">Вход</h1>
                <div class="bg-white w-full max-w-lg mx-auto shadow rounded-lg py-8 px-8 sm:px-4 sm:py-6">
                    <ElementsLogin />
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
// definePageMeta({
//     middleware: 'web',
// })

const maskaOptions = useMaskaOptions();

const authStore = useAuthStore();
const { login } = useAuthStore();

const breadcrumbs = [
    {
        name: 'Вход', slug: '/login'
    },
]
</script>