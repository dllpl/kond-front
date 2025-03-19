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

            <form class="space-y-6" @submit.prevent="authStore.makeRegister()">

              <div class="relative">
                <label for="tel" class="block text-sm font-medium">
                  Телефон
                </label>
                <div class="mt-2">
                  <input v-model="register.form.phone" v-maska=maskaOptions.phone.mask name="tel" type="tel" v-autofocus
                    placeholder="+7 (___) ___-__-__" autocomplete="tel" required
                    :class="register.errors?.phone ? 'ring-2 ring-red-400' : ''"
                    class="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all sm:text-sm placeholder:text-sm" />
                  <span v-if="register.errors?.phone" class="absolute text-[11px]">
                    {{ register.errors.phone[0] }}
                  </span>
                </div>
              </div>

              <div class="relative">
                <label for="email" class="block text-sm font-medium ">
                  Email адрес
                </label>
                <div class="mt-2">
                  <input v-model="register.form.email" name="email" type="email" autocomplete="email" required
                    placeholder="Укажите электронную почту" :class="register.errors?.email ? 'ring-2 ring-red-400' : ''"
                    class="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all sm:text-sm placeholder:text-sm" />
                  <span v-if="register.errors?.email" class="absolute text-[11px]">
                    {{ register.errors.email[0] }}
                  </span>
                </div>
              </div>

              <div class="relative">
                <label for="password" class="block text-sm font-medium">
                  Пароль
                </label>
                <div class="mt-2">
                  <input v-model="register.form.password" name="password" type="password" autocomplete="new-password"
                    placeholder="Минимум 6 символов" required
                    :class="register.errors?.password ? 'ring-2 ring-red-400' : ''"
                    class="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all sm:text-sm placeholder:text-sm" />
                  <span v-if="register.errors?.password" class="absolute  text-[11px]">
                    {{ register.errors.password[0] }}
                  </span>
                </div>
              </div>
              <!-- <div class="">
                <span class="text-xs text-gray-500">Отправляя форму, вы соглашаетесь
                  c <NuxtLink @click="popupStore.close('modal')" :to="`/policy`">политикой конфиденциальности
                  </NuxtLink>
                </span>
              </div> -->
              <div class="">
                <button type="submit" :disabled="register.disabled"
                  class="flex w-full items-center justify-center rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all ">
                  <svg v-if="register.disabled" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                  </svg>
                  Зарегистрироваться
                </button>
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
              <ElementsQuickLogin />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// definePageMeta({
//   middleware: 'web',
// })

const maskaOptions = useMaskaOptions();

const authStore = useAuthStore();
const { register } = useAuthStore();

const breadcrumbs = [
  {
    name: 'Регистрация', slug: '/registration'
  },
]

useHead({
  title: 'Регистрация',
  meta: [
    {
      name: 'description',
      content: 'Регистрация на сайте Всё для кондитера.'
    }
  ],
})
</script>