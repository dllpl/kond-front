<template>

    <div class="relative py-12">

        <div class=" relative mx-auto grid grid-cols-3 items-center rounded-lg gap-x-12 py-16 ring-1 ring-white/10 
        xl:grid-cols-5 ">
            <!-- class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20"> -->

            <!-- <img class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm" -->
            <img src="assets/img/iphones.png" alt=""
                class="rounded-2xl object-cover h-auto xl:col-span-2 xl:col-start-4 xl:row-start-1 xl:mb-auto" />
            <div class="col-span-2 w-full xl:col-span-3  ">
                <h2 class="font-bold text-4xl 2xl:text-3xl">Мы в социальных сетях</h2>
                <p class="mt-6 text-base leading-8 ">
                    Хотите быстро и удобно получить консультацию по нашим услугам или оформить заказ? Теперь у
                    вас есть возможность связаться с нами в Telegram и WhatsApp. Мы всегда стремимся быть на
                    связи с нашими клиентами и предоставить им максимальное удобство в общении с нами.
                </p>

                <div class="flex gap-6 py-4 ">
                    <a href="#"
                        class="flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-amber-400 px-4 py-3 hover:bg-amber-300 transition-base">
                        <icon name="mdi:whatsapp" class="h-6 w-6 " />
                        Whatsapp
                    </a>
                    <a href="#"
                        class="flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-amber-400 px-4 py-3 hover:bg-amber-300 transition-base">
                        <icon name="mdi:instagram" class="h-6 w-6 " />
                        Instagram
                    </a>
                    <a href="#"
                        class="flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-amber-400 px-4 py-3 hover:bg-amber-300 transition-base">
                        <icon name="mdi:telegram" class="h-6 w-6 " />
                        Telegram
                    </a>
                </div>
            </div>

            <div class="absolute top-0 left-0 -z-10 w-full h-full blur-3xl overflow-hidden bg-gray-200">
            </div>
        </div>

        <div class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true">
            <div class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#dc2626] to-[#facc15] opacity-25"
                style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
        </div>
    </div>

</template>

<script setup>

</script>