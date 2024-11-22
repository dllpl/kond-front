<template>
	<div class="">
		<section>
			<ElementsBreadcrumb class="wrapper-container py-4" :data="breadcrumbs" />
		</section>
		<main class="wrapper-container pt-3 pb-16">
			<div class="relative pt-36 pb-14 px-20 rounded-2xl mb-20">
				<div class="w-2/3 text-white font-semibold">
					<h1 class="text-4xl font-semibold mb-4">{{ post.data.title }}</h1>
					<p>
						{{ post.data.excerpt }}
					</p>
				</div>
				<img :src="storage + post.data.image_large" :alt="post.data.title"
					class="absolute inset-0 -z-10 h-full w-full object-cover rounded-2xl" />
				<div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 rounded-2xl" />
				<div class="absolute inset-0 -z-10 " />
			</div>
			<div class="px-20">
				<div class="mb-10">
					<h2 class="text-2xl mb-4">Ингредиенты</h2>
					<ul class="list-disc list-inside">
						<li>Какао-масло — 100 г</li>
						<li>Какао-порошок — 3-4 ст. ложки</li>
						<li>Мед или кленовый сироп — 2-3 ст. ложки (по вкусу)</li>
						<li>Ванильный экстракт — 1 ч. ложка (по желанию)</li>
						<li>Щепотка морской соли</li>
					</ul>
				</div>

				<div class="post-content mb-10" v-html="post.data.text">
				</div>
			</div>

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
		href: 'blog',
	},
	{
		name: post.value.data.title,
		href: 'blog/' + useRoute().params.slug,
	}
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