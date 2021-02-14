import Product from '../../@types/Product'
import orderItems from '../orderItems'

/**
 * TODO: use jest-sorted when release for typescript
 */

test('it sort the products correctly', () => {
	let products: Product[] = [
		{
			id: 2,
			name: 'Product 3',
			score: 300,
			price: 150,
			image: 'images/product-3.png',
		},
		{
			id: 1,
			name: 'Product 1',
			score: 100,
			price: 19.5,
			image: 'images/product-1.png',
		},
		{
			id: 2,
			name: 'Product 2',
			score: 200,
			price: 60.5,
			image: 'images/product-2.png',
		},
	]

	/**
	 * isnt't necessary test sorting by name since it's using String.localeCompare
	 */

	orderItems(products, 'price_low')
	expect(products[0].price).toBe(19.5)
	expect(products[1].price).toBe(60.5)
	expect(products[2].price).toBe(150)

	orderItems(products, 'price_high')
	expect(products[0].price).toBe(150)
	expect(products[1].price).toBe(60.5)
	expect(products[2].price).toBe(19.5)

	orderItems(products, 'score_low')
	expect(products[0].score).toBe(100)
	expect(products[1].score).toBe(200)
	expect(products[2].score).toBe(300)

	orderItems(products, 'score_high')
	expect(products[0].score).toBe(300)
	expect(products[1].score).toBe(200)
	expect(products[2].score).toBe(100)
})
