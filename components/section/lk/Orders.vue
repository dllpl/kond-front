<template>
    <div class="">
        <!-- <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
                <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name,
                    title, email and role.</p>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button type="button"
                    class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
                    user</button>
            </div>
        </div> -->
        <div class="mt-6 flow-root">
            <div class="overflow-x-auto">
                <div class="inline-block min-w-full align-middle py-1 px-1 ">
                    <div class="overflow-hidden  ring-1 ring-black shadow ring-opacity-5 rounded-lg
                    ">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-amber-300">
                                <tr>
                                    <th scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Дата
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        №&nbsp;заказа
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Сумма
                                    </th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="order in orders" :key="order.index" v-if="orders.length">
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900
                                        sm:pl-6
                                        ">
                                        {{ order.date }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">№&nbsp;{{
                                        order.orderId }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ order.price
                                        }}&nbsp;₽
                                    </td>

                                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium
                                        sm:pr-6">
                                        <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                            Подробнее
                                            <span class="sr-only">, {{ orders.name }}</span>
                                        </a>
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
    </div>
</template>
<script setup>
defineProps({
    orders: {
        type: Array,
        default: [],
    }
})
</script>