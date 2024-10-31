<template>

    <div class="wrapper-container px-12 xl:px-6 xs:px-4">
        <!-- <div class="grid grid-cols-indexCatalog grid-cols-[300px, 1fr] gap-8"> -->
        <div class="grid  grid-cols-[300px_minmax(300px,_1fr)] gap-8">


            <div class="w-full h-16 bg-amber-300 hover:bg-amber-400 transition-all col-span-2">
                <!-- <p class="text-white">БАНЕР</p> -->
                <ElementsSliderBanner />
            </div>

            <div class="w-full col-span-1 ">
                <ElementsMenuDropDown />
            </div>

            <div class="w-full">
                <SectionProductTop />
            </div>
        </div>
    </div>

</template>

<script setup>

</script>
