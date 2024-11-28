<template>
	<div class="bg-white p-5 rounded-lg">

		<h2 class="sr-only">Products</h2>
		<div class=" grid grid-cols-6 border-l border-gray-200 mx-0 xl:grid-cols-4 lg:grid-cols-3">

			<SectionProductCard v-for="product in data" :key="product.id" :product="product"
				class="border-b border-r border-gray-200" />
		</div>

	</div>
</template>

<script setup>

// // Состояние, чтобы узнать, добавлен ли товар в корзину
// const inCart = ref(false);

// // Добавить товар в корзину
// const addToCart = () => {
//     inCart.value = true;
//     quantity.value = 1;
// };

// const products = [
// 	{
// 		id: 1,
// 		name: 'Organize Basic Set (Walnut)',
// 		price: '149 руб.',
// 		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
// 		imageAlt: 'TODO',
// 		href: '#',
// 		inCart: true
// 	},
// 	{
// 		id: 2,
// 		name: 'Organize Pen Holder',
// 		price: '1150 руб.',
// 		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
// 		imageAlt: 'TODO',
// 		href: '#',
// 	},
// 	{
// 		id: 3,
// 		name: 'Organize Sticky Note Holder',
// 		price: '15 руб.',
// 		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
// 		imageAlt: 'TODO',
// 		href: '#',
// 	},
// 	{
// 		id: 4,
// 		name: 'Organize Phone Holder',
// 		price: '785 руб.',
// 		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
// 		imageAlt: 'TODO',
// 		href: '#',
// 	},
// 	{
// 		id: 5,
// 		name: 'Organize Basic Set (Walnut)',
// 		price: '963 руб.',
// 		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
// 		imageAlt: 'TODO',
// 		href: '#',
// 	},
// 	{
// 		id: 6,
// 		name: 'Organize Pen Holder',
// 		price: '2100 руб.',
// 		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
// 		imageAlt: 'TODO',
// 		href: '#',
// 	},
// 	{
// 		id: 7,
// 		name: 'Organize Sticky Note Holder',
// 		price: '433 руб.',
// 		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
// 		imageAlt: 'TODO',
// 		href: '#',
// 	},
// 	{
// 		id: 8,
// 		name: 'Organize Phone Holder',
// 		price: '15 руб.',
// 		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
// 		imageAlt: 'TODO',
// 		href: '#',
// 	},
// 	{
// 		id: 9,
// 		name: 'Organize Basic Set (Walnut)',
// 		price: '1200 руб.',
// 		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
// 		imageAlt: 'TODO',
// 		href: '#',
// 	},
// 	{
// 		id: 10,
// 		name: 'Organize Pen Holder',
// 		price: '1150 руб.',
// 		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
// 		imageAlt: 'TODO',
// 		href: '#',
// 	},
// 	{
// 		id: 11,
// 		name: 'Organize Sticky Note Holder',
// 		price: '15 руб.',
// 		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
// 		imageAlt: 'TODO',
// 		href: '#',
// 	},
// 	{
// 		id: 12,
// 		name: 'Organize Phone Holder',
// 		price: '785 руб.',
// 		imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
// 		imageAlt: 'TODO',
// 		href: '#',
// 	},
// 	// More products...
// ]
// console.log(products)

const props = defineProps({
	data: {
		type: Array,
	}
})

// console.log(props.data)

</script>