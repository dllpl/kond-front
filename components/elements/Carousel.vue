<template>
    <Flicking :options="options" :plugins="plugins" :arrow="arrow">
        <slot></slot>
        <template #viewport>
            <slot name="pagination">
            </slot>
        </template>

    </Flicking>

</template>

<script setup>
import Flicking from "@egjs/vue3-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import { Arrow } from "@egjs/flicking-plugins";

import '@egjs/vue3-flicking/dist/flicking.css';
import "@egjs/flicking-plugins/dist/pagination.css";
// import "@egjs/flicking-plugins/dist/arrow.css";

const props = defineProps({
    options: Object,
    pagination: Object,
    arrow: Object,
})

const plugins = [new Pagination(props.pagination)]
const arrow = [new Arrow()]


</script>