import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ProductCard from '../ProductCard'
import { ShopCartProvider } from '../../contexts/ShopCartContext'
import Product from '../../@types/Product'
import CartDrawer from '../CartDrawer'

test('CartDrawer show the checkout correctly', () => {
	const product1: Product = {
		id: 1,
		name: 'Product 1',
		score: 100,
		price: 19.5,
		image: 'images/product-1.png',
	}

	const product2: Product = {
		id: 2,
		name: 'Product 2',
		score: 195,
		price: 240,
		image: 'images/product-1.png',
	}

	const product3: Product = {
		id: 3,
		name: 'Product 3',
		score: 195,
		price: 30,
		image: 'images/product-1.png',
	}

	render(
		<ShopCartProvider>
			<ProductCard product={product1} />
			<ProductCard product={product2} />
			<ProductCard product={product3} />
			<CartDrawer />
		</ShopCartProvider>
	)

	const addToCartBtn = screen.getByTestId(product1.name)
	const addToCartBtn2 = screen.getByTestId(product2.name)
	const addToCartBtn3 = screen.getByTestId(product3.name)

	fireEvent.click(addToCartBtn)
	fireEvent.click(addToCartBtn3)

	// test if sums shipping + subtotal correctly
	const subtotal = screen.getByTestId('subtotal')
	expect(subtotal.innerHTML).toEqual('R$&nbsp;49,50')

	const shipping = screen.getByTestId('shipping-cost')
	expect(shipping.innerHTML).toEqual('R$&nbsp;20,00')

	const total = screen.getByTestId('total')
	expect(total.innerHTML).toEqual('R$&nbsp;69,50')

	// test if sums subtotal with free shipping correctly
	fireEvent.click(addToCartBtn2)

	expect(subtotal.innerHTML).toEqual('R$&nbsp;289,50')

	expect(shipping.innerHTML).toEqual('R$&nbsp;0,00')

	expect(total.innerHTML).toEqual('R$&nbsp;289,50')
})
