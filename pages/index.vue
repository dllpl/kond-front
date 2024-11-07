<template>

    <div class="wrapper-container px-12 xl:px-6 xs:px-4">
        <div class="grid  grid-cols-[300px_1fr] gap-8">


            <!-- <div class="w-full h-16 bg-amber-300 hover:bg-amber-400 transition-all col-span-2">
                <p class="">БАНЕР</p>
                
                <ElementsSliderBanner />
            </div> -->

            <div class="col-span-1 ">
                <ElementsMenuDropDown />
            </div>

            <div class="">
                <div class="relative h-96  py-12 px-12 flex flex-col justify-center gap-5 mb-8">
                    <h2 class="text-4xl font-semibold ">Скидка 15% на первую покупку</h2>
                    <p class="text-lg">Новые клиенты, совершающие первую покупку в нашем интернет-магазине</p>
                    <button
                        class="text-sm font-semibold rounded-lg  px-4 py-3 bg-amber-300 hover:bg-amber-400 transition-base mr-auto">Узнать
                        больше
                    </button>
                    <img class="absolute inset-0 object-cover object-right h-full w-full rounded-2xl -z-10"
                        src="/assets/img/1440x400.jpg" alt="">
                </div>
                <SectionProductTop />
                <SectionFollowSocial />
                <SectionPromoCook />
                <SectionPromoPrice />
                <SectionAdvantages />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
