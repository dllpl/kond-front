<script setup>
const { public: config } = useRuntimeConfig();
</script>

<template>
  <div class="mt-6 grid grid-cols-2 gap-4 xs:grid-cols-1">
    <NuxtLink external :to="`${config.backOptions.api}/auth/yandex`"
       class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent transition-all">
      <Icon name="vscode-icons:file-type-yandex" class="w-6 h-6" />
      <span class="text-sm font-semibold ">Яндекс</span>
    </NuxtLink>

    <NuxtLink external :to="`${config.backOptions.api}/auth/vk`"
       class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent transition-all">
      <Icon name="bxl:vk" class="w-6 h-6 text-[#07F]" />
      <span class="text-sm font-semibold ">ВКонтакте</span>
    </NuxtLink>
  </div>
</template>