<template>
    <footer class="bg-gray-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>

        <div class="wrapper-container ">

            <div class="grid grid-cols-3 gap-8 py-16">
                <div class="">
                    <img class="h-12 w-auto" src="https://dljakonditera.ru/a/tort/files/125837/124927/logos.png"
                        alt="Company name" />

                    <div>
                        <!-- <h3 class="text-sm font-semibold leading-6 text-white">Контакты</h3> -->
                        <ul role="list" class="mt-6 space-y-4">
                            <li v-for="item in navigation.company" :key="item.name">
                                <a :href="item.href"
                                    class="text-sm leading-6 text-gray-300 transition-all hover:text-white">{{
                                        item.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-8 col-span-2 xl:mt-0">
                    <div>
                        <h3 class=" font-semibold leading-6 text-white">Меню</h3>
                        <ul role="list" class="mt-6 space-y-4">
                            <li v-for="item in navigation.menu" :key="item.name">
                                <a :href="item.href"
                                    class="text-sm leading-6 text-gray-300 transition-all hover:text-white">{{
                                        item.name }}</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-semibold leading-6 text-white">Legal</h3>
                        <ul role="list" class="mt-6 space-y-4">
                            <li v-for="item in navigation.legal" :key="item.name">
                                <a :href="item.href"
                                    class="text-sm leading-6 text-gray-300 transition-all hover:text-white">{{
                                        item.name }}</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div class="border-t border-white/10 py-8 flex items-end gap-4 justify-between ">
                <div>
                    <h3 class="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
                    <p class="mt-2 text-sm leading-6 text-gray-300">The latest news, articles, and resources, sent to
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
                    <NuxtLink :to="item.href" v-for="item in navigation.social" :key="item.name"
                        class="flex items-center p-1.5 text-gray-500 transition-base hover:text-gray-400 ">
                        <span class="sr-only">{{ item.name }}</span>
                        <icon :name="item.icon" class="h-6 w-6" aria-hidden="true"></icon>
                    </NuxtLink>
                </div>
                <p class="text-xs leading-5 text-gray-400 order-1 mt-0">&copy; 2020 Your Company, Inc. All
                    rights reserved.</p>
            </div>
        </div>

    </footer>
</template>

<script setup>

const maskaOptions = useMaskaOptions()

const navigation = {
    menu: [
        { name: 'Каталог', href: '#' },
        { name: 'Съедобная печать', href: '#' },
        { name: 'Блог', href: '#' },
        { name: 'Контакты', href: '#' },
        { name: 'О магазине', href: '#' },
    ],
    company: [
        { name: '+7 (951) 000-00-00', href: '#' },
        { name: 'zakazkonditer.nch@gmail.com', href: '#' },
        { name: 'Набережные Челны, Мира, 31А', href: '#' },
        { name: 'Пн - Пт: с 9:00 до 20:00', href: '#' },
        { name: 'Сб - Вс: с 9:00 до 19:00', href: '#' },
    ],
    legal: [
        { name: 'Вход | Регистрация', href: '#' },
        { name: 'Поиск', href: '#' },
        { name: 'Избранное', href: '#' },
        { name: 'Корзина', href: '#' },
        { name: 'Доставка и оплата', href: '#' },
    ],
    social: [
        {
            name: 'Whatsapp',
            href: '#',
            icon: 'mdi:whatsapp',
        },
        {
            name: 'Instagram',
            href: '#',
            icon: 'mdi:instagram',
        },
        {
            name: 'ВКонтакте',
            href: '#',
            icon: 'basil:vk-outline',
        },

    ],
}
</script>