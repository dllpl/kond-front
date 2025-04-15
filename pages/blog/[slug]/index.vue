<template>
	<div>
		<section>
			<ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
		</section>
		<main class="wrapper-container pt-3 pb-16">
			<div class="text-white relative min-h-96 py-12 px-12 flex flex-col justify-center gap-5 mb-20
                md:py-10 md:px-8 md:min-h-80 
                sm:min-h-72 
                xs:min-h-80 xs:py-4 xs:px-4 xs:mb-10">
				<h1 class="text-4xl font-semibold 2xl:text-3xl xs:text-2xl xs:drop-shadow-md">{{ post.data.title }}</h1>

				<p class="text-lg max-w-4xl xs:drop-shadow-md ">
					{{ post.data.excerpt }}
				</p>

				<img :src="storage + post.data.image_large" :alt="post.data.title"
					class="absolute inset-0 object-cover object-right h-full w-full -z-10 rounded-2xl" />

				<span class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 rounded-2xl"></span>
			</div>

			<div class="px-20 md:px-0">
				<div class="post-content mb-10" v-html="post.data.text">
				</div>
			</div>
			<ElementsSliderProduct v-if="post.data.products.length" :data="post.data.products" title="Товары из рецепта"
				class="col-span-2 lg:grid-cols-1 relative" />

		</main>
	</div>
</template>


<script setup>
import HttpClient from "~/server/utils/httpClient.js";

const { public: config } = useRuntimeConfig();
const { storage } = useRuntimeConfig().public.backOptions;
const { data: post } = await HttpClient('blog/' + useRoute().params.slug);

if(!post.value) {
    navigateTo('/blog', { replace: true, redirectCode: 301 })
}

const breadcrumbs = [
	{
		name: 'Блог',
		uri: 'blog',
	},
	...post.value.breadcrumbs
]

let current_title = post.value.breadcrumbs[post.value.breadcrumbs.length - 1].name
let current_description = post.value.data.is_recipe ? current_title + ' - Ингредиенты, способ приготовления и товары для приготовления. Подробнее читайте на странице.' : current_title + '. Новости и статьи интернет-магазина Всё для кондитера. Подробнее читайте на странице.'


useHead({
	title: current_title,
	meta: [
		{
			name: 'description',
			content: current_description
		}
	],
})



</script>

<style lang="scss">
.post-content {

	// h2 {
	// 	font-size: 1.5rem;
	// }

	// h3 {
	// 	font-size: 1.2rem;
	// }

	// p {
	// 	margin: 5px 0;
	// }
	h2 {
		display: block;
		font-size: 1.5em;
		margin-block-start: 0.83em;
		margin-block-end: 0.83em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		font-weight: bold;
		unicode-bidi: isolate;
	}

	h3 {
		display: block;
		font-size: 1.17em;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		font-weight: bold;
		unicode-bidi: isolate;
	}

	p {
		display: block;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		unicode-bidi: isolate;
	}

}
</style>