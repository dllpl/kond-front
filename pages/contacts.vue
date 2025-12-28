<template>
    <div class="">

        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
        </section>
        <main class="wrapper-container pt-3 pb-16">
            <h1 class="text-3xl font-bold tracking-tight mb-4 xs:text-2xl">Контакты</h1>
            <div class="grid grid-cols-2 gap-8 ">
                <!-- <div class=""> -->
                <p class="text-lg leading-8 lg:col-span-2 md:text-base">
                    Если у вас возникли вопросы о наших товарах, услугах или заказах, не стесняйтесь обращаться к
                    нам. Мы стараемся сделать ваше сотрудничество с нами максимально удобным и приятным!
                </p>

                <div class="grid grid-cols-1 gap-6 row-start-2 lg:col-span-2 lg:row-auto lg:grid-cols-2 sm:grid-cols-1">
                    <div class="">
                        <h2 class=" mb-4 font-semibold text-lg">Наши контактные данные</h2>
                        <dl class="space-y-2 ">
                            <div class="flex gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Телефон</span>
                                    <Icon name="hugeicons:calling" class="w-6 h-6 text-gray-700" aria-hidden="true" />
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
                                    <Icon name="hugeicons:ai-mail-02" class="w-6 h-6 text-gray-700"
                                        aria-hidden="true" />
                                </dt>
                                <dd>
                                    <NuxtLink :to="`mailto:${contacts.email}`" target="_blank"
                                        class="hover:text-red-600 focus:text-red-600 transition-all">
                                        {{ contacts.email }}
                                    </NuxtLink>
                                </dd>
                            </div>
                            <div class="flex gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Адрес</span>
                                    <Icon name="hugeicons:building-03" class="w-6 h-6 text-gray-700"
                                        aria-hidden="true" />
                                </dt>
                                <dd>
                                    <NuxtLink to="https://yandex.ru/maps/-/CHby5LzE" target="_blank" external
                                              class="hover:text-red-600 focus:text-red-600 transition-all">
                                        {{ contacts.address }}
                                    </NuxtLink>

                                    </dd>
                            </div>
                        </dl>
                    </div>

                    <div class="">
                        <h2 class=" mb-4 font-semibold text-lg">Наши реквизиты</h2>
                        <dl class="space-y-2 ">
                            <div class="flex gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Реквизиты Все для кондитера</span>
                                    <Icon name="hugeicons:file-02" class="w-6 h-6 text-gray-700" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <ul>
                                        <li>ИП&nbsp;&mdash; ЕВГЕНЬЕВА ДИАНА ЕВГЕНЬЕВНА</li>
                                        <li>ИНН&nbsp;&mdash; 165033847201</li>
                                        <li>ОГРН&nbsp;&mdash; 308165020600060</li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div class="">
                        <h2 class=" mb-4 font-semibold text-lg">Наши часы работы</h2>
                        <dl class="space-y-2 ">
                            <div class="flex gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">График работы</span>
                                    <Icon name="hugeicons:clock-03" class="w-6 h-6 text-gray-700" aria-hidden="true" />
                                </dt>
                                <dd>
                                    Пн-Пт: {{ contacts.wt_weekday }}<br>
                                    Сб-Вс: {{ contacts.wt_weekend }}<br>
                                    <!-- <span>Праздники: {{ contacts.wt_holiday }}</span> -->
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div class="lg:col-start-2 sm:col-auto">
                        <h2 class="mb-4 font-semibold text-lg">Наши социальные сети</h2>

                        <div class="flex space-x-2 ">

                            <NuxtLink v-if="contacts.whatsapp_link" :to="contacts.whatsapp_link" target="_blank"
                                class="flex items-center p-1.5  transition-base hover:text-red-600  focus:text-red-600 ">
                                <span class="sr-only">Whatsapp*</span>
                                <Icon name="fa-brands:whatsapp" class="w-6 h-6 " aria-hidden="true" />*
                            </NuxtLink>

                            <NuxtLink v-if="contacts.instagram_link" :to="contacts.instagram_link" target="_blank"
                                class="flex items-center p-1.5  transition-base hover:text-red-600  focus:text-red-600 ">
                                <span class="sr-only">Instagram</span>
                                <Icon name="fa-brands:instagram" class="w-6 h-6 " aria-hidden="true" />*
                            </NuxtLink>

                            <NuxtLink v-if="contacts.telegram_link" :to="contacts.telegram_link" target="_blank"
                                class="flex items-center p-1.5  transition-base hover:text-red-600  focus:text-red-600 ">
                                <span class="sr-only">Телеграм</span>
                                <Icon name="fa-brands:telegram-plane" class="w-6 h-6 " aria-hidden="true" />
                            </NuxtLink>

                            <NuxtLink v-if="contacts.vk_link" :to="contacts.vk_link" target="_blank"
                                class="flex items-center p-1.5  transition-base hover:text-red-600  focus:text-red-600 ">
                                <span class="sr-only">ВКонтакте</span>
                                <Icon name="fa-brands:vk" class="w-6 h-6 " aria-hidden="true" />
                            </NuxtLink>

                        </div>
                    </div>

                    <div class="lg:col-start-2 sm:col-auto">
                        <iframe src="https://yandex.ru/sprav/widget/rating-badge/1925028904?type=rating" width="150" height="50" frameborder="0"></iframe>
                    </div>



                </div>

                <div class="row-span-2 lg:col-span-2 lg:row-auto lg:h-60">
                    <iframe class="rounded-lg shadow-lg" src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1925028904" width="100%" height="100%" frameborder="0" loading="lazy"></iframe>
                </div>
            </div>
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

useHead({
    title: 'Контакты',
    meta: [
        {
            name: 'description',
            content: 'Наш адрес, номер телефона, е-маил адрес, режим работы и социальные сети Всё для кондитера.'
        }
    ],
})
</script>