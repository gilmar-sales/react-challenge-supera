import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ProductCard from '../ProductCard'
import { ShopCartProvider } from '../../contexts/ShopCartContext'
import Product from '../../@types/Product'

test('ProductCard renders correctly', () => {
	const product: Product = {
		id: 1,
		name: 'Product 1',
		score: 100,
		price: 19.5,
		image: 'images/product-1.png',
	}

	render(
		<ShopCartProvider>
			<ProductCard product={product} />
		</ShopCartProvider>
	)

	const productName = screen.getByText(product.name)
	expect(productName).toBeInTheDocument()

	const productPrice = screen.getByText('R$ 19,50')
	expect(productPrice).toBeInTheDocument()

	const productScore = screen.getByText(`Score: ${product.score}`)
	expect(productScore).toBeInTheDocument()

	const addToCartBtn = screen.getByRole('button')
	expect(addToCartBtn).toBeInTheDocument()
	fireEvent.click(addToCartBtn)

	const removeToCartBtn = screen.getByRole('button')
	expect(removeToCartBtn).toHaveClass('bg-red-500')
})
