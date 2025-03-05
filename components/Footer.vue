<template>
    <footer class="bg-gray-900" aria-labelledby="footer-heading">
        <div class="wrapper-container ">
            <div class="grid grid-cols-2 gap-12 py-16 sm:grid-cols-1 sm:gap-8 sm:py-8">
                <div>
                    <NuxtLink to="/">
                        <img loading="lazy" width="250" height="66" class="h-12 w-auto" src="/assets/img/logo.webp" alt="Все для кондитера" />
                    </NuxtLink>
                    <div>
                        <ul role="list" class="mt-6 space-y-4">
                            <li>
                                <NuxtLink :to="`tel:${contacts.phone}`" target="_blank"
                                    class="text-sm leading-6 text-gray-300 transition-all hover:text-white">
                                    {{ contacts.phone }}
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink :to="`mailto:${contacts.email}`" target="_blank"
                                    class="text-sm leading-6 text-gray-300 transition-all hover:text-white">
                                    {{ contacts.email }}
                                </NuxtLink>
                            </li>
                            <li>
                                <span class="text-sm leading-6 text-gray-300"> {{ contacts.address }} </span>
                            </li>
                            <li>
                                <span class="text-sm leading-6 text-gray-300">
                                    Пн-Пт: {{ contacts.wt_weekday }}<br>
                                    Сб-Вс: {{ contacts.wt_weekend }}
                                    <!-- <span>Праздники: {{ contacts.wt_holiday }}</span> -->
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-8 sm:gap-4">
                    <div>
                        <h3 class=" font-semibold leading-6 text-white">Навигация</h3>
                        <ul role="list" class="mt-6 space-y-4">
                            <li v-for="item in navigation.menu" :key="item.name">
                                <NuxtLink :to="item.href"
                                    class="text-sm leading-6 text-gray-300 transition-all hover:text-white">
                                    {{ item.name }}
                                </NuxtLink>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <ul role="list" class="mt-12 space-y-4">
                            <li v-for="item in navigation.other" :key="item.name">

                                <button v-if="item.name === 'Корзина'" @click="popupStore.toggle('drawer')"
                                    class="text-sm leading-6 text-gray-300 transition-all hover:text-white">
                                    {{ item.name }}
                                </button>

                                <button v-if="item.name === 'Поиск'" @click="popupStore.toggle('search')"
                                    class="text-sm leading-6 text-gray-300 transition-all hover:text-white">
                                    {{ item.name }}
                                </button>

                                <NuxtLink :to="item.href" v-if="item.name !== 'Корзина' && item.name !== 'Поиск'"
                                    class="text-sm leading-6 text-gray-300 transition-all hover:text-white">
                                    {{ item.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                class="border-t border-white/10 py-8 flex items-end gap-4 justify-between lg:flex-col lg:items-start lg:justify-start ">
                <div>
                    <h3 class="text-sm font-semibold leading-6 text-white">Остались вопросы?</h3>
                    <p class="mt-2 text-sm leading-6 text-gray-300">
                        Заполните форму, и мы ответим вам в кратчайшие сроки
                    </p>
                </div>

                <form class="flex space-x-4 mt-0 shrink-0 sm:flex-col sm:space-x-0 sm:space-y-2 sm:w-full">
                    <div>
                        <label for="name" class="sr-only">Имя</label>
                        <input v-maska="maskaOptions.cyrillic_and_upper_case" name="name" id="name"
                            required class="min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-white shadow-sm ring-2 ring-inset transition-base  ring-white/10 placeholder:text-gray-500 hover:ring-red-500  focus:ring-red-500 w-56 text-sm leading-6 lg:w-full lg:text-base"
                            placeholder="Имя" />
                    </div>
                    <div>
                        <label for="phone" class="sr-only">Телефон</label>
                        <input v-maska="maskaOptions.phone.mask" name="phone" id="phone" required
                            class="min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-white shadow-sm ring-2 ring-inset transition-base  ring-white/10 placeholder:text-gray-500 hover:ring-red-500  focus:ring-red-500 w-56 text-sm leading-6 lg:w-full lg:text-base"
                            placeholder="Номер телефона" />
                    </div>
                    <div class="flex-shrink-0 ">
                        <button type="submit" class="flex w-full items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-base  hover:bg-red-500 
                            focus-visible:bg-red-500">Отправить</button>
                    </div>
                </form>
            </div>

            <div
                class="border-t border-white/10 py-8 flex items-center justify-between xs:flex-col-reverse xs:items-center xs:gap-4">
                <div>
                    <ul class="text-xs leading-5 text-gray-400 mt-0 mb-2">
                        <li>ИП&nbsp;&mdash; ЕВГЕНЬЕВА ДИАНА ЕВГЕНЬЕВНА</li>
                        <li>ИНН&nbsp;&mdash; 165033847201</li>
                        <li>ОГРН&nbsp;&mdash; 308165020600060</li>
                    </ul>
                    <p class="text-xs leading-5 text-gray-400 mt-0">&copy; {{ new Date().getFullYear() }} Всё для
                        кондитера
                    </p>
                </div>
                <div class="flex items-center space-x-6  ">
                    <NuxtLink v-if="contacts.whatsapp_link" :to="contacts.whatsapp_link" target="_blank"
                        class="flex items-center p-1.5 text-gray-500 transition-base hover:text-gray-400">
                        <span class="sr-only">Whatsapp</span>
                        <Icon name="fa-brands:whatsapp" class="w-6 h-6 " aria-hidden="true" />
                    </NuxtLink>

                    <NuxtLink v-if="contacts.instagram_link" :to="contacts.instagram_link" target="_blank"
                        class="flex items-center p-1.5 text-gray-500 transition-base hover:text-gray-400">
                        <span class="sr-only">Instagram</span>
                        <Icon name="fa-brands:instagram" class="w-6 h-6 " aria-hidden="true" />
                    </NuxtLink>

                    <NuxtLink v-if="contacts.telegram_link" :to="contacts.telegram_link" target="_blank"
                        class="flex items-center p-1.5 text-gray-500 transition-base hover:text-gray-400">
                        <span class="sr-only">Телеграм</span>
                        <Icon name="fa-brands:telegram-plane" class="w-6 h-6 " aria-hidden="true" />
                    </NuxtLink>

                    <NuxtLink v-if="contacts.vk_link" :to="contacts.vk_link" target="_blank"
                        class="flex items-center p-1.5 text-gray-500 transition-base hover:text-gray-400">
                        <span class="sr-only">ВКонтакте</span>
                        <Icon name="fa-brands:vk" class="w-6 h-6 " aria-hidden="true" />
                    </NuxtLink>
                </div>

            </div>
        </div>

    </footer>
</template>

<script setup>
const { contacts } = useContactsStore();
const maskaOptions = useMaskaOptions();
const popupStore = usePopupStore();

const navigation = {
    menu: [
        { name: 'Каталог', href: '/catalog' },
        { name: 'Съедобная печать', href: '#' },
        { name: 'Блог', href: '/blog' },
        { name: 'Контакты', href: '/contacts' },
        { name: 'Вход | Регистрация', href: '#' },
    ],

    other: [
        { name: 'О магазине', href: '/about' },
        { name: 'Доставка и оплата', href: '/delivery' },
        { name: 'Избранное', href: '#' },
        { name: 'Корзина' },
        { name: 'Поиск' },
    ],
}
</script>