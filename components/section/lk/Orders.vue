<template>
      <div class="mt-6 flow-root">
          <div class="overflow-x-auto">
              <div class="inline-block min-w-full align-middle py-1 px-1 ">
                  <div class="overflow-hidden  ring-1 ring-black shadow ring-opacity-5 rounded-lg
                  ">
                      <table class="min-w-full divide-y divide-gray-300">
                          <thead class="bg-amber-300">
                          <tr>
                              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                  Заказ
                              </th>
                              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Статус
                              </th>
                              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                  Сумма
                              </th>
                              <th scope="col"
                                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                  Дата
                              </th>
                          </tr>
                          </thead>
                          <tbody class="divide-y divide-gray-200 bg-white">
                          <tr v-for="order in orders" :key="order.id" v-if="orders.length" @click="profileStore.goToOrder(order.id, order.order_number)" class="hover:cursor-pointer hover:bg-amber-100 transition">
                              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ order.order_number }}</td>
                              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" v-if="order.payment_status.id === 1">
                                  {{ order.payment_status.name }}
                                </span>
                                <span v-else class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-red-800">
                                  {{ order.payment_status.name }}
                                </span>

                              </td>
                              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ formatNumber(order.total_price) }}</td>
                              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900
                                      sm:pl-6
                                      ">
                                  {{ order.created_at }}
                              </td>
                          </tr>
                          <tr v-else>
                              <td colspan="4" class="text-center text-gray-500">
                                  Заказов нет
                              </td>
                          </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
</template>
<script setup>
const profileStore = useProfileStore();

defineProps({
    orders: {
        type: Array,
        default: [],
    }
})
</script>