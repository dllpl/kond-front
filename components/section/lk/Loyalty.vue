<template>
    <div class="mt-6 flow-root">
        <h2 class="text-base font-semibold leading-7 mb-6">Программа лояльности</h2>
        <div class="grid gap-4 grid-cols-2">
            <div class="">
                <p class="mb-4 text-gray-600 md:text-sm">
                    Нашу бонусную карту можно получить от любой суммы покупки.
                </p>

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

                <p class="text-gray-600  md:text-sm">
                    Бонусами можно оплатить до 10% от стоимости покупки.
                </p>

                <NuxtLink to="https://t.me/KondeterSHOP_bot/?start=utm_source=site" target="_blank"
                    class="inline-block rounded-lg ring-2 ring-amber-400 bg-amber-400 px-2.5 py-2 hover:bg-amber-300 m-2 transition-base">
                    Зарегистрироваться в системе лояльности
                </NuxtLink>
            </div>

            <div class="overflow-hidden rounded-lg w-1/3 h-full mx-auto lg:h-40 xs:h-auto ">
                <picture>
                    <!-- <source srcset="/assets/img/about-site-768.webp" media="(max-width: 768px)"> -->
                    <!-- <source srcset="/assets/img/about-site-1024.webp" media="(max-width: 1024px)"> -->
                    <img src="/assets/img/qr.png" alt="Интернет магазин - все для кондитера"
                        class="object-cover object-center h-full w-full" />
                </picture>
            </div>
        </div>

    </div>
</template>