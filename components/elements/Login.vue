<template>

    <div class="flex min-h-full flex-1 flex-col justify-center">
        <div class="text-center text-lg font-semibold mb-1" v-if="title.length">{{ title }}</div>
        <div class="text-center text-sm text-gray-500 mb-4" v-if="subtitle.length">{{ subtitle }}</div>

        <form class="space-y-6" @submit.prevent="authStore.makeLogin(redirect)">
            <div class="relative">
                <label for="phone" class="block text-sm font-medium">
                    Телефон
                </label>
                <div class="mt-2">

                    <input v-model="login.form.phone" v-maska="maskaOptions.phone.mask" name="tel" type="tel"
                           v-autofocus
                           autocomplete="tel" required :class="login.errors?.phone ? 'ring-2 ring-red-400' : ''"
                           class="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-amber-400 hover:ring-2 focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all"
                           placeholder="+7 (___) ___-__-__"/>
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
                           class="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-amber-400 hover:ring-2 focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all placeholder:text-sm"/>
                    <span v-if="login.errors?.password" class="absolute text-[11px]">
                        {{ login.errors.password[0] }}
                    </span>
                </div>
            </div>

            <div>
                <button type="submit" :disabled="login.disabled"
                        class="flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all">
                    <svg v-if="login.disabled" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    Войти
                </button>
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
                    <div class="w-full border-t border-gray-200"/>
                </div>
                <div class="relative flex justify-center text-sm font-medium">
                    <span class="bg-white px-6">Или войти через</span>
                </div>
            </div>
            <ElementsQuickLogin/>
        </div>
    </div>
</template>

<script setup>
const maskaOptions = useMaskaOptions();

const authStore = useAuthStore();
const {login} = useAuthStore();
const popupStore = usePopupStore();

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    subtitle: {
        type: String,
        default: '',
    },
    redirect: {
        type: String,
        default: '/lk',
    }
})

const route = useRoute()

onMounted(() => {
    if (route.query?.password_reset && route.query.password_reset === '1') {
        setTimeout(() => {
            popupStore.toggle('toast', {
                title: 'Пароль успешно изменен, войдите с новым паролем',
                timeout: 2000,
                type: 'success'
            })
        }, 500)
    }
})


</script>