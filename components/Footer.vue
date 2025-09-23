<template>
    <footer class="bg-gray-900" aria-labelledby="footer-heading">
        <div class="wrapper-container ">
            <div class="grid grid-cols-2 gap-12 py-16 sm:grid-cols-1 sm:gap-8 sm:py-8">
                <div>
                    <NuxtLink to="/" class="inline-block">
                        <img loading="lazy" width="250" height="66" class="h-12 w-auto" src="/assets/img/logo.webp"
                            alt="Все для кондитера" />
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
                                    class="text-sm md:text-xs leading-6 text-gray-300 transition-all hover:text-white">
                                    {{ contacts.email }}
                                </NuxtLink>
                            </li>
                            <li>
                                <span class="text-sm leading-6 text-gray-300">
                                    <NuxtLink
                                        class="text-sm md:text-xs leading-6 text-gray-300 transition-all hover:text-white"
                                        to="https://yandex.ru/maps/-/CHby5LzE" target="_blank" external>
                                        {{ contacts.address }}
                                    </NuxtLink>
                                </span>
                            </li>
                            <li>
                                <span class="text-sm leading-6 text-gray-300">
                                    Пн-Пт: {{ contacts.wt_weekday }}<br>
                                    Сб-Вс: {{ contacts.wt_weekend }}
                                    <!-- <span>Праздники: {{ contacts.wt_holiday }}</span> -->
                                </span>
                            </li>
                            <li>
                                <iframe src="https://yandex.ru/sprav/widget/rating-badge/1925028904?type=rating&theme=dark" width="150" height="50" frameborder="0"></iframe>
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

            <ElementsCallback theme="dark" />

            <div
                class="border-t border-white/10 py-8 flex items-center justify-between xs:flex-col-reverse xs:items-center xs:gap-4 lg:mb-5">
                <div>
                    <ul class="text-xs leading-5 text-gray-400 mt-0 mb-2 sm:text-center">
                        <li>ИП&nbsp;&mdash; ЕВГЕНЬЕВА ДИАНА ЕВГЕНЬЕВНА</li>
                        <li>ИНН&nbsp;&mdash; 165033847201</li>
                        <li>ОГРН&nbsp;&mdash; 308165020600060</li>
                    </ul>
                    <p class="text-xs leading-5 text-gray-400 mt-0 sm:text-center">&copy; {{ new Date().getFullYear() }} Всё для кондитера</p>
                </div>
                <div class="">
                    <div class="flex items-center space-x-6 justify-end lg:justify-center">
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
                    <p class="text-xs leading-5 text-white mt-0 sm:text-center"><NuxtLink to="https://webseed.ru/services" target="_blank" external title="Разработка и продвижение сайта">https://webseed.ru/services</NuxtLink></p>
                </div>

            </div>
        </div>

    </footer>
</template>

<script setup>
const { contacts } = useContactsStore();
const popupStore = usePopupStore();

const navigation = {
    menu: [
        { name: 'Каталог', href: '/catalog' },
        { name: 'Съедобная печать', href: '/food-seal' },
        { name: 'Блог', href: '/blog' },
        { name: 'Контакты', href: '/contacts' },
        { name: 'Вход | Регистрация', href: '/lk' },
    ],

    other: [
        { name: 'О магазине', href: '/about' },
        { name: 'Доставка и оплата', href: '/delivery' },
        { name: 'Избранное', href: '/lk#favorites' },
        // { name: 'Корзина' },
        // { name: 'Поиск' },
        { name: 'Отзывы', href: '/reviews' },
        { name: 'Карта сайта', href: '/sitemap' },
    ],
}
</script>