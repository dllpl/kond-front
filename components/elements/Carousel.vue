<template>
    <div class="f-carousel" ref="carousel">
        <div class="f-carousel__viewport">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";

const props = defineProps({
    options: Object,
})

const fcInstance = ref(null);
const carousel = ref(null);

onMounted(() => {
    fcInstance.value = new Carousel(
        carousel.value,
        {
            ...(props.options.value || {}),
        },
        {
            ...(props.options.value?.Autoplay && { Autoplay }),
        }
    );
});

onUnmounted(() => {
    if (fcInstance.value) {
        fcInstance.value.destroy();
        fcInstance.value = null;
    }
});


</script>