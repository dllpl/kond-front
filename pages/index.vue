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

			<ElementsSliderOffers class="col-span-2 lg:grid-cols-1 mb-20" :data="specialOffers" />
			<SectionProductTop class="col-span-2 lg:grid-cols-1 mb-20" />
			<SectionPromoPrice class="col-span-2 lg:grid-cols-1 mb-20" />
			<ElementsSliderNew class="col-span-2 lg:grid-cols-1 mb-20" :data="productNews" />
			<SectionFollowSocial class="col-span-2 lg:grid-cols-1 mb-20" />
			<SectionPromoCook class="col-span-2 lg:grid-cols-1 " />
		</div>

	</main>
</template>

<script setup>


const { public: config } = useRuntimeConfig();
const { data: banners } = await useFetch(config.backOptions.api + '/banners');
const { data: categories } = await useFetch(config.backOptions.api + '/products-categories');


const productNews = [
	{
		id: 1,
		title: 'Organize Basic Set (Walnut)',
		price: '149 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
		imageAlt: 'TODO',
		slug: '#',
		inCart: true
	},
	{
		id: 2,
		title: 'Масло сливочное Деревенская Буренка БЗМЖ 82,5% 500гр',
		price: '1150 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 3,
		title: 'Organize Sticky Note Holder',
		price: '15 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 4,
		title: 'Organize Phone Holder',
		price: '785 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 5,
		title: 'Organize Basic Set (Walnut)',
		price: '963 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 6,
		title: 'Organize Pen Holder',
		price: '2100 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 7,
		title: 'Organize Sticky Note Holder',
		price: '15 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 8,
		title: 'Organize Phone Holder',
		price: '785 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 9,
		title: 'Organize Basic Set (Walnut)',
		price: '963 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 10,
		title: 'Organize Pen Holder',
		price: '2100 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
]
const specialOffers = [
	{
		id: 1,
		title: 'Organize Basic Set (Walnut)',
		price: '149 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
		imageAlt: 'TODO',
		slug: '#',
		inCart: true
	},
	{
		id: 2,
		title: 'Масло сливочное Деревенская Буренка БЗМЖ 82,5% 500гр',
		price: '1150 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 3,
		title: 'Organize Sticky Note Holder',
		price: '15 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 4,
		title: 'Organize Phone Holder',
		price: '785 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 5,
		title: 'Organize Basic Set (Walnut)',
		price: '963 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 6,
		title: 'Organize Pen Holder',
		price: '2100 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 7,
		title: 'Organize Basic Set (Walnut)',
		price: '963 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 8,
		title: 'Organize Pen Holder',
		price: '2100 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 9,
		title: 'Organize Basic Set (Walnut)',
		price: '963 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
	{
		id: 10,
		title: 'Organize Pen Holder',
		price: '2100 руб.',
		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
		imageAlt: 'TODO',
		slug: '#',
	},
]

</script>