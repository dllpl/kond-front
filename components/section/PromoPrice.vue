<template>
    <div class="">
        <div class="overflow-hidden pt-14 sm:pt-0">
            <div class="bg-red-600 rounded-2xl ">
                <div class="mx-auto max-w-7xl px-10 xs:px-6">
                    <div class="relative pb-24 pt-48 lg:pb-20 lg:pt-44 sm:pb-16">
                        <div class="sm:relative sm:z-10">
                            <h2 id="sale-heading" class="font-bold tracking-tight text-white text-2xl">
                                Распродажа
                                <br />
                                <span class="text-5xl lg:text-4xl">Скидки до 50%</span>
                            </h2>
                            <div class="mt-6 text-base">
                                <NuxtLink to="/"
                                    class="group inline-flex items-center gap-x-1 justify-center rounded-lg mt-6 px-5 py-2 font-semibold text-white border-2 transition-base">
                                    Перейти
                                    <icon name="hugeicons:arrow-right-double"
                                        class="w-5 h-5 group-hover:translate-x-1 transition-base"></icon>
                                </NuxtLink>
                            </div>
                        </div>

                        <div class="absolute top-6 left-1/2 translate-x-0 transform sm:brightness-[0.85] xs:blur-[1px]">

                            <div class="ml-3 flex min-w-max space-x-8 lg:space-x-6 ">

                                <div class="flex flex-col space-y-8 space-x-0 lg:space-y-6 ">
                                    <div class="flex-shrink-0">
                                        <img loading="lazy" class="h-72 w-72 rounded-lg object-cover lg:h-60 lg:w-60"
                                            src="assets/img/promo-action-2.webp" alt="Скидки! Все для кондитера" />
                                    </div>
                                    <div class="mt-6 flex-shrink-0">
                                        <img loading="lazy" class="h-72 w-72 rounded-lg object-cover lg:h-60 lg:w-60"
                                            src="assets/img/promo-action-3.webp" alt="Скидки! Все для кондитера" />
                                    </div>
                                </div>

                                <div class="flex flex-col space-y-8 space-x-0 -mt-20 lg:space-y-6
                                    ">
                                    <div class="flex-shrink-0">
                                        <img loading="lazy" class="h-72 w-72 rounded-lg object-cover lg:h-60 lg:w-60"
                                            src="assets/img/promo-action-1.webp" alt="Скидки! Все для кондитера" />
                                    </div>
                                    <div class="mt-6 flex-shrink-0">
                                        <img loading="lazy" class="h-72 w-72 rounded-lg object-cover lg:h-60 lg:w-60"
                                            src="assets/img/promo-action-4.webp" alt="Скидки! Все для кондитера" />
                                    </div>
                                </div>

                                <div class="flex flex-col space-y-8 space-x-0 lg:space-y-6 ">
                                    <div class="flex-shrink-0">
                                        <img loading="lazy" class="h-72 w-72 rounded-lg object-cover lg:h-60 lg:w-60"
                                            src="assets/img/promo-action-5.webp" alt="Скидки! Все для кондитера" />
                                    </div>
                                    <div class="mt-6 flex-shrink-0">
                                        <img loading="lazy" class="h-72 w-72 rounded-lg object-cover lg:h-60 lg:w-60"
                                            src="assets/img/promo-action-4.webp" alt="Скидки! Все для кондитера" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>