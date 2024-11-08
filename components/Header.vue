<template>

    <header class="">
        <div class="bg-gray-100">
            <div class="wrapper-container relative px-12 xl:px-6 xs:px-4">
                <div class="flex items-center justify-between py-4 lg:gap-6 md:flex-row md:gap-x-4"
                    aria-label="Верхнее меню">

                    <div class="flex items-center gap-5 lg:w-full lg:justify-between xs:w-auto">
                        <div class="flex items-center gap-x-2.5 sm:hidden">
                            <Combobox as="div" v-model="selectedCity" @update:modelValue="query = ''"
                                class="flex items-center gap-2">
                                <ComboboxLabel class="block text-sm text-gray-900 flex items-center gap-1">
                                    <Icon name="mdi-light:map-marker" class="w-6 h-6" />
                                    <span>Ваш город</span>
                                </ComboboxLabel>
                                <div class="relative 2xl:w-52">
                                    <ComboboxInput
                                        class="input-accent w-full transition-base bg-gray-50 hover: ring-red-500 hover:ring-2 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 "
                                        @change="query = $event.target.value" @blur="query = ''"
                                        :display-value="(city) => city?.name" />
                                    <ComboboxButton
                                        class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                        <Icon name="tabler:chevron-down"></Icon>
                                    </ComboboxButton>

                                    <ComboboxOptions v-if="filteredCityes.length > 0"
                                        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        <ComboboxOption v-for="city in filteredCityes" :key="city.id" :value="city"
                                            as="template" v-slot="{ active, selected }">
                                            <li
                                                :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-red-500 text-white' : 'text-gray-900']">
                                                <span :class="['block truncate', selected && 'font-semibold']">
                                                    {{ city.name }}
                                                </span>

                                                <span v-if="selected"
                                                    :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-red-500']">
                                                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            </li>
                                        </ComboboxOption>
                                    </ComboboxOptions>
                                </div>
                            </Combobox>
                        </div>
                        <a href="#" class="flex items-center gap-2 transition-base rounded-md hover:text-red-600 group focus:bg-red-500 focus:rounded-md focus:text-white
                        xs:p-1 xs:ring-2 xs:ring-gray-300/20 xs:hover:ring-red-500 xs:focus:ring-red-500 xs:focus:text-red-600 xs:focus:bg-transparent
                        ">
                            <Icon name="mdi-light:phone" class="w-6 h-6 group-hover:stroke-red-600 " />
                            <span class="block text-base xs:hidden"> +7 951 000-00-00</span>
                        </a>
                    </div>

                    <div class="hidden xs:flex xs:gap-4 ">
                        <!-- Search -->
                        <button type="button" @click="open = true"
                            class="flex items-center justify-center transition-base p-1 rounded-md ring-2  ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
                            <Icon name="mdi-light:magnify" class="w-6 h-6 group-hover:stroke-red-600"></Icon>

                            <TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
                                <Dialog class="relative z-10" @close="open = false">
                                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                                        enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100"
                                        leave-to="opacity-0">
                                        <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                                    </TransitionChild>

                                    <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                                        <TransitionChild as="template" enter="ease-out duration-300"
                                            enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                                            leave="ease-in duration-200" leave-from="opacity-100 scale-100"
                                            leave-to="opacity-0 scale-95">
                                            <DialogPanel
                                                class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                                                <Combobox @update:modelValue="onSelect">
                                                    <div class="relative">
                                                        <Icon name="mdi-light:magnify"
                                                            class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                                                            aria-hidden="true" />

                                                        <ComboboxInput
                                                            class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                                            placeholder="Введите название..."
                                                            @change="query = $event.target.value" @blur="query = ''" />
                                                    </div>

                                                    <ComboboxOptions v-if="filteredPeople.length > 0" static
                                                        class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
                                                        <ComboboxOption v-for="person in filteredPeople"
                                                            :key="person.id" :value="person" as="template"
                                                            v-slot="{ active }">
                                                            <li
                                                                :class="['cursor-default select-none px-4 py-2', active && 'bg-indigo-600 text-white']">
                                                                {{ person.name }}
                                                            </li>
                                                        </ComboboxOption>
                                                    </ComboboxOptions>

                                                    <p v-if="query !== '' && filteredPeople.length === 0"
                                                        class="p-4 text-sm text-gray-500">No people found.</p>
                                                </Combobox>
                                            </DialogPanel>
                                        </TransitionChild>
                                    </div>
                                </Dialog>
                            </TransitionRoot>
                        </button>
                        <!-- Like -->
                        <a href="http://"
                            class="flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">

                            <Icon name="mdi-light:heart" class="w-6 h-6 group-hover:stroke-red-600">
                            </Icon>
                        </a>
                        <!-- Basket -->
                        <a href="http://"
                            class="flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">

                            <Icon name="mdi-light:cart" class="w-6 h-6 group-hover:stroke-red-600">
                            </Icon>
                        </a>
                    </div>

                    <div class="flex items-center gap-x-12 2xl:gap-x-4 md:w-auto xs:order-first xs:mr-auto">
                        <div class="flex items-center gap-x-12 2xl:gap-x-4 lg:hidden">
                            <a v-for="item in navigationTop" :key="item.name" :href="item.href"
                                class="text-sm transition-base hover:text-red-600 focus:text-red-600">{{
                                    item.name
                                }}</a>
                            <a href="#" class="text-sm transition-base hover:text-red-600 focus:text-red-600">Вход
                                | Регистрация
                            </a>
                        </div>
                        <!-- Burger -->
                        <div class="hidden lg:flex">
                            <button type="button"
                                class="flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600"
                                @click="mobileMenuOpen = true">
                                <span class="sr-only">Открыть меню</span>

                                <Icon name="material-symbols:menu" class="w-6 h-6" aria-hidden="true" />

                            </button>
                        </div>
                        <Dialog class="" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                            <div class="fixed inset-0 z-10" />
                            <DialogPanel
                                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-4 lg:max-w-sm lg:ring-1 lg:ring-gray-900/10 sm:max-w-full">
                                <div class="flex items-center justify-between">
                                    <a href="#" class="-m-1.5 p-1.5">
                                        <span class="sr-only">Все для кондитера</span>
                                        <img class="h-8 w-auto"
                                            src="https://dljakonditera.ru/a/tort/files/125837/124927/logos.png"
                                            alt="Все для кондитера" />
                                    </a>
                                    <button type="button"
                                        class="flex items-center justify-center transition-base p-1 rounded-md ring-2  ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600"
                                        @click="mobileMenuOpen = false">
                                        <span class="sr-only">Закрыть меню</span>
                                        <Icon name="material-symbols:close-rounded"
                                            class="w-6 h-6 group-hover:stroke-red-600" aria-hidden="true"></Icon>
                                    </button>
                                </div>
                                <div class="mt-6 flow-root">
                                    <div class=" divide-y divide-gray-500/10">
                                        <div class="">
                                            <a href="#"
                                                class="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold leading-7 text-gray-900 hover:text-red-600 focus:text-red-600">
                                                Вход | Регистрация
                                            </a>
                                        </div>
                                        <div class="hidden py-4 xs:block">
                                            <a v-for="item in navigationMain" :key="item.name" :href="item.href"
                                                class="-mx-3 block rounded-lg px-3 py-2 text-sm  hover:text-red-600 focus:text-red-600">{{
                                                    item.name }}
                                            </a>
                                        </div>
                                        <div class=" py-4">
                                            <a v-for="item in navigationTop" :key="item.name" :href="item.href"
                                                class="-mx-3 block rounded-lg px-3 py-2 text-sm  hover:text-red-600 focus:text-red-600">{{
                                                    item.name }}</a>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper-container px-12 xl:px-6 xs:px-4">
            <nav class="flex items-center justify-between py-4 gap-x-12 xl:px-0  lg:flex-wrap lg:gap-y-4 xs:justify-center"
                aria-label="Основное меню">
                <a href="/" class="-m-1.5 p-1.5 ">
                    <span class="sr-only">Все для кондитера</span>
                    <img class="h-12 w-auto" src="https://dljakonditera.ru/a/tort/files/125837/124927/logos.png"
                        alt="Все для кондитера" />
                </a>

                <div class="flex items-center gap-x-12 2xl:gap-x-10 lg:w-full lg:order-1 xs:hidden">
                    <div class="flex gap-x-32 2xl:gap-x-12 lg:justify-between lg:w-full">
                        <a v-for="item in navigationMain" :key="item.name" :href="item.href"
                            class="text-base font-semibold text-gray-900 transition-base hover:text-red-600 focus:text-red-600">{{
                                item.name }}
                        </a>
                    </div>
                </div>

                <div class=" flex gap-5 xs:hidden">
                    <!-- Search -->
                    <button type="button" @click="open = true"
                        class="flex items-center justify-center transition-base p-1 rounded-md ring-2  ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">
                        <Icon name="material-symbols:search" class="w-6 h-6 group-hover:stroke-red-600"></Icon>

                        <TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
                            <Dialog class="relative z-10" @close="open = false">
                                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                                    enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100"
                                    leave-to="opacity-0">
                                    <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                                </TransitionChild>

                                <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                                    <TransitionChild as="template" enter="ease-out duration-300"
                                        enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                                        leave="ease-in duration-200" leave-from="opacity-100 scale-100"
                                        leave-to="opacity-0 scale-95">
                                        <DialogPanel
                                            class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                                            <Combobox @update:modelValue="onSelect">
                                                <div class="relative">
                                                    <Icon name="mdi-light:magnify"
                                                        class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                                                        aria-hidden="true" />

                                                    <ComboboxInput
                                                        class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                                        placeholder="Введите название..."
                                                        @change="query = $event.target.value" @blur="query = ''" />
                                                </div>

                                                <ComboboxOptions v-if="filteredPeople.length > 0" static
                                                    class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
                                                    <ComboboxOption v-for="person in filteredPeople" :key="person.id"
                                                        :value="person" as="template" v-slot="{ active }">
                                                        <li
                                                            :class="['cursor-default select-none px-4 py-2', active && 'bg-indigo-600 text-white']">
                                                            {{ person.name }}
                                                        </li>
                                                    </ComboboxOption>
                                                </ComboboxOptions>

                                                <p v-if="query !== '' && filteredPeople.length === 0"
                                                    class="p-4 text-sm text-gray-500">No people found.</p>
                                            </Combobox>
                                        </DialogPanel>
                                    </TransitionChild>
                                </div>
                            </Dialog>
                        </TransitionRoot>
                    </button>
                    <!-- Like -->
                    <a href="http://"
                        class="flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">

                        <Icon name="material-symbols:favorite-outline-rounded"
                            class="w-6 h-6 group-hover:stroke-red-600">
                        </Icon>
                    </a>
                    <!-- Basket -->
                    <a href="http://"
                        class="flex items-center justify-center transition-base p-1 rounded-md ring-2 ring-gray-300/20  hover:text-red-600 hover:ring-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-600">

                        <Icon name="material-symbols:shopping-cart-outline" class="w-6 h-6 group-hover:stroke-red-600">
                        </Icon>
                    </a>
                </div>

            </nav>

        </div>

    </header>

</template>
<script setup>

const navigationTop = [
    { name: 'О магазине', href: '#' },
    { name: 'Доставка и оплата', href: '#' },
]

const navigationMain = [
    { name: 'Каталог', href: '/catalog' },
    { name: 'Съедобная печать', href: '#' },
    { name: 'Блог', href: '#' },
    { name: 'Контакты', href: '#' },
]

const mobileMenuOpen = ref(false)

const city = [
    { id: 1, name: 'Набережные Челны' },
    { id: 2, name: 'Москва' },
    { id: 3, name: 'Казань' },
    { id: 4, name: 'Екатеринбург' },
    { id: 5, name: 'Нижний Новгород' },
    { id: 6, name: 'Санкт-Петербург' },
    // More users...
]

const query = ref('')
const selectedCity = ref(null)
const filteredCityes = computed(() =>
    query.value === ''
        ? city
        : city.filter((city) => {
            return city.name.toLowerCase().includes(query.value.toLowerCase())
        }),
)

const people = [
    { id: 1, name: 'Leslie Alexander', url: '#' },
    // More people...
]

const open = ref(false)
// const query = ref('')
const filteredPeople = computed(() =>
    query.value === ''
        ? []
        : people.filter((person) => {
            return person.name.toLowerCase().includes(query.value.toLowerCase())
        }),
)

function onSelect(person) {
    if (person) {
        window.location = person.url
    }
}

</script>