<template>


    <!-- <div class="">
        <div class="flex items-center pb-8">
            <div class="w-1/2 p-8 mr-8 lg:w-full lg:mr-0">
                <h2 class="font-bold text-4xl 2xl:text-3xl">Кондитерам</h2>
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

                <a href="#"
                    class="group flex items-center gap-x-1 w-auto mr-auto justify-center rounded-lg mt-6 bg-amber-400 px-5 py-2 hover:bg-amber-300 transition-base">
                    В каталог
                    <icon name="material-symbols-light:keyboard-double-arrow-right-rounded"
                        class="w-5 h-5 group-hover:translate-x-1 transition-base"></icon>
                </a>

            </div>

            <div class="flex w-1/2">
                <img src="assets/img/cooking-4-2.jpg" alt="" class="object-cover rounded-2xl" h- />
            </div>
        </div>

        <div class=" gap-x-8 justify-end items-start w-[37rem] flex ml-auto col-end-2 col-span-2 ">
            <div class="order-first flex w-auto flex-none justify-end self-end lg:w-64">
                <img src="assets/img/cooking-3.jpg" alt=""
                    class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
            </div>

            <div class="w-auto  lg:flex-auto lg:justify-end lg:w-96 lg:flex">
                <img src="assets/img/cooking-1.jpg" alt=""
                    class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
            </div>

            <div class="sm:hidden blockw-0 flex-auto w-auto ">
                <img src="assets/img/cooking-6.jpg" alt=""
                    class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
            </div>

        </div>
    </div> -->

    <div class="overflow-hidden ">
        <div class="flex max-w-7xl mx-auto lg:block">
            <div
                class="grid grid-cols-1 gap-y-8 mx-0 min-w-full max-w-none flex-none gap-x-12 lg:mx-auto lg:max-w-2xl lg:gap-y-16">
                <div class="pb-8 max-w-lg w-full col-end-1 lg:col-auto lg:w-auto lg:max-w-none lg:pb-0">
                    <h2 class="font-bold text-4xl 2xl:text-3xl">Кондитерам</h2>
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
                <div class="contents lg:gap-8 lg:flex lg:flex-wrap lg:items-start lg:justify-end sm:gap-6">
                    <div class="self-end ml-auto flex-none w-auto lg:hidden lg:flex-auto lg:w-0 sm:block">
                        <img src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                            alt="" class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
                    </div>
                    <div
                        class="flex col-span-2 col-end-2 ml-auto w-[37rem] items-start justify-end gap-x-8 sm:contents">
                        <div class="flex justify-end self-end order-first flex-none lg:w-64">
                            <img src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                alt=""
                                class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                        </div>
                        <div class="flex justify-end flex-none lg:flex-none lg:w-auto sm:w-96 sm:flex-auto">
                            <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                                alt=""
                                class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                        </div>

                        <div class="w-auto flex-none block lg:flex-auto lg:w-0 lg:hidden">
                            <img src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                alt="" class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>






</template>