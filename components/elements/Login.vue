<template>

    <div class="flex min-h-full flex-1 flex-col justify-center">

        <!-- <h1 class="text-center text-3xl font-semibold mb-8 md:mb-4">Вход</h1>

        <div class="mx-auto w-full max-w-lg"> -->

        <!-- <div class=""> -->

        <p class="text-center text-lg font-semibold mb-1 ">{{ title }}</p>
        <p class="text-center text-sm text-gray-500 mb-4">{{ subtitle }}</p>

        <form class="space-y-6" @submit.prevent="authStore.makeLogin()">
            <div class="relative">
                <label for="phone" class="block text-sm font-medium">
                    Телефон
                </label>
                <div class="mt-2">

                    <input v-model="login.form.phone" v-maska=maskaOptions.phone.mask name="tel" type="tel"
                        autocomplete="tel" required :class="login.errors?.phone ? 'ring-2 ring-red-400' : ''"
                        class="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all sm:text-sm"
                        placeholder="+7 (___) ___-__-__" />
                    <span v-if="login.errors?.phone" class="absolute text-[11px]">
                        {{ login.errors.phone[0] }}
                    </span>
                </div>
            </div>

            <div class="relative">
                <label for="password" class="block text-sm font-medium">
                    Пароль
                </label>
                <div class="mt-2">
                    <input v-model="login.form.password" name="password" type="password" autocomplete="current-password"
                        placeholder="Минимум 6 символов" required
                        :class="login.errors?.password ? 'ring-2 ring-red-400' : ''"
                        class="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all sm:text-sm placeholder:text-sm" />
                    <span v-if="login.errors?.password" class="absolute text-[11px]">
                        {{ login.errors.password[0] }}
                    </span>
                </div>
            </div>

            <div>
                <button type="submit" :disabled="login.disabled"
                    class="flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all">
                    Войти</button>
            </div>
        </form>

        <div class="flex items-center justify-between my-6 xs:flex-wrap xs:gap-2">
            <div class="text-center text-sm leading-6">
                <NuxtLink to="recovery" class="font-semibold transition-all hover:text-red-600"
                    @click="popupStore.close('modal')">
                    Забыли пароль?
                </NuxtLink>
            </div>

            <div class="text-center text-sm leading-6">
                <NuxtLink :to="`/registration`" class="font-semibold transition-all hover:text-red-600"
                    @click="popupStore.close('modal')">
                    Регистрация
                </NuxtLink>
            </div>
        </div>
        <div>
            <div class="relative">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-200" />
                </div>
                <div class="relative flex justify-center text-sm font-medium">
                    <span class="bg-white px-6">Или войти через</span>
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
        <!-- </div> -->
    </div>
    <!-- </div> -->
</template>

<script setup>
const maskaOptions = useMaskaOptions();

const authStore = useAuthStore();
const { login } = useAuthStore();
const popupStore = usePopupStore();


const props = defineProps({
    title: String,
    subtitle: String,
})

</script>