<script setup>
const props = defineProps({
  products: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: ''
  }
})

const popupStore = usePopupStore();

const totalSum = computed(() => {
  return props.products.reduce((sum, item) => sum + item.total_price, 0);
})

</script>

<template>
  <div>
    <div class="text-lg font-semibold mb-1" v-if="title.length">{{ title }}</div>
    <div class="max-h-80 overflow-y-auto border border-gray-200 rounded-lg mt-10">
      <table class="min-w-full divide-y divide-gray-300 border-collapse pr-1">
        <thead class="bg-amber-300 sticky top-0 z-10">
        <tr>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Товар
          </th>
          <th scope="col" class="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Кол-во
          </th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Сумма
          </th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
        <tr v-for="item in products" :key="item.id" v-if="products.length"
            class="hover:bg-amber-100 transition cursor-pointer"
            @click="navigateTo('/catalog/' + item.product.slug_path, {open: true}); popupStore.close('modal')">
          <td class="px-3 py-4 text-sm text-gray-500">{{ item.product.title }}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.count }}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ formatNumber(item.total_price) }}</td>
        </tr>
        <tr v-else>
          <td colspan="3" class="text-center text-gray-500 py-4">
            Нет товаров в заказе
          </td>
        </tr>
        </tbody>
        <tfoot class="bg-gray-100">
        <tr>
          <td colspan="2" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
            Итого:
          </td>
          <td class="whitespace-nowrap px-3 py-3.5 text-sm font-semibold text-gray-900">
            {{ formatNumber(totalSum) }}
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>