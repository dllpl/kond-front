<template>
    <div class="overflow-hidden ">
        <div class="flex max-w-7xl mx-auto lg:block">
            <div class="grid grid-cols-1 gap-y-8 mx-0 min-w-full max-w-none flex-none gap-x-12 
                lg:mx-auto lg:max-w-2xl lg:gap-y-16 
                md:gap-y-8
                sm:gap-y-0 sm:translate-x-0 sm:transform">
                <div class="pb-8 max-w-lg w-full col-end-1 lg:col-auto lg:w-auto lg:max-w-none lg:pb-0">
                    <h2 class="font-bold text-4xl mb-8 2xl:text-3xl xs:text-2xl">Кондитерам</h2>
                    <p class="mt-6 text-lg lg:text-base lg:mt-5">
                        Интернет-магазин &laquo;Всё для кондитера&raquo; предлагает профессиональные инструменты,
                        ингредиенты и
                        аксессуары, соответствующие самым высоким стандартам. Мы тщательно отбираем продукцию, чтобы
                        каждый товар был надежным и качественным, а наш ассортимент удовлетворяет потребности как
                        крупных производств, так и небольших кондитерских мастерских.
                    </p>
                    <p class="mt-6 text-lg lg:text-base lg:mt-5">
                        Мы гарантируем удобный процесс покупки и быструю доставку, что особенно важно для
                        профессионалов. С нами вы всегда сможете найти всё необходимое для создания идеальных
                        десертов, сэкономив время и усилия на поисках.
                    </p>
                    <NuxtLink :to="'/catalog'"
                        class="group flex items-center gap-x-1 w-auto mr-auto justify-center rounded-lg mt-6 bg-amber-400 px-5 py-2 hover:bg-amber-300 transition-base lg:inline-flex lg:px-10">
                        В каталог
                        <icon name="material-symbols-light:keyboard-double-arrow-right-rounded"
                            class="w-5 h-5 group-hover:translate-x-1 transition-base"></icon>
                    </NuxtLink>
                </div>
                <div class="contents lg:gap-8 lg:flex lg:flex-wrap lg:items-start lg:justify-end sm:gap-6 sm:-mt-10">
                    <div class="self-end ml-auto flex-none w-auto lg:hidden lg:flex-auto lg:w-0 sm:block">
                        <img src="assets/img/cooking-1.4.webp" alt="Все для Кондитера"
                            class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
                    </div>
                    <div
                        class="flex col-span-2 col-end-2 ml-auto w-[37rem] items-start justify-end gap-x-8 sm:contents">
                        <div class="flex justify-end self-end order-first flex-none lg:w-64">
                            <img src="assets/img/cooking-1.3.webp" alt="Все для Кондитера"
                                class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                        </div>
                        <div class="flex justify-end flex-none lg:flex-none lg:w-auto sm:w-96 sm:flex-auto">
                            <img src="assets/img/cooking-1.2.webp" alt="Все для Кондитера"
                                class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                        </div>

                        <div class="w-auto flex-none block lg:flex-auto lg:w-0 lg:hidden">
                            <img src="assets/img/cooking-1.1.webp" alt="Все для Кондитера"
                                class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>






</template>