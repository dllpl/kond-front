<template>
    <div class="f-carousel" ref="carousel">
        <div class="f-carousel__viewport">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
// import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.css";
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";

export default defineComponent({
    props: {
        options: Object,
    },
    setup(props) {
        const fcInstance = ref(null);
        const carouselRef = ref(null);

        onMounted(() => {
            fcInstance.value = new Carousel(
                carouselRef.value,
                {
                    ...(props.options || {}),
                },
                {
                    ...(props.options?.Autoplay && { Autoplay })
                }
            );
        });

        onUnmounted(() => {
            if (fcInstance.value) {
                fcInstance.value.destroy();
                fcInstance.value = null;
            }
        });

        return {
            fcInstance,
            carouselRef,
        };
    },
});

</script>