<template>

    <div class="relative">

        <div class=" relative mx-auto grid grid-cols-3 items-center  gap-x-12 
        xl:grid-cols-5 ">
            <img src="assets/img/iphones.png" alt=""
                class=" object-cover h-auto xl:col-span-2 xl:col-start-4 xl:row-start-1 xl:mb-auto" />
            <div class="col-span-2 w-full xl:col-span-3  ">
                <h2 class="font-bold text-4xl 2xl:text-3xl">Мы в социальных сетях</h2>
                <p class="mt-8 text-lg leading-8 ">
                    Хотите быстро и удобно получить консультацию по нашим услугам или оформить заказ? Теперь у
                    вас есть возможность связаться с нами в Telegram и WhatsApp. Мы всегда стремимся быть на
                    связи с нашими клиентами и предоставить им максимальное удобство в общении с нами.
                </p>

                <div class="flex gap-6 pt-8 ">
                    <a href="#"
                        class="group hover:shadow-lg flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-green-500 px-4 py-3 text-white transition-base">
                        <icon name="mdi:whatsapp" class="h-6 w-6  text-white " />
                        Whatsapp
                    </a>
                    <a href="#"
                        class="group hover:shadow-lg flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FDCB82] px-4 py-3 text-white transition-base">
                        <icon name="mdi:instagram" class="h-6 w-6 text-white " />
                        Instagram
                    </a>
                    <a href="#"
                        class="group hover:shadow-lg flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-sky-500 px-4 py-3 text-white transition-base">
                        <icon name="basil:vk-outline" class="h-6 w-6 text-white " />
                        ВКонтакте
                    </a>
                </div>
            </div>

            <div class="absolute top-0 left-0 -z-10 w-full h-full blur-3xl overflow-hidden bg-gray-200">
            </div>
        </div>

        <div class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true">
            <div class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#fff06c] to-[#f30a0a] opacity-25"
                style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
        </div>
    </div>

</template>

<script setup>

</script>