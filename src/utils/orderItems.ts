import CartItem from '../@types/CartItem'
import Product from '../@types/Product'

export default function orderItems(
	items: CartItem[] | Product[],
	order: string
) {
	switch (order) {
		case 'name_asc':
			items.sort((a, b) => a.name.localeCompare(b.name))
			break
		case 'name_desc':
			items.sort((a, b) => b.name.localeCompare(a.name))
			break
		case 'price_low':
			items.sort((a, b) => (a.price > b.price ? 1 : -1))
			break
		case 'price_high':
			items.sort((a, b) => (a.price < b.price ? 1 : -1))
			break
		case 'score_low':
			items.sort((a, b) => (a.score > b.score ? 1 : -1))
			break
		case 'score_high':
			items.sort((a, b) => (a.score < b.score ? 1 : -1))
			break
	}
}
