<script setup>
const { storage } = useRuntimeConfig().public.backOptions;

const props = defineProps({
    product: Object
})

const callsToAction = [
    { name: 'Позвонить нам', href: '#', },
    { name: 'Остались вопросы?', href: '#', },
]

const social = [
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
]
</script>


<template>

    <div class="bg-white  rounded-lg">
        <div class="mx-auto px-4 py-4">

            <!-- Product -->
            <div class="grid grid-cols-7 grid-rows-1 gap-x-8 gap-y-10 lg:grid-cols-1">

                <!-- Product image -->
                <div class="col-span-3 row-end-1  xl:col-span-4 lg:col-span-1 ">
                    <div class="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-white ring-2 ring-gray-300/20">

                        <img v-if="product.images && product.images.length" :src="storage + product.images[0]"
                            :alt="product.title" class="object-cover max-h-[535px] object-center rounded-lg w-full" />

                        <img v-else src="/assets/img/default-product-img.webp" :alt="product.title"
                            class="object-cover max-h-[535px] object-center rounded-lg w-full">

                        <!-- <img :src="storage + product.images[0]" :alt="product.title"
                            class="object-cover max-h-[535px] object-center rounded-lg w-full" /> -->
                    </div>
                </div>

                <!-- Product details -->
                <div class="col-span-4 xl:col-span-3 lg:col-span-1">
                    <h1 class="mt-4 text-3xl font-bold tracking-tight">{{
                        product.title }}
                    </h1>

                    <p class="mt-6 mb-auto text-gray-500">
                        Купить {{ product.title }} вы можете в компании &laquo;Bce для Koндитeрa&raquo;, оформив
                        заказ в интернет магазине, или отправив заявку по почте, а также по телефону или в офисе
                        компании.
                    </p>


                    <div class="mt-6 flex gap-2 justify-between items-end ">
                        <span class="text-gray-500" v-if="product.count">
                            В наличии: <span class="text-indigo-950">{{ product.count }} шт.</span>
                        </span>
                        <span class="text-xl font-bold" v-if="product.count">
                            Цена: <span class="text-3xl">{{ product.price }}</span> ₽
                        </span>
                        <span v-else class="text-red-600 ml-auto">Нет в наличии</span>

                    </div>

                    <div class="mt-10 grid gap-x-6 gap-y-4 grid-cols-2  sm:grid-cols-1">
                        <button type="button"
                            class="flex items-center gap-x-2 w-full justify-center rounded-lg px-2.5 py-2 transition-base ring-2 ring-gray-300/20 hover:text-white hover:ring-red-500 hover:bg-red-500 group focus:rounded-md focus:ring-red-500 focus:text-red-500">

                            <Icon name="material-symbols:favorite-rounded"
                                class="w-6 h-6 group-hover:text-white text-red-500 transition-base">
                            </Icon>
                            В избранное
                        </button>
                        <ElementsProductCounter :item="product" />

                    </div>

                    <div
                        class="mt-10 border-y border-gray-200 divide-y divide-gray-900/5 sm:grid-cols-3 sm:divide-x  sm:border-x sm:border-gray-900/5">
                        <NuxtLink :to="item.href" v-for="item in callsToAction" :key="item.name"
                            class="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 lg:justify-center sm:justify-center sm:px-0">
                            <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            {{ item.name }}
                        </NuxtLink>
                    </div>

                    <div class=" pt-10 text-right lg:hidden">
                        <h3 class="text-sm font-medium text-gray-900">Мы в соцсетях</h3>
                        <ul role="list" class="mt-2 flex items-center justify-end space-x-2">
                            <li v-for="item in social" :key="item.name">
                                <NuxtLink :to="item.href"
                                    class="flex items-center p-1.5 text-gray-500 transition-base hover:text-gray-400">
                                    <span class="sr-only">{{ item.name }}</span>
                                    <icon :name="item.icon" class="h-6 w-6" aria-hidden="true"></icon>
                                </NuxtLink>
                            </li>
                        </ul>
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
                        <ul role="list" class="mt-2 flex items-center justify-end space-x-2">
                            <li v-for="item in social" :key="item.name">
                                <NuxtLink :to="item.href"
                                    class="flex items-center p-1.5 text-gray-500 transition-base hover:text-gray-400">
                                    <span class="sr-only">{{ item.name }}</span>
                                    <icon :name="item.icon" class="h-6 w-6" aria-hidden="true"></icon>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Product others -->
                <div class="col-span-8 mt-8 lg:col-span-1">
                    <ElementsSliderOtherBuy class="col-span-2 lg:grid-cols-1" :data="productNews" />
                </div>
            </div>
        </div>
    </div>

</template>
