<template>
	<div class="">
		<section class="flex items-center wrapper-container">
			<ElementsMobileCatalogPopover />
		</section>
		<section>
			<ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
		</section>


		<!-- text-white relative min-h-96 py-12 px-12 flex flex-col justify-center gap-5 mb-20 md:py-10 md:px-8 md:min-h-80 sm:min-h-72 xs:min-h-80 xs:py-4 xs:px-4 xs:mb-10 -->
		<main class="wrapper-container pt-3 pb-16">

			<div class="text-white relative min-h-96 py-12 px-12 flex flex-col justify-center gap-5 mb-20
                md:py-10 md:px-8 md:min-h-80 
                sm:min-h-72 
                xs:min-h-80 xs:py-4 xs:px-4 xs:mb-10">
				<h1 class="text-4xl font-semibold 2xl:text-3xl xs:text-2xl xs:drop-shadow-md">{{ post.data.title }}</h1>

				<p class="text-lg max-w-4xl xs:drop-shadow-md ">
					{{ post.data.excerpt }}
				</p>

				<!-- <picture class="absolute inset-0 -z-20">
                    <source srcset="/assets/img/delivery-1440.jpg" media="(max-width: 1440px)">
                    <img class="absolute inset-0 object-cover object-right h-full w-full -z-10 rounded-2xl"
                        src="/assets/img/delivery-1920.jpg" alt="">
                </picture> -->

				<img :src="storage + post.data.image_large" :alt="post.data.title"
					class="absolute inset-0 object-cover object-right h-full w-full -z-10 rounded-2xl" />

				<span class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 rounded-2xl"></span>
			</div>

			<div class="px-20 md:px-0">
				<!-- <div class="mb-10">
					<h2 class="text-2xl mb-4">Ингредиенты</h2>
					<ul class="list-disc list-inside">
						<li>Какао-масло — 100 г</li>
						<li>Какао-порошок — 3-4 ст. ложки</li>
						<li>Мед или кленовый сироп — 2-3 ст. ложки (по вкусу)</li>
						<li>Ванильный экстракт — 1 ч. ложка (по желанию)</li>
						<li>Щепотка морской соли</li>
					</ul>
				</div> -->

				<div class="post-content mb-10" v-html="post.data.text">
				</div>
			</div>
			<ElementsSliderProduct v-if="post.data.products.length" :data="post.data.products" title="Товары из рецепта"
				class="col-span-2 lg:grid-cols-1  relative" />

		</main>
	</div>
</template>


<script setup>
const { public: config } = useRuntimeConfig();
const { storage } = useRuntimeConfig().public.backOptions;
const { data: post } = await useFetch(config.backOptions.api + '/blog/' + useRoute().params.slug);

const breadcrumbs = [
	{
		name: 'Блог',
		uri: 'blog',
	},
	...post.value.breadcrumbs
]
</script>

<style lang="scss">
.post-content {

	h2 {
		font-size: 1.5rem;
	}

	h3 {
		font-size: 1.2 rem;
	}

	p {
		margin: 5px 0;
	}

}
</style>