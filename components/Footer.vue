<template>
    <footer class="bg-gray-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>

        <div class="wrapper-container ">

            <div class="grid grid-cols-3 gap-8 py-16">
                <div class="">
                    <img class="h-12 w-auto" src="https://dljakonditera.ru/a/tort/files/125837/124927/logos.png"
                        alt="Все для кондитера" />

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
                            <li></li>
                        </ul>
                    </div>
                </div>

                <div class=" grid grid-cols-2 gap-8 col-span-2 xl:mt-0">
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
                                <NuxtLink :to="item.href"
                                    class="text-sm leading-6 text-gray-300 transition-all hover:text-white">
                                    {{ item.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div class="border-t border-white/10 py-8 flex items-end gap-4 justify-between ">
                <div>
                    <h3 class="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
                    <p class="mt-2 text-sm leading-6 text-gray-300">The latest news, articles, and resources, sent
                        to
                        your inbox weekly.</p>
                </div>

                <form class=" flex max-w-md mt-0 lg:mt-6 shrink-0">
                    <label for="phone" class="sr-only">Телефон</label>
                    <input v-maska=maskaOptions.phone.mask name="phone" id="phone" autocomplete="phone" required=""
                        class="min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-white shadow-sm ring-2 ring-inset transition-base  ring-white/10 placeholder:text-gray-500 hover:ring-red-500  focus:ring-red-500 w-56 text-sm leading-6 lg:w-full lg:text-base"
                        placeholder="Номер телефона" />
                    <div class=" ml-4 mt-0 flex-shrink-0 ">
                        <button type="submit" class="flex w-full items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-base  hover:bg-red-500 
                            focus-visible:bg-red-500">Отправить</button>
                    </div>
                </form>
            </div>

            <div class="border-t border-white/10 py-8 flex items-center justify-between">
                <div class="flex items-center space-x-6 order-2">
                    <NuxtLink v-if="contacts.whatsapp_link" :to="contacts.whatsapp_link" target="_blank"
                        class="flex items-center p-1.5 text-gray-500 transition-base hover:text-gray-400">
                        <span class="sr-only">Whatsapp</span>
                        <Icon name="mdi:whatsapp" class="w-6 h-6 " aria-hidden="true" />
                    </NuxtLink>

                    <NuxtLink v-if="contacts.instagram_link" :to="contacts.instagram_link" target="_blank"
                        class="flex items-center p-1.5 text-gray-500 transition-base hover:text-gray-400">
                        <span class="sr-only">Instagram</span>
                        <Icon name="mdi:instagram" class="w-6 h-6 " aria-hidden="true" />
                    </NuxtLink>

                    <NuxtLink v-if="contacts.telegram_link" :to="contacts.telegram_link" target="_blank"
                        class="flex items-center p-1.5 text-gray-500 transition-base hover:text-gray-400">
                        <span class="sr-only">Телеграм</span>
                        <Icon name="teenyicons:telegram-outline" class="w-6 h-6 " aria-hidden="true" />
                    </NuxtLink>

                    <NuxtLink v-if="contacts.vk_link" :to="contacts.vk_link" target="_blank"
                        class="flex items-center p-1.5 text-gray-500 transition-base hover:text-gray-400">
                        <span class="sr-only">ВКонтакте</span>
                        <Icon name="basil:vk-outline" class="w-6 h-6 " aria-hidden="true" />
                    </NuxtLink>
                </div>
                <p class="text-xs leading-5 text-gray-400 order-1 mt-0">&copy; 2020 Your Company, Inc. All
                    rights reserved.</p>
            </div>
        </div>

    </footer>
</template>

<script setup>
const { contacts } = useContactsStore();
const maskaOptions = useMaskaOptions()


const navigation = {
    menu: [
        { name: 'Каталог', href: 'catalog' },
        { name: 'Съедобная печать', href: '#' },
        { name: 'Блог', href: 'blog' },
        { name: 'Контакты', href: 'contacts' },
        { name: 'Вход | Регистрация', href: '#' },
    ],

    other: [
        { name: 'О магазине', href: 'about' },
        { name: 'Доставка и оплата', href: 'delivery' },
        { name: 'Корзина' },
        { name: 'Поиск' },
        { name: 'Избранное', href: '#' },
    ],
}
</script>