<script setup>
// const popupStore = usePopupStore();

const loyaltyParams = await useCartStore().getLoyalty();

// if(process.client) {
//     if(loyaltyParams.code === 3) {
//         popupStore.toggle('toast', {title: loyaltyParams.message, timeout: 5000})
//     }
// }

</script>

<template>
    <div class="mt-6 flow-root">
        <h2 class="text-base font-semibold leading-7 mb-6">Программа лояльности</h2>
        <div v-if="loyaltyParams.code === 3" class="grid gap-4 grid-cols-2 md:grid-cols-1">
            <div class="">
                <p class="mb-4 text-gray-600 md:text-sm">
                    Нашу бонусную карту можно получить совершенно бесплатно. Обязательное условие - наличии Telegram аккаунта с тем же телефоном, что у вас в профиле.
                </p>

                <p class="mb-2  md:text-sm">
                    Порядок начисление бонусов:
                </p>

                <ul class="space-y-2 mb-4  md:text-sm">
                    <li>
                        <p class="">
                            &mdash;&nbsp;при общей суммы покупок <strong>от 0р</strong> - начисляется <strong>1%
                                бонусов</strong></p>
                    </li>
                    <li>
                        <p class="">&mdash;&nbsp;при общей суммы покупок <strong>от 5000р</strong> - начисляется
                            <strong>3%
                                бонусов</strong>
                        </p>
                    </li>
                    <li>
                        <p class="">&mdash;&nbsp;при общей суммы покупок <strong>от 20000р</strong> - начисляется
                            <strong>5%
                                бонусов</strong>
                        </p>
                    </li>
                    <li>
                        <p class="">&mdash;&nbsp;при общей суммы покупок <strong>от 30000р</strong> - начисляется
                            <strong>7%
                                бонусов</strong>
                        </p>
                    </li>
                </ul>

                <p class="text-gray-600  md:text-sm mb-2">
                    Бонусами можно оплатить до 10% от стоимости покупки!
                </p>

                <p class="mb-2 text-lg md:text-sm">
                    Отсканируйте QR-код или воспользуйтесь ссылкой для получения карты:
                </p>

                <NuxtLink to="https://t.me/KondeterSHOP_bot/?start=utm_source=site" target="_blank"
                    class="inline-block rounded-lg ring-amber-400 bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base md:w-full text-center">
                    Получить карту
                </NuxtLink>
            </div>

            <div class="overflow-hidden rounded-lg h-full mx-auto lg:h-40 xs:h-auto ">
                <picture>
                    <img src="/assets/img/qr.png" alt="Интернет магазин - все для кондитера"
                        class="object-cover object-center h-full w-full" />
                </picture>
            </div>
        </div>
        <div v-else class="flex flex-col gap-3">

            <p class="mb-2  md:text-sm">
                Начисление бонусов:
            </p>

            <ul class="space-y-2 mb-4  md:text-sm">
                <li>
                    <p class="">
                        &mdash;&nbsp;при общей суммы покупок <strong>от 0р</strong> - начисляется <strong>1%
                        бонусов</strong></p>
                </li>
                <li>
                    <p class="">&mdash;&nbsp;при общей суммы покупок <strong>от 5000р</strong> - начисляется
                        <strong>3%
                            бонусов</strong>
                    </p>
                </li>
                <li>
                    <p class="">&mdash;&nbsp;при общей суммы покупок <strong>от 20000р</strong> - начисляется
                        <strong>5%
                            бонусов</strong>
                    </p>
                </li>
                <li>
                    <p class="">&mdash;&nbsp;при общей суммы покупок <strong>от 30000р</strong> - начисляется
                        <strong>7%
                            бонусов</strong>
                    </p>
                </li>
            </ul>

            <p class="text-lg md:text-sm font-bold">
                Ранг: {{ loyaltyParams.loyaltyLevel ?? 'Новичок' }}
            </p>

            <p class="text-lg md:text-sm font-bold">
                Баланс бонусов: {{ formatNumber(loyaltyParams.bonus) }}
            </p>
            <p class="text-gray-600 md:text-sm">
                Бонусами можно оплатить до 10% от стоимости покупки!
            </p>
            <div class="flex gap-2 md:flex-col">
                <NuxtLink to="/catalog"
                          class=" inline-block rounded-lg ring-amber-400 bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base text-center md:w-full">
                    К покупкам
                </NuxtLink>
                <NuxtLink to="/cart"
                          class="inline-block rounded-lg ring-amber-400 bg-green-500 px-2.5 py-2 hover:bg-green-400 transition-base text-center md:w-full">
                    В корзину
                </NuxtLink>
            </div>

        </div>

    </div>
</template>