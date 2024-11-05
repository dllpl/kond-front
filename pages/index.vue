<template>

    <div class="wrapper-container px-12 xl:px-6 xs:px-4">
        <div class="grid  grid-cols-[300px_1fr] gap-8">


            <div class="w-full h-16 bg-amber-300 hover:bg-amber-400 transition-all col-span-2">
                <p class="">БАНЕР</p>
                <ElementsSliderBanner />
            </div>

            <div class="col-span-1 ">
                <ElementsMenuDropDown />
            </div>

            <div class="">
                <SectionProductTop />
                <SectionFollowSocial />
                <SectionPromoCook />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
