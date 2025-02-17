<template>
    <div class="mt-6 flow-root">
        <h2 class="text-base font-semibold leading-7 ">Профиль</h2>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">Обновите свои данные</p>
        <form @submit.prevent="profileStore.updateProfile()">
            <div class="border-gray-900/10 space-y-0 divide-y divide-gray-900/10 border-b">
                <ul class="grid grid-cols-3 gap-12 py-8 lg:gap-6 md:grid-cols-2 xs:grid-cols-1 xs:py-6 xs:gap-4">

                    <li class="relative">
                        <label for="last_name" class="block text-sm font-medium leading-6 ">
                            Фамилия
                        </label>
                        <div class="mt-2">
                            <input v-model='profile.last_name' type="text" name="last_name" autocomplete="last_name"
                                   required
                                   minlength='5' v-maska="maskaOptions.cyrillic_and_upper_case"
                                   class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"/>
                            <span v-if="errors?.last_name" class="absolute text-[11px]">
                                {{ errors.last_name[0] }}
                            </span>
                        </div>
                    </li>

                    <li class="relative">
                        <label for="first_name" class="block text-sm font-medium leading-6">
                            Имя
                        </label>
                        <div class="mt-2">
                            <input v-maska="maskaOptions.cyrillic_and_upper_case" name="first_name"
                                   autocomplete="first_name" required
                                   v-model="profile.first_name"
                                   class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"/>
                            <span v-if="errors?.first_name" class="absolute text-[11px]">
                                {{ errors.first_name[0] }}
                            </span>
                        </div>
                    </li>

                    <li class="relative">
                        <label for="patronymic" class="block text-sm font-medium leading-6">
                            Отчество
                        </label>
                        <div class="mt-2">
                            <input v-maska="maskaOptions.cyrillic_and_upper_case" name="patronymic"
                                   autocomplete="patronymic"
                                   v-model="profile.patronymic"
                                   class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"/>
                            <span v-if="errors?.patronymic" class="absolute text-[11px]">
                                {{ errors.patronymic[0] }}
                            </span>
                        </div>
                    </li>
                </ul>

                <ul class="grid grid-cols-3 gap-12 py-8 lg:gap-6 md:grid-cols-2 xs:grid-cols-1 xs:py-6 xs:gap-4">
                    <li class="relative">
                        <label for="phone" class="block text-sm font-medium leading-6 mb-2 ">Телефон</label>
                        <div class="mt-2">
                            <input disabled v-maska="maskaOptions.phone.mask" name="phone" autocomplete="phone" required
                                   v-model="profile.phone"
                                   class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"
                                   placeholder="+7 (___) ___-__-__"/>
                            <span v-if="errors?.phone" class="absolute text-[11px]">
                                {{ errors.phone[0] }}
                            </span>
                        </div>

                    </li>

                    <li class="">
                        <label for="email" class="block text-sm font-medium leading-6 mb-2 ">Email</label>

                        <input id="email" name="email" type="email" autocomplete="email" v-model="profile.email" disabled
                               class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"
                               placeholder="Email"/>
                        <span v-if="errors?.email" class="absolute text-[11px]">
                            {{ errors.email[0] }}
                        </span>
                    </li>

                    <li class="lg:col-span-2 xs:col-auto">
                        <label for="full_address" class="block text-sm font-medium leading-6 mb-2 ">Адрес доставки</label>

                        <input type="text" name="full_address" id="full_address" autocomplete="address-level2"
                               v-model="profile.full_address"
                               class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"/>

                        <span v-if="errors?.full_address" class="absolute text-[11px]">
                            {{ errors.full_address[0] }}
                        </span>
                    </li>
                </ul>

            </div>
            <div class="mt-6 flex items-center gap-x-6">
                <button type="submit" :disabled="disabled"
                        class="inline-flex justify-center rounded-md bg-amber-300 px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all">
                    <svg v-if="disabled" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    Обновить
                </button>
            </div>
        </form>
    </div>


</template>

<script setup>
const maskaOptions = useMaskaOptions();
const profileStore = useProfileStore();

const {profile, errors, disabled} = storeToRefs(profileStore);

</script>