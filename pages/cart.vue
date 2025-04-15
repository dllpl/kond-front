<template>
    <div class="">

        <section>
            <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs"/>
        </section>
        <main class="wrapper-container pt-3 pb-16">
            <div class="mb-10 space-y-12">
                <h1 class="text-4xl font-semibold 2xl:text-3xl xs:text-2xl">
                    Оформление заказа
                </h1>

                <section class="col-span-4 ">
                    <ul class="divide-y divide-gray-200 border-b border-t border-gray-200 ">
                        <ClientOnly>
                            <li v-if="products.length" v-for="product in products" :key="product.id"
                                class="flex py-4 gap-4 relative xs:flex-col xs:items-center">
                                <div
                                    class="size-16 shrink-0 overflow-hidden rounded-md border border-gray-200 xs:size-28">
                                    <img v-if="product.images && product.images.length"
                                         :src="storage + product.images[0]" :alt="product.title"
                                         class="size-full object-cover"/>
                                    <img v-else src="/assets/img/default-product-img.webp" :alt="product.title"
                                         class="size-full object-cover">
                                </div>


                                <div class="flex gap-6 justify-between w-full md:flex-col xs:items-center">
                                    <!-- name, price -->
                                    <div class="mr-auto md:w-5/6 xs:text-center xs:w-full">
                                        <h3>{{ product.title }}</h3>
                                        <p class="text-base font-medium">
                                            <span class="text-gray-500 text-sm">Цена:
                                            </span>
                                            {{ formatNumber(product.price) }}
                                        </p>
                                    </div>

                                    <!-- counter -->
                                    <div class="w-28">
                                        <ElementsProductCounter :item="product" context="small"/>
                                    </div>

                                    <!-- total -->
                                    <p class="text-base font-medium tabular-nums">
                                        <span class="text-gray-500 text-sm">Сумма:</span>
                                        {{
                                            formatNumber(cartStore.totalPriceProduct(product))
                                        }}
                                    </p>

                                    <!-- delete -->

                                    <button type="button" @click="cartStore.removeCart(product.id)" class="flex items-end justify-center mb-auto p-1 transition-base text-gray-500 rounded-md ring-1 ring-gray-400/20   md:absolute md:top-2.5 md:right-2.5
                                            hover:ring-indigo-950 focus:rounded-md 
                                            focus:ring-indigo-950
                                            hover:text-indigo-950 group">

                                        <Icon name="hugeicons:cancel-01" class="h-4 w-4" aria-hidden="true"/>
                                    </button>

                                </div>
                            </li>
                            <li v-else class="py-4">
                                <span>Корзина пуста, <NuxtLink to="/catalog"
                                                               class="text-base font-semibold text-red-600">перейти в каталог</NuxtLink></span>
                            </li>
                        </ClientOnly>
                    </ul>
                </section>

                <section>
                    <ElementsSliderProduct :data="productsOffers.data" title="Спецпредложения" class="relative"/>
                </section>

                <section class="grid grid-cols-2 gap-12 lg:grid-cols-1 lg:gap-6">
                    <div class="py-6 px-8 border border-gray-200 rounded-lg xs:py-6 xs:px-4">
                        <h2 class="text-lg font-medium text-gray-900 mb-6">Контактные данные</h2>

                        <ul class="grid grid-cols-2 gap-x-8 gap-y-6 lg:gap-6 md:grid-cols-2 xs:grid-cols-1 xs:gap-4">

                            <li class="">
                                <label for="surname" class="block text-sm font-medium leading-6 mb-2 ">
                                    Фамилия
                                </label>

                                <input v-model='form.last_name' type="text" name="surname" autocomplete="surname"
                                       required minlength='5' v-maska="maskaOptions.cyrillic_and_upper_case"
                                       class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"/>
                            </li>

                            <li class="">
                                <label for="first-name" class="block text-sm font-medium leading-6 mb-2 ">
                                    Имя <span class="text-red-500">*</span>
                                </label>

                                <input v-maska=maskaOptions.cyrillic_and_upper_case name="name" autocomplete="name"
                                       v-model="form.first_name" required
                                       class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"/>
                            </li>

                            <li class="">
                                <label for="patronymic" class="block text-sm font-medium leading-6 mb-2 ">
                                    Отчество
                                </label>

                                <input v-maska="maskaOptions.cyrillic_and_upper_case" name="patronymic"
                                       v-model="form.patronymic" autocomplete="patronymic" required=""
                                       class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"/>
                            </li>

                            <li class="row-start-3 xs:row-auto">
                                <label for="phone" class="block text-sm font-medium leading-6 mb-2 ">Телефон <span
                                    class="text-red-500">*</span></label>

                                <input v-maska="maskaOptions.phone.mask" name="phone" autocomplete="phone" required
                                       v-model="form.phone"
                                       class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"
                                       placeholder="+7 (___) ___-__-__"/>

                            </li>

                            <li class="row-start-3 xs:row-auto">
                                <label for="email" class="block text-sm font-medium leading-6 mb-2">Email <span
                                    class="text-red-500">*</span></label>

                                <input id="email" name="email" type="email" autocomplete="email" v-model="form.email"
                                       class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"
                                       placeholder="Email"/>

                            </li>
                        </ul>
                    </div>

                    <div class="py-6 px-8 border border-gray-200 rounded-lg xs:py-6 xs:px-4">
                        <h2 class="text-lg font-medium text-gray-900 mb-6">Способ получения</h2>

                        <div class="space-y-6">

                            <div class="">
                                <div class="flex items-center gap-x-3">
                                    <input name="pickup" type="radio" value="pickup" id="pickup"
                                           :checked="is_pickup === true" @change="is_pickup = !is_pickup"
                                           class="relative flex-none cursor-pointer size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-amber-400 checked:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden">
                                    <label for="pickup" class="block text-sm font-medium cursor-pointer w-full">
                                        Самовывоз
                                    </label>
                                </div>
                                <div class="text-sm space-y-2 mt-4">
                                    <p>Самовывоз - бесплатно по адресу:</p>
                                    <p>{{ contacts.address }}</p>
                                    <p>График работы: {{ contacts.wt_weekday }} - {{ contacts.wt_weekend }}</p>
                                </div>
                            </div>

                            <div class="space-y-4">
                                <div class="flex items-center gap-x-3">
                                    <input name="delivery" type="radio" value="delivery" id="delivery"
                                           :checked="is_pickup === false" @change="is_pickup = !is_pickup"
                                           class="relative flex-none cursor-pointer size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-amber-400 checked:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden">
                                    <label for="delivery" class="block text-sm font-medium cursor-pointer w-full">
                                        Доставка
                                    </label>
                                </div>

                                <Combobox v-model="address_data" v-if="is_pickup === false" type="text" name="city"
                                          id="city">
                                    <div class="relative mt-1">
                                        <div class="relative">

                                            <ComboboxInput :displayValue="(item) => item.name" placeholder="Адрес"
                                                           class="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 text-sm leading-6 transition-all"
                                                           @change="query = searchAdress($event.target.value)"/>

                                        </div>

                                        <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100"
                                                        leaveTo="opacity-0" @after-leave="query = ''">
                                            <ComboboxOptions
                                                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                <div v-if="adresess.length === 0 && query !== ''"
                                                     class="relative cursor-default select-none px-4 py-2 text-gray-700 text-sm">
                                                    Адрес не найден
                                                </div>

                                                <ComboboxOption v-for="item in adresess" as="template"
                                                                :key="item.fias_id" :value="item"
                                                                v-slot="{ selected, active }">
                                                    <li
                                                        class="relative cursor-default select-none py-2 px-4  hover:bg-amber-300 text-sm">
                                                        <span class="block">
                                                            {{ item.name }}
                                                        </span>
                                                        <span v-if="!selected"
                                                              class="absolute inset-y-0 left-0 flex items-center pl-1">
                                                        </span>
                                                    </li>
                                                </ComboboxOption>
                                            </ComboboxOptions>
                                        </TransitionRoot>
                                        <p class="text-sm space-y-2 mt-2">Стоимость доставки расчитывается отдельно</p>
                                    </div>
                                </Combobox>

                            </div>
                        </div>
                    </div>
                </section>

                <section class="rounded-lg bg-gray-200/20 p-8 xs:py-6 xs:px-4">
                    <h2 class="text-lg font-medium text-gray-900">Ваш заказ</h2>

                    <ul class="my-6 space-y-4">
                        <li class="flex items-center justify-between xs:text-sm">
                            <span class="text-gray-600">Товаров на сумму:</span>
                            <span class="font-medium text-gray-900 text-lg">{{
                                    formatNumber(cartStore.calculateFullPrice)
                                }}</span>
                        </li>

                        <!-- Промокод -->
<!--                        <li-->
<!--                            class="flex flex-wrap gap-4 items-center justify-between relative border-t border-gray-200 pt-4 xs:text-sm">-->
<!--                            <label for="coupon" class="text-gray-600 ">Введите промокод для скидки:</label>-->
<!--                            <div class="relative w-72 md:w-full">-->
<!--                                <input v-model="promoCode" name="coupon" type="text" required-->
<!--                                       class="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all ">-->
<!--                                <button type="submit" @click="applyPromoCode"-->
<!--                                        class="absolute right-0 top-0 shadow-sm flex items-center justify-center rounded-md ring-1 ring-inset ring-amber-400 bg-amber-400 px-2.5 hover:bg-amber-300 focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all h-full">-->
<!--                                    <Icon name="hugeicons:arrow-right-02" class="h-5 w-5 text-grey-900"/>-->
<!--                                </button>-->
<!--                            </div>-->
<!--                        </li>-->

                        <!-- Бонусы -->
                        <li
                            class="flex items-end justify-between border-t border-gray-200 pt-4 gap-4 xs:flex-wrap xs:text-sm">
                            <span class="flex flex-col">
                                <span class="font-medium mb-1">Бонусы</span>
                                <span v-if="cartStore.loyaltyParams.bonus" class="text-gray-600">
                                    Баланс:
                                    <span class="text-gray-900 font-medium text-lg">
                                        {{ formatNumber(cartStore.loyaltyParams.bonus) }}
                                    </span>
                                </span>
                                <span class="text-gray-600 " v-if="cartStore.loyaltyParams.bonus">
                                    Доступно для списания:
                                    <span class="text-gray-900 font-medium text-lg">
                                        {{ formatNumber(cartStore.calculateLoyalty) }}
                                    </span>
                                </span>
                                <span v-if="!cartStore.loyaltyParams.bonus" class="text-gray-600 max-w-2xl">
                                    {{ cartStore.loyaltyParams.message }}
                                    <NuxtLink
                                        to="/lk#bonuses"
                                        external
                                        v-if="cartStore.loyaltyParams.code === 3"
                                        class="text-amber-500 underline"
                                    >
                                        Регистрация в бонусной системе
                                    </NuxtLink>
                                </span>
                            </span>
                            <button type="submit" @click="cartStore.toggleLoyalty()"
                                    :disabled="!cartStore.loyaltyParams.bonus"
                                    :class="{ 'bg-inherit': cartStore.with_bonuses }"
                                    class="disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:ring-0 shadow-sm text-sm rounded-md ring-1 ring-inset ring-amber-400 bg-amber-400 px-2.5 py-2   transition-all xs:w-full">
                                {{ !cartStore.with_bonuses ? 'Списать бонусы' : 'Накопить бонусы' }}
                            </button>
                        </li>

                        <!-- Сумма скидки -->
                        <li class="flex items-center justify-between border-t border-gray-200 pt-4  xs:text-sm ">
                            <span class="flex items-center  text-gray-600 ">
                                <span>Сумма скидки:</span>
                            </span>
                            <span class=" font-medium text-gray-900 text-lg">{{
                                    formatNumber(cartStore.calculateFullPrice - cartStore.calculateTotal)
                                }}</span>
                        </li>

                        <!-- Итого -->
                        <li class="flex items-end justify-between border-t border-gray-200 font-medium pt-4">
                            <span class="text-lg md:text-base xs:text-sm  ">
                                Итого:
                            </span>
                            <div>
                          <span
                              v-if="cartStore.with_bonuses"
                              class="line-through text-gray-500 text-base md:text-xs mr-2"
                          >
                            {{ formatNumber(cartStore.calculateFullPrice) }}
                          </span>
                                <span class="text-2xl md:text-base">
                            {{ formatNumber(cartStore.calculateTotal) }}
                          </span>
                            </div>
                        </li>
                    </ul>

                    <ClientOnly>
                        <div class="space-y-4 w-1/3 flex flex-col ml-auto mt-8 md:w-full md:mx-0">
                            <p v-if="!profileStore.isAuth()"
                               @click="popupStore.toggle('modal', { title: 'Авторизация', subtitle: 'Войдите в свой аккаунт либо зарегистрируйтесь', type: 'login', redirect: '/cart' })"
                               class="text-end">
                                <span class="text-base font-semibold text-amber-400 cursor-pointer">
                                    Авторизуйтесь</span>, чтобы продолжить
                            </p>
                            <button @click="makePay(1)" :disabled="disabledPay"
                                    class="md:mb-5 block text-white shadow-lg font-medium rounded-md bg-green-500 px-2.5 py-2 hover:bg-green-600 focus:ring-2 focus:ring-inset focus:ring-green-600 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 transition-all">
                                Оплатить заказ
                            </button>

                            <button @click="makePay(2)" :disabled="disabledPay"
                                    class="block shadow-sm rounded-lg text-gray-300 font-medium bg-gray-900 px-2.5 py-2  hover:text-white focus:ring-2 focus:ring-inset focus:text-white transition-all disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500">
                                Сформировать счет (для юр. лиц)
                            </button>
                        </div>
                    </ClientOnly>

                </section>

            </div>
        </main>
    </div>
</template>

<script setup>

import HttpClient from "~/server/utils/httpClient.js";

const breadcrumbs = [
    {
        name: 'Оформление заказа',
        slug: '/cart',
    },
]

useHead({
    title: 'Оформление заказа',
    meta: [
        {
            name: 'description',
            content: 'Оформление и оплата заказа в интернет магазине Всё для кондитера.'
        }
    ],
})

const {currentRoute} = useRouter()

const {public: config} = useRuntimeConfig();
const {storage} = useRuntimeConfig().public.backOptions;
const {data: productsOffers} = await HttpClient('products/spec');

const profileStore = useProfileStore();
const popupStore = usePopupStore();
const cartStore = useCartStore();
const {contacts} = useContactsStore();
const {products} = storeToRefs(cartStore);

const maskaOptions = useMaskaOptions();
const is_pickup = ref(true)

const form = profileStore.profile

const query = ref('')
const selected = ref({})

const adresess = ref([])

const address_data = ref({
    name: form.full_address,
    fias_id: form.full_address_fias_id
})

const searchAdress = async (value) => {
    const data = await $fetch('dadata/address', {
        method: 'POST',
        body: {
            query: value,
            count: 5,
        }
    })
    adresess.value = data
}

watch(selected, (val) => {
    form.full_address = val.name
    form.full_address_fias_id = val.fias_id
})

const disabledPay = computed(() => {
    return !products.value.length || !profileStore.isAuth()
})

const makePay = (order_type_id) => {
    cartStore.makePay({
        ...form,
        is_pickup: is_pickup.value,
        products: cartStore.products,
        order_type_id: order_type_id,
        with_bonuses: cartStore.with_bonuses
    })
}

const promoCode = ref('')

// Метод для применения промокода
const applyPromoCode = () => {
    if (promoCode.value.trim()) {
        cartStore.applyPromoCode(promoCode.value);

    }
};

cartStore.getLoyalty();

</script>