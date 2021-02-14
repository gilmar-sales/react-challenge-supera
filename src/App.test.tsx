import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { ShopCartProvider } from './contexts/ShopCartContext'

test('it renders without errors', () => {
	render(
		<ShopCartProvider>
			<App />
		</ShopCartProvider>
	)
})
