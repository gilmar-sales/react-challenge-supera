import React, { createContext, useEffect, useState } from 'react'

import usePersistedState from '../utils/usePersistedState'

import Product from '../@types/Product'
import CartItem from '../@types/CartItem'

interface ContextProps {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	items: CartItem[]
	setItems: React.Dispatch<React.SetStateAction<CartItem[]>>
	subtotal: number
	shipping: number
	contains: (product: Product) => boolean
	pushItem: (product: Product, count: number) => void
	popItem: (product: Product) => void
	changeCount: (product: Product, count: number) => void
}

const ShopCartContext = createContext<ContextProps>({} as ContextProps)

export const ShopCartProvider: React.FC = ({ children }) => {
	const [open, setOpen] = useState(false)
	const [items, setItems] = usePersistedState<CartItem[]>('shopcart', [])
	const [subtotal, setSubtotal] = useState(0)
	const [shipping, setShipping] = useState(0)

	const contains: (product: Product) => boolean = (product) => {
		return items.find((element) => element.id === product.id) !== undefined
	}

	const pushItem = (product: Product, count: number) => {
		setItems([...items, { ...product, count: count }])
	}

	const popItem = (product: Product) => {
		items.splice(
			items.findIndex((element) => element.id === product.id),
			1
		)

		setItems([...items])
	}

	const changeCount = (product: Product, count: number) => {
		const item = items.find((element) => element.id === product.id)

		if (item) {
			item.count = count > 1 ? count : 1
			setItems([...items])
		}
	}

	useEffect(() => {
		let _subtotal = 0
		let _shipping = 0
		items.forEach((item) => {
			_subtotal += item.price * item.count
			_shipping += 10 * item.count
		})

		setSubtotal(_subtotal)
		setShipping(_subtotal >= 250 ? 0 : _shipping)
	}, [items])

	return (
		<ShopCartContext.Provider
			value={{
				open,
				setOpen,
				items,
				setItems,
				subtotal,
				shipping,
				contains,
				pushItem,
				popItem,
				changeCount,
			}}
		>
			{children}
		</ShopCartContext.Provider>
	)
}

export default ShopCartContext
