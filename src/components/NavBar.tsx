import React, { HTMLAttributes, useContext } from 'react'

import cartIcon from '../icons/cart-icon.svg'
import Drawer from './Drawer'

import ShopCartContext from '../contexts/ShopCartContext'

export default function NavBar() {
	const cartCtx = useContext(ShopCartContext)

	const CartButton: React.FC<HTMLAttributes<{}>> = (props) => (
		<button
			className={`${props.className} h-12 w-12 relative flex justify-center items-center rounded-full bg-black text-blue-500`}
			onClick={() => cartCtx.setOpen(!cartCtx.open)}
		>
			{/* Count */}
			{cartCtx.items.length !== 0 && (
				<div className='absolute top-0 left-0 h-6 w-6 rounded-full bg-red-500 text-white'>
					{cartCtx.items.length}
				</div>
			)}
			{/* Icon */}
			<img className='h-8 w-8' alt='Cart' src={cartIcon} />
		</button>
	)

	return (
		<nav
			className={
				'fixed top-0 w-full h-20 z-50 shadow bg-blue-500 text-black flex items-center justify-between px-4'
			}
		>
			{/* NavContent */}
			<div className='flex justify-between w-full max-w-screen-xl mx-auto'>
				<div className='flex  max-w-screen-xl'>
					<a href='/' className='text-2xl font-bold hover:text-white'>
						Gammerce
					</a>
					<small className='hidden sm:block self-end text-gray-700'>
						a pseudo gamming ecommerce
					</small>
				</div>
				<CartButton />
			</div>
			<Drawer open={cartCtx.open} setOpen={cartCtx.setOpen}>
				<div className='flex justify-between items-center'>
					<h1 className='text-2xl'>Shop Cart</h1>
					<CartButton className='border' />
				</div>
				<div className='border-b my-4 w-full' />
			</Drawer>
		</nav>
	)
}
