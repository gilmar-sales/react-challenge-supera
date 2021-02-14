import React from 'react'
import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react'
import Home from '../Home'
import { ShopCartProvider } from '../../contexts/ShopCartContext'

test('fetch and render products', async () => {
	//mock fetch to Home Page
	global.fetch = jest.fn(() =>
		Promise.resolve({
			json: () =>
				Promise.resolve([{ id: 1, name: 'Product 1', price: 200, score: 300 }]),
		} as Response)
	)

	render(
		<ShopCartProvider>
			<Home />
		</ShopCartProvider>
	)

	// wait to all loading cards be removed to find button inside product card
	await waitForElementToBeRemoved(() => screen.getAllByTestId('loading_card'))

	const products = screen.getByRole('button')
	expect(products).toBeInTheDocument()
})
