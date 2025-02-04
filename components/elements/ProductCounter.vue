<script setup>
const cartStore = useCartStore();
const { products } = storeToRefs(cartStore);

const popupStore = usePopupStore();


const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
    context: {
        type: String,
        default: 'base', // По умолчанию используется стиль для товара
    },
})

function showAlert() {
    alert('Будет модалка с сообщением - Уведомим как только появится в наличии');
}

// Динамические классы для кнопок
const buttonClass = computed(() => {
    return props.context === 'small' ? 'px-2 py-2' : 'px-2.5 py-2';
});

// Динамические классы для иконок
const iconClass = computed(() => {
    return props.context === 'small' ? 'w-3 h-3' : 'w-5 h-5';
});
// Динамические классы для числа
const numberClass = computed(() => {
    return props.context === 'small' ? 'text-sm mx-4' : 'text-lg';
});
</script>


<template>
    <div class="flex items-center">
        <template v-if="item.count">
            <button v-if="!cartStore.issetInCart(item.id)"
                @click="cartStore.increment(item); popupStore.toggle('toast', {title: 'Товар добавлен в корзину', subtitle: 'Перейти в корзину', callback: () => popupStore.toggle('drawer')})"
                class="flex items-center gap-x-2 w-full justify-center rounded-lg ring-2 ring-amber-400 bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base ">
                <Icon name="material-symbols:shopping-cart-outline" class="w-5 h-5 " />
                В корзину
            </button>

            <!-- Счетчик и кнопки управления -->
            <div v-if="cartStore.issetInCart(item.id)"
                class="flex items-center justify-between w-full bg-amber-100 p-0.5 rounded-lg">

                <button @click="cartStore.decrement(item)"
                    class="flex items-center rounded-lg bg-amber-400 hover:bg-amber-300 transition-base"
                    :class="buttonClass">
                    <Icon name="ic:round-minus" class="shrink-0" :class="iconClass" />
                </button>

                <span class="tabular-nums" :class="numberClass">{{ cartStore.getCountProductInCart(item.id) }}</span>

                <button :disabled="cartStore.getCountProductInCart(item.id) >= item.count"
                    @click="cartStore.increment(item)"
                    class="flex items-center rounded-lg bg-amber-400 hover:bg-amber-300 transition-base "
                    :class="buttonClass">
                    <Icon name="ic:round-plus" class="shrink-0" :class="iconClass" />
                </button>
            </div>

        </template>

        <!-- Уведомить о наличии -->
        <button v-else type="button" @click="showAlert"
            class="flex items-center gap-x-2 w-full justify-center rounded-lg px-2.5 py-2 transition-base ring-2 ring-gray-900/20 bg-gray-900 text-white hover:text-white hover:ring-red-500 hover:bg-red-500 group focus:rounded-md focus:ring-red-500 focus:text-white">

            <Icon name="material-symbols:notifications-active-rounded"
                class="w-6 h-6 group-hover:text-white text-red-500 transition-base">
            </Icon>
            Уведомить
        </button>
    </div>
</template>
