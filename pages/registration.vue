<template>

    <div class="">
        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>
        <main class="wrapper-container relative">
            <div class="flex min-h-full flex-1 flex-col justify-center py-12 md:py-8">

                <h1 class="text-center text-3xl font-semibold mb-8 md:mb-4">Регистрация</h1>

                <div class="mx-auto w-full max-w-lg">

                    <div class="bg-white shadow rounded-lg py-8 px-8 sm:px-4 sm:py-6">

                        <form class="space-y-4" @submit.prevent="submit(form)">
                            <div>
                                <label for="tel" class="block text-sm font-medium">
                                    Телефон
                                </label>
                                <div class="mt-2">

                                    <input v-model="form.phone" v-maska=maskaOptions.phone.mask name="tel" type="tel"
                                        autocomplete="tel" required=""
                                        class="block w-full rounded-md border-0 px-2 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <label for="email" class="block text-sm font-medium ">
                                    Email адрес
                                </label>
                                <div class="mt-2">
                                    <input v-model="form.email" name="email" type="email" autocomplete="email"
                                        required=""
                                        class="block w-full rounded-md border-0 px-2 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <label for="password" class="block text-sm font-medium">
                                    Пароль
                                </label>
                                <div class="mt-2">
                                    <input v-model="form.password" name="password" type="password"
                                        autocomplete="new-password" required=""
                                        class="block w-full rounded-md border-0 px-2 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <button type="submit"
                                    class="flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all ">
                                    Зарегистрироваться</button>
                            </div>
                        </form>
                        <div>
                            <div class="relative mt-6">
                                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div class="w-full border-t border-gray-200" />
                                </div>
                                <div class="relative flex justify-center text-sm font-medium">
                                    <span class="bg-white px-6">Или через</span>
                                </div>
                            </div>

                            <div class="mt-6 grid grid-cols-2 gap-4 xs:grid-cols-1">
                                <a href="#"
                                    class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent transition-all">
                                    <Icon name="vscode-icons:file-type-yandex" class="w-6 h-6" />
                                    <span class="text-sm font-semibold ">Яндекс</span>
                                </a>

                                <a href="#"
                                    class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent transition-all">
                                    <Icon name="bxl:vk" class="w-6 h-6 text-[#07F]" />
                                    <span class="text-sm font-semibold ">ВКонтакте</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
const maskaOptions = useMaskaOptions();
const helper = useHelper();
const breadcrumbs = [
    {
        name: 'Регистрация', slug: '/registration'
    },
]
const form = ref({
    phone: '',
    email: '',
    password: '',
})

const submit = (form) => {
    form.phone = helper.phoneClear(form.phone);
}

</script>