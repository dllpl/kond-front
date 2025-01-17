<template>
    <div class="mt-6 flow-root">
        <h2 class="text-base font-semibold leading-7 ">Профиль</h2>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">Use a permanent address where you can
            receive
            mail.</p>
        <form>
            <div class="border-gray-900/10 space-y-0 divide-y divide-gray-900/10 border-b 
                        
                        ">
                <ul class="grid grid-cols-3 gap-12 py-8 lg:gap-6 md:grid-cols-2 xs:grid-cols-1 xs:py-6 xs:gap-4">
                    <li class="">
                        <label for="surname" class="block text-sm font-medium leading-6 mb-2 pl-2.5">
                            Фамилия
                        </label>

                        <input v-maska=maskaOptions.cyrillic_and_upper_case name="surname" autocomplete="surname"
                            required=""
                            class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all" />
                    </li>

                    <li class="">
                        <label for="first-name" class="block text-sm font-medium leading-6 mb-2 pl-2.5">
                            Имя
                        </label>

                        <input v-maska=maskaOptions.cyrillic_and_upper_case name="name" autocomplete="name" required=""
                            class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all" />
                    </li>

                    <li class="">
                        <label for="patronymic" class="block text-sm font-medium leading-6 mb-2 pl-2.5">
                            Отчество
                        </label>

                        <input v-maska=maskaOptions.cyrillic_and_upper_case name="patronymic" autocomplete="patronymic"
                            required=""
                            class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all" />
                    </li>
                </ul>

                <ul class="grid grid-cols-3 gap-12 py-8 lg:gap-6 md:grid-cols-2 xs:grid-cols-1 xs:py-6 xs:gap-4">
                    <li class="">
                        <label for="phone" class="block text-sm font-medium leading-6 mb-2 pl-2.5">Телефон</label>

                        <input v-maska=maskaOptions.phone.mask name="phone" autocomplete="phone" required=""
                            class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"
                            placeholder="+7 (___) ___-__-__" />

                    </li>

                    <li class="">
                        <label for="email" class="block text-sm font-medium leading-6 mb-2 pl-2.5">Email</label>

                        <input id="email" name="email" type="email" autocomplete="email"
                            class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"
                            placeholder="Email" />

                    </li>

                    <li class="lg:col-span-2 xs:col-auto">
                        <label for="city" class="block text-sm font-medium leading-6 mb-2 pl-2.5">Адрес</label>

                        <input type="text" name="city" id="city" autocomplete="address-level2"
                            class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all" />

                    </li>
                </ul>

            </div>
            <div class="mt-6 flex items-center gap-x-6">
                <button type="submit"
                    class="inline-flex justify-center rounded-md bg-amber-300 px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all">Сохранить</button>
            </div>
        </form>
    </div>


</template>

<script setup>
const maskaOptions = useMaskaOptions();
</script>