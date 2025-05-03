<script setup>
import HttpClient from "~/server/utils/httpClient.js";

const route = useRoute()
const router = useRouter()

const find = ref(route.query.find || '')
const products = ref([])
const categories = ref([])
const page = ref(1)
const loading = ref(false)
const hasMore = ref(true)
const isMounted = ref(false)

let title = 'Поиск товара'

// Загрузка товаров
const loadProducts = async (query, reset = false) => {
  if (loading.value || (!hasMore.value && !reset)) return
  loading.value = true

  if (reset) {
    products.value = []
    categories.value = []
    page.value = 1
    hasMore.value = true
  }

  const response = await HttpClient('products/search', 'POST', {
    query: query.trim(),
    limit: 25,
    page: page.value,
    with_category: true
  })

  const result = response?.data?.value

  if (!result || !Array.isArray(result.data)) {
    hasMore.value = false
    loading.value = false
    return
  }

  products.value.push(...result.data)
  categories.value = result.category || []
  page.value++

  hasMore.value = !!result.meta?.next_page_url
  loading.value = false
}

if (find.value.length) {
  await loadProducts(find.value)
}

// Следить за изменением запроса поиска
watch(find, async (newVal, oldVal) => {
  if (newVal && newVal !== oldVal && isMounted.value) {
    await loadProducts(newVal, true)
    updateQueryParam(newVal)
  }
})

// Обновить query-параметр без перезагрузки
const updateQueryParam = (val) => {
  router.replace({query: {...route.query, find: val}})
}

const breadcrumbs = [
  {
    name: "Страница поиска",
    slug: '/search',
  }
]

useHead({
  title: `Результаты поиска "${find.value}"`,
  meta: [
    {
      name: 'description',
      content: 'Найти товары и ингредиенты для кондитеров. Поиск по названию товара или каталогу. Узнать цены на товары для кондитера.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://dljakonditera.ru",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://dljakonditera.ru/search?find={query}",
          "query-input": "required name=query"
        }
      })
    }
  ]
})


// Скролл-подгрузка
const handleScroll = async () => {
  const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000
  if (scrollBottom && hasMore.value && !loading.value && find.value.length) {
    await loadProducts(find.value)
  }
}

onMounted(async () => {
  isMounted.value = true
  if (find.value) {
    await loadProducts(find.value)
  }
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Отправка формы
const submitSearch = async () => {
  if (!find.value) return
  await loadProducts(find.value, true)
}

</script>


<template>
  <div>
    <section>
      <ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs"/>
    </section>
    <main class="wrapper-container pt-3 pb-16">
      <h1 class="text-3xl font-bold tracking-tight mb-4 xs:text-2xl">Поиск товаров или каталога</h1>
      <form @submit.prevent="submitSearch" class="mb-10">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Icon name="hugeicons:search-01" class="w-5 h-5 text-gray-500 dark:text-gray-400"/>
          </div>
          <input :autofocus="!find.length" v-model="find" type="search" id="search"
                 class="block  w-full p-4 ps-10 rounded-md bg-inherit ring-2 ring-gray-300 focus:ring-amber-500 focus:border-blue-500 placeholder-gray-400"
                 placeholder="Поиск" required/>
          <button type="submit"
                  class="absolute end-2.5 bottom-2 items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-base hover:bg-red-500 focus-visible:bg-red-500">
            Найти
          </button>
        </div>
      </form>


      <template v-if="categories.length || products.length">
        <template v-if="categories.length">
          <h2 class="text-3xl font-bold tracking-tight mb-4 xs:text-2xl">Каталог по запросу "{{ find }}"</h2>
          <SectionCatalogList :data="categories" :class="products.length === 0 ? 'mb-0' : 'mb-20'" from_search/>
        </template>


        <template v-if="products.length">
          <h2 class="text-3xl font-bold tracking-tight mb-4 xs:text-2xl">Товары по запросу "{{ find }}"</h2>
          <LazySectionProductList :data="products"/>
        </template>

      </template>

      <template v-else>
        <h2 v-if="find.length" class="text-3xl font-bold tracking-tight mb-4 xs:text-2xl">Ничего не нашлось по запросу "{{ find }}"</h2>
        <h2 v-else class="text-2xl tracking-tight mb-4 xs:text-xl">Найти товар по его названию или названию категории</h2>
      </template>

      <div v-if="loading" class="flex justify-center my-10">
        <svg class="animate-spin h-8 w-8 text-amber-300" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z">
          </path>
        </svg>
      </div>
    </main>
  </div>
</template>
