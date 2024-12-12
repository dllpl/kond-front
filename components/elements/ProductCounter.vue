<script setup>
const cartStore = useCartStore();
const { products } = storeToRefs(cartStore);

// console.log(products)

const props = defineProps({
    // inCart: {
    //     type: Boolean,
    //     default: false
    // },
    // count: {
    //     type: Number,
    // },
    item: {
        type: Object,
        required: true,
    }
})

// Состояние для количества товара в корзине
// const quantity = ref();

// Состояние, чтобы узнать, добавлен ли товар в корзину
//const inCart = ref(props.inCart);

// Увеличить количество товара
// const increaseQuantity = () => {
//     quantity.value++;
// };

// Уменьшить количество товара
// const decreaseQuantity = () => {
//     if (quantity.value > 1) {
//         quantity.value--;
//     } else {
//         removeFromCart();
//     }
// };

// // Удалить товар из корзины
// const removeFromCart = () => {
//     inCart.value = false;
//     quantity.value = 1;
// };

function showAlert() {
    alert('Будет модалка с сообщением - Уведомим как только появится в наличии');
}
</script>



<template>
    <div class="flex items-center">

        <template v-if="item.count">
            <button v-if="!item.inCart" @click="cartStore.increment(item)"
                class="flex items-center gap-x-2 w-full justify-center rounded-lg ring-2 ring-amber-400 bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base ">
                <Icon name="material-symbols:shopping-cart-outline" class="w-5 h-5 ">
                </Icon>
                В корзину
            </button>

            <!-- Счетчик и кнопки управления -->
            <div v-if="item.inCart" class="flex items-center justify-between w-full bg-amber-100 p-0.5 rounded-lg">
                <button @click="cartStore.increment(item)"
                    class="flex items-center  rounded-lg bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base">
                    <Icon name="ic:round-minus" class="w-5 h-5 shrink-0">
                    </Icon>
                </button>

                <span class="text-lg">{{ item.inCard }}</span>

                <button @click="cartStore.decrement(item)"
                    class="flex items-center rounded-lg bg-amber-400 px-2.5 py-2 hover:bg-amber-300 transition-base">
                    <Icon name="ic:round-plus" class="w-5 h-5 ">
                    </Icon>
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
