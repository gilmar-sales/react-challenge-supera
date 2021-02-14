import React, { useContext } from 'react'
import ShopCartContext from '../contexts/ShopCartContext'
import CartButton from './CartButtom'
import CartItemCard from './CartItemCard'
import Drawer from './Drawer'

export default function CartDrawer() {
	const cartCtx = useContext(ShopCartContext)

	return (
		<Drawer open={cartCtx.open} setOpen={cartCtx.setOpen}>
			<div className='flex justify-between  items-center row-span-1'>
				<h1 className='text-2xl'>Shop Cart</h1>
				<CartButton className='border' />
			</div>
			<div className='border-b my-6' />
			<div className=' '>
				{cartCtx.items.map((item, index) => (
					<CartItemCard key={index} cartItem={item} />
				))}
			</div>
			<div className='mb-2 text-green-500 bg-green-400 bg-opacity-30 p-2 rounded-md border border-green-500'>
				Free shipping for purchases over R$ 250,00
			</div>
			<div className='flex justify-between'>
				<label>Subtotal:</label>
				{cartCtx.subtotal.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				})}
			</div>
			<div className='flex justify-between'>
				<label>Estimated Shipping:</label>
				{cartCtx.shipping.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				})}
			</div>
			<div className='flex justify-between mb-3'>
				<label>Total:</label>
				{(cartCtx.subtotal + cartCtx.shipping).toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				})}
			</div>
			<button className='w-full bg-white text-center text-black text-xl font-bold p-4 hover:bg-blue-600 rounded-md'>
				Proceed to checkout
			</button>
		</Drawer>
	)
}
