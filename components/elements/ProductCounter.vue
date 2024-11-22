<template>
    <div class="flex items-center">

        <button v-if="!inCart" @click="addToCart"
            class="flex items-center gap-x-2 w-full justify-center rounded-lg bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base ">
            <Icon name="material-symbols:shopping-cart-outline" class="w-5 h-5 ">
            </Icon>
            В корзину
        </button>

        <!-- Счетчик и кнопки управления -->
        <div v-if="inCart" class="flex items-center justify-between w-full bg-amber-100 p-0.5 rounded-lg">
            <button @click="decreaseQuantity"
                class="flex items-center  rounded-lg bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base">
                <Icon name="ic:round-minus" class="w-5 h-5 shrink-0">
                </Icon>
            </button>

            <span class="text-lg">{{ quantity }}</span>

            <button @click="increaseQuantity"
                class="flex items-center rounded-lg bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base">
                <Icon name="ic:round-plus" class="w-5 h-5 ">
                </Icon>
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    inCart: {
        type: Boolean,
        default: false
    }
})

// Состояние для количества товара в корзине
const quantity = ref(1);

// Состояние, чтобы узнать, добавлен ли товар в корзину
const inCart = ref(props.inCart);

// // Добавить товар в корзину
const addToCart = () => {
    inCart.value = true;
    quantity.value = 1;
};

// Увеличить количество товара
const increaseQuantity = () => {
    quantity.value++;
};

// Уменьшить количество товара
const decreaseQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    } else {
        removeFromCart();
    }
};

// Удалить товар из корзины
const removeFromCart = () => {
    inCart.value = false;
    quantity.value = 1;
};
</script>