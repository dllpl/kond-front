<template>
    <Flicking @after-resize="adaptiveSlide($event)" @ready="ready($event)" :options="options" :plugins="plugins">
        <slot></slot>
        <template #viewport>
            <slot name="pagination"></slot>
            <slot name="arrow"></slot>
        </template>
    </Flicking>
</template>

<script setup>
import Flicking from "@egjs/vue3-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import { Arrow } from "@egjs/flicking-plugins";
import { AutoPlay } from "@egjs/flicking-plugins";

import '@egjs/vue3-flicking/dist/flicking.css';
import "@egjs/flicking-plugins/dist/pagination.css";

const props = defineProps({
    options: Object,
    pagination: {
        type: Object,
        default: null
    },
    arrow: {
        type: Object,
        default: null
    },
    autoplay: {
        type: Object,
        default: null
    }
})

const options = ref(props.options);
// получаем ширину экрана
const ready = (e) => {
    console.log(e)
    const width = window.innerWidth;
    adaptiveSlide({ width })
}

const adaptiveSlide = (e) => {
    if (!options.value.isAdaptive)
        return
    // console.log(e.width)

    if (e.width <= 576) {
        // console.log('mobile')
        options.value.panelsPerView = 2
    }
    if (e.width <= 768 && e.width > 576) {
        // console.log('tablet')
        options.value.panelsPerView = 3
    }
    if (e.width <= 1024 && e.width > 768) {
        // console.log('laptop')
        options.value.panelsPerView = 4
    }
    if (e.width > 1024) {
        // console.log('desktop')
        options.value.panelsPerView = 5
    }
}


const plugins = ref([])

if (props.pagination) {
    plugins.value.push(new Pagination(props.pagination))
}

if (props.arrow) {
    plugins.value.push(new Arrow(props.arrow))
}

if (props.autoplay) {
    console.log(props.autoplay)
    plugins.value.push(new AutoPlay(props.autoplay))
}
else {
    console.log(props.autoplay)
    plugins.value.push(new AutoPlay({ duration: 8000 }))
}


</script>