<script setup>
// const { public: config } = useRuntimeConfig();
const { contacts } = useContactsStore();
const { storage } = useRuntimeConfig().public.backOptions;
const favoriteStore = useFavoriteStore();
// const { data: productNews } = await useFetch(config.backOptions.api + '/products/spec');

const props = defineProps({
    product: Object
})
// console.log(props.product);
</script>


<template>

    <div class="bg-white  rounded-lg">
        <div class="mx-auto px-4 py-4">

            <!-- Product -->
            <div class="grid grid-cols-7 grid-rows-1 gap-x-8 gap-y-10 lg:grid-cols-1">

                <!-- Product image -->
                <div class="col-span-3 row-end-1  xl:col-span-4 lg:col-span-1 ">
                    <div class="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-white ring-2 ring-gray-300/20">

                        <img width="600" height="535" v-if="product.images && product.images.length"
                            :src="storage + product.images[0]" :alt="product.title"
                            class="object-cover max-h-[535px] object-center rounded-lg w-full" />

                        <img width="400" height="400" v-else src="/assets/img/default-product-img.webp"
                            :alt="product.title" class="object-cover max-h-[535px] object-center rounded-lg w-full">

                    </div>
                </div>

                <!-- Product details -->
                <div class="col-span-4 xl:col-span-3 lg:col-span-1">
                    <h1 class="text-3xl font-bold tracking-tight mt-4 xs:text-2xl">{{ product.title }}</h1>

                    <p class="mt-6 mb-auto text-gray-500">
                        Купить {{ product.title }} вы можете в компании &laquo;Bce для Koндитeрa&raquo;, оформив
                        заказ в интернет магазине, или отправив заявку по почте, а также по телефону или в офисе
                        компании.
                    </p>


                    <div class="mt-6 flex gap-2 justify-between items-end flex-wrap">
                        <span class="text-gray-500" v-if="product.count">
                            В наличии: <span class="text-indigo-950">{{ product.count }} шт.</span>
                        </span>
                        <span class="text-xl font-bold" v-if="product.count">
                            Цена: <span class="text-3xl">{{ product.price }}</span> ₽
                        </span>
                        <span v-else class="text-red-600 ml-auto">Нет в наличии</span>
                    </div>

                    <div class="mt-10 grid gap-x-6 gap-y-4 grid-cols-2 sm:grid-cols-1">
                        <!-- <ElementsProductfavorits class="gap-x-2 ring-2 transition-base " /> -->

                        <button @click="favoriteStore.toggle(product)"
                            :class="product.is_favorite ? 'bg-red-600 ring-red-500 text-white' : 'bg-white/70 text-indigo-950 ring-gray-900/5 '"
                            class="flex gap-x-2 group items-center justify-center transition-all p-1 rounded-md 
                            ring-2  
            hover:bg-red-600 hover:ring-red-500 hover:text-white 
            focus:ring-red-500 focus:text-text-white">
                            <Icon name="hugeicons:heart-add" class="w-6 h-6 ">
                            </Icon>
                            <span v-if="product.is_favorite">В избранном</span>
                            <span v-else>В избранное</span>
                        </button>
                        <ElementsProductCounter :item="product" />
                    </div>
                    <ElementsCallsToAction />

                    <!-- social -->
                    <div class=" pt-10 text-right lg:hidden">
                        <h3 class="text-sm font-medium text-gray-900">Мы в соцсетях</h3>
                        <div class="mt-2 flex items-center justify-end space-x-2">
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

                <!-- Product Tabs -->
                <div class="col-span-8 px-4 lg:col-span-1">
                    <TabGroup as="div" class="overflow-hidden">
                        <div class="border-b border-gray-200 sm:snap-x">
                            <TabList
                                class="-mb-px flex space-x-8 sm:no-scrollbar sm:snap-x sm:overflow-x-auto sm:w-full ">
                                <Tab as="template" v-if="product.description && product.description.length"
                                    v-slot="{ selected }" class="scroll-ml-6 snap-start">
                                    <button class="transition-base"
                                        :class="[selected ? 'border-amber-400' : 'border-transparent hover:border-amber-300 ', 'whitespace-nowrap border-b-2 py-4 text-sm font-medium']">Описание</button>
                                </Tab>
                                <Tab as="template" v-slot="{ selected }" class="scroll-ml-6 snap-start">
                                    <button class="transition-base"
                                        :class="[selected ? 'border-amber-400 ' : 'border-transparent hover:border-amber-300 ', 'whitespace-nowrap border-b-2 py-4 text-sm font-medium']">Оформление
                                        заказа</button>
                                </Tab>
                                <Tab as="template" v-slot="{ selected }" class="scroll-ml-6 snap-start">
                                    <button class="transition-base"
                                        :class="[selected ? 'border-amber-400' : 'border-transparent hover:border-amber-300 ', 'whitespace-nowrap border-b-2 py-4 text-sm font-medium']">Доставка</button>
                                </Tab>
                            </TabList>
                        </div>

                        <TabPanels as="template">
                            <TabPanel v-if="product.description && product.description.length" class="pt-10">
                                <h3 class="sr-only">Описание</h3>
                                <p class="text-gray-500" v-html="product.description"></p>
                            </TabPanel>
                            <TabPanel class="pt-10">
                                <h3 class="sr-only">Оформление заказа</h3>

                                <div class="text-gray-500 space-y-6">
                                    <p class="">
                                        Перед тем, как купить {{ product.name }} в
                                        интернет-магазине &laquo;Bce для Koндитeрa&raquo;, надо авторизоваться в
                                        вашем личном
                                        кабинете или, если вы впервые на сайте, заполнить регистрационную форму.
                                        Чтобы сделать заказ, переместите выбранный товар в корзину. Затем
                                        перейдите в корзину и нажмите «Обычное оформление» или «Оформить
                                        быстро».
                                    </p>
                                    <p class="">
                                        При оформлении быстрого заказа укажите свои ФИО и номер телефона. Наши
                                        менеджеры свяжутся с вами для уточнения условий доставки и оплаты
                                        заказа. После согласования условий вы получите подтверждение оформления
                                        заказа электронным письмом или смс-сообщением.
                                    </p>
                                    <p class="">
                                        Обычное оформление заказа выглядит так: необходимо последовательно
                                        заполнить все поля формы – ФИО, адрес электронной почты, контактный
                                        телефон, адрес доставки. Выбрать способ доставки и оплаты. Итоговая цена
                                        {{ product.name }} будет указана внизу формы
                                        заказа. Рекомендуем в поле «комментарии к заказу» указать информацию,
                                        благодаря которому курьеру будет проще вас найти. Для подтверждения
                                        нажмите кнопку «Заказать».
                                    </p>
                                </div>
                            </TabPanel>
                            <TabPanel class="pt-10 text-gray-500">
                                <h3 class="sr-only">Доставка</h3>

                                <p>Доставка{{ product.name }} может быть выполнена одним из следующих способов:
                                </p>
                                <ul class="mt-4 list-inside list-disc ">
                                    <li>Почта России. Товар будет доставлен в почтовое отделение.</li>
                                    <li>Boxberry. Доставка до двери или до терминала.</li>
                                    <li>СДЭК. Товар доставляется до терминала или до двери.</li>
                                    <li>Экспресс-доставка посылкой EMS.</li>
                                    <li>Почта России (постомат). Доставка до постомата.</li>
                                </ul>

                                <p class="mt-4">
                                    После того, как заказ будет собран, ему присвоится трек-номер, который
                                    придет
                                    вам на электронную почту или на телефон смс-сообщением.
                                </p>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>

                    <!-- social -->
                    <div class="hidden pt-10 text-right lg:block">
                        <h3 class="text-sm font-medium text-gray-900">Мы в соцсетях</h3>
                        <div class="mt-2 flex items-center justify-end space-x-2">
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

                <!-- Product others -->
                <div class="relative col-span-8 mt-8 lg:col-span-1 lg:mt-0">
                    <LazyElementsSliderProduct v-if="product.similars?.length" class="col-span-2 lg:grid-cols-1"
                        :data="product.similars" title="Похожие товары" />
                </div>
            </div>
        </div>
    </div>

</template>
