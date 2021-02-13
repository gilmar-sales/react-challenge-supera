import React, { createContext, useState } from 'react'

import usePersistedState from '../utils/usePersistedState'

import Product from '../@types/Product'
import CartItem from '../@types/CartItem'

interface ContextProps {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	items: CartItem[]
	setItems: React.Dispatch<React.SetStateAction<CartItem[]>>
	contains: (product: Product) => boolean
	pushItem: (product: Product, count: number) => void
	popItem: (product: Product) => void
	changeCount: (product: Product, count: number) => void
}

const ShopCartContext = createContext<ContextProps>({} as ContextProps)

export const ShopCartProvider: React.FC = ({ children }) => {
	const [open, setOpen] = useState(false)
	const [items, setItems] = usePersistedState<CartItem[]>('shopcart', [])

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
			item.count = count
			setItems([...items])
		}
	}

	return (
		<ShopCartContext.Provider
			value={{
				open,
				setOpen,
				items,
				setItems,
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
