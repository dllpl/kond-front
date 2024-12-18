<template>
    <div class="">
        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>
        <main class="wrapper-container pt-3 pb-16">
            <h1 class="text-4xl font-semibold">Контакты</h1>
            <div class="grid grid-cols-2 gap-x-8 gap-y-6 mt-6 ">
                <div class="">
                    <p class="text-lg leading-8 ">
                        Если у вас возникли вопросы о наших товарах, услугах или заказах, не стесняйтесь обращаться к
                        нам. Мы стараемся сделать ваше сотрудничество с нами максимально удобным и приятным!
                    </p>


                    <h2 class="mt-6 mb-4 font-semibold text-lg">Наши контактные данные</h2>
                    <dl class="space-y-2 ">
                        <div class="flex gap-x-4">
                            <dt class="flex-none">
                                <span class="sr-only">Телефон</span>
                                <Icon name="mdi-light:phone" class="w-6 h-6 " aria-hidden="true" />
                            </dt>
                            <dd>
                                <NuxtLink :to="`tel:${contacts.phone}`" target="_blank"
                                    class="hover:text-red-600  focus:text-red-600 transition-all">
                                    {{ contacts.phone }}
                                </NuxtLink>
                            </dd>
                        </div>
                        <div class="flex gap-x-4">
                            <dt class="flex-none">
                                <span class="sr-only">Почта</span>
                                <Icon name="mdi-light:email" class="w-6 h-6" aria-hidden="true" />
                            </dt>
                            <dd>
                                <NuxtLink :to="`mailto:${contacts.email}`" target="_blank"
                                    class="hover:text-red-600  focus:text-red-600 transition-all">
                                    {{ contacts.email }}
                                </NuxtLink>


                            </dd>
                        </div>
                        <div class="flex gap-x-4">
                            <dt class="flex-none">
                                <span class="sr-only">Адрес</span>
                                <Icon name="material-symbols-light:home-work-outline-rounded" class="w-6 h-6"
                                    aria-hidden="true" />
                            </dt>
                            <dd>{{ contacts.address }}</dd>
                        </div>
                    </dl>

                    <h2 class="mt-6 mb-4 font-semibold text-lg">Наши часы работы</h2>
                    <dl class="space-y-2 ">
                        <div class="flex gap-x-4">
                            <dt class="flex-none">
                                <span class="sr-only">График работы</span>
                                <Icon name="mdi-light:clock" class="w-6 h-6" aria-hidden="true" />
                            </dt>
                            <dd>
                                Пн-Пт: {{ contacts.wt_weekday }}<br>
                                Сб-Вс: {{ contacts.wt_weekend }}<br>
                                <!-- <span>Праздники: {{ contacts.wt_holiday }}</span> -->
                            </dd>
                        </div>
                    </dl>

                    <h2 class="mt-6 mb-4 font-semibold text-lg">Наши социальные сети</h2>
                    <div class="flex space-x-2 ">

                        <NuxtLink v-if="contacts.whatsapp_link" :to="contacts.whatsapp_link" target="_blank"
                            class="flex items-center p-1.5  transition-base hover:text-red-600  focus:text-red-600 ">
                            <span class="sr-only">Whatsapp</span>
                            <Icon name="mdi:whatsapp" class="w-6 h-6 " aria-hidden="true" />
                        </NuxtLink>

                        <NuxtLink v-if="contacts.instagram_link" :to="contacts.instagram_link" target="_blank"
                            class="flex items-center p-1.5  transition-base hover:text-red-600  focus:text-red-600 ">
                            <span class="sr-only">Instagram</span>
                            <Icon name="mdi:instagram" class="w-6 h-6 " aria-hidden="true" />
                        </NuxtLink>

                        <NuxtLink v-if="contacts.telegram_link" :to="contacts.telegram_link" target="_blank"
                            class="flex items-center p-1.5  transition-base hover:text-red-600  focus:text-red-600 ">
                            <span class="sr-only">Телеграм</span>
                            <Icon name="teenyicons:telegram-outline" class="w-6 h-6 " aria-hidden="true" />
                        </NuxtLink>

                        <NuxtLink v-if="contacts.vk_link" :to="contacts.vk_link" target="_blank"
                            class="flex items-center p-1.5  transition-base hover:text-red-600  focus:text-red-600 ">
                            <span class="sr-only">ВКонтакте</span>
                            <Icon name="basil:vk-outline" class="w-6 h-6 " aria-hidden="true" />
                        </NuxtLink>

                    </div>

                </div>
                <div class="">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A70d7f45c6e89b8456cb2e045a8b67cd3ec5e68163060116552edebbe97e584d2&amp;source=constructor"
                        width="100%" height="100%" frameborder="0"></iframe>
                </div>
            </div>
            <!-- <div class="relative isolate bg-white">
                <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div
                                class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                                <svg class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                    aria-hidden="true">
                                    <defs>
                                        <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200"
                                            x="100%" y="-1" patternUnits="userSpaceOnUse">
                                            <path d="M130 200V.5M.5 .5H200" fill="none" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" stroke-width="0" fill="white" />
                                    <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                                        <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                                    </svg>
                                    <rect width="100%" height="100%" stroke-width="0"
                                        fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                                </svg>
                            </div>
                            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                            <p class="mt-6 text-lg leading-8 text-gray-600">Proin volutpat consequat porttitor cras
                                nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                                Arcu sed malesuada et magna.</p>
                            <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
                                <div class="flex gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Address</span>
                                        <BuildingOffice2Icon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>545 Mavis Island<br />Chicago, IL 99191</dd>
                                </div>
                                <div class="flex gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Telephone</span>
                                        <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd><a class="hover:text-gray-900" href="tel:+1 (555) 234-5678">+1 (555)
                                            234-5678</a></dd>
                                </div>
                                <div class="flex gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Email</span>
                                        <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd><a class="hover:text-gray-900"
                                            href="mailto:hello@example.com">hello@example.com</a></dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <form action="#" method="POST" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label for="first-name"
                                        class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                                    <div class="mt-2.5">
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <label for="last-name"
                                        class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                                    <div class="mt-2.5">
                                        <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="email"
                                        class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                    <div class="mt-2.5">
                                        <input type="email" name="email" id="email" autocomplete="email"
                                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="phone-number"
                                        class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                                    <div class="mt-2.5">
                                        <input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
                                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="message"
                                        class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                    <div class="mt-2.5">
                                        <textarea name="message" id="message" rows="4"
                                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                            </div>
                            <div class="mt-8 flex justify-end">
                                <button type="submit"
                                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send
                                    message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div> -->
        </main>
    </div>

</template>

<script setup>

const breadcrumbs = [
    {
        name: 'Контакты', slug: '/сontacts'
    },
]
const { contacts } = useContactsStore();

// const social = [
//     {
//         name: 'Instagram',
//         href: '#',
//         icon: 'mdi:instagram',
//     },
//     {
//         name: 'Whatsapp',
//         href: '#',
//         icon: 'mdi:whatsapp',
//     },
//     {
//         name: 'ВКонтакте',
//         href: '#',
//         icon: 'basil:vk-outline',
//     },
// ]
</script>