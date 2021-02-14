import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CartItemCard from '../CartItemCard'
import { ShopCartProvider } from '../../contexts/ShopCartContext'
import CartItem from '../../@types/CartItem'

test('CartItemCard renders correctly', () => {
	const product: CartItem = {
		id: 1,
		name: 'Product 1',
		score: 100,
		price: 19.5,
		image: 'images/product-1.png',
		count: 1,
	}

	render(
		<ShopCartProvider>
			<CartItemCard cartItem={product} />
		</ShopCartProvider>
	)

	const productName = screen.getByText(product.name)
	expect(productName).toBeInTheDocument()

	const productPrice = screen.getByText('R$ 19,50')
	expect(productPrice).toBeInTheDocument()

	const removeToCartBtn = screen.getByRole('button')
	expect(removeToCartBtn).toHaveClass('bg-red-500')

	fireEvent.click(removeToCartBtn)
})
