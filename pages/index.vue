<template>
	<main class="wrapper-container py-16">
		<div class="grid grid-cols-custom gap-8 lg:grid-cols-1 lg:gap-0">

			<div class="col-span-1 lg:hidden">
				<ElementsMenuDropDown :data="categories.data" />
			</div>

			<div class="col-span-1 mb-20">
				<div class="mb-20">
					<ElementsSliderBanner :data="banners.data" />
				</div>
				<SectionAdvantages />
			</div>

			<ElementsSliderProduct class="col-span-2 lg:grid-cols-1 mb-20 relative" :data="productsOffers.data"
				title="Спецпредложения" />
			<SectionProductTop class="col-span-2 lg:grid-cols-1 mb-20" />
			<SectionPromoPrice class="col-span-2 lg:grid-cols-1 mb-20" />
			<ElementsSliderProduct class="col-span-2 lg:grid-cols-1 mb-20 relative" :data="productsNew.data"
				title="Новинки" />
			<SectionFollowSocial class="col-span-2 lg:grid-cols-1 mb-20" />
			<SectionPromoCook class="col-span-2 lg:grid-cols-1 " />
		</div>

	</main>
</template>

<script setup>


const { public: config } = useRuntimeConfig();
const { data: banners } = await useFetch(config.backOptions.api + '/banners');
const { data: categories } = await useFetch(config.backOptions.api + '/products-categories');
const { data: productsNew } = await useFetch(config.backOptions.api + '/products/new');
const { data: productsOffers } = await useFetch(config.backOptions.api + '/products/spec');

</script>