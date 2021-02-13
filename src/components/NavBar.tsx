import React from 'react'

import cartIcon from '../icons/cart-icon.svg'

export default function NavBar() {
	return (
		<nav
			className={
				'fixed top-0 w-full h-1 z-50 shadow bg-blue-500 text-black flex items-center justify-between px-4'
			}
		>
			<div className='flex gap-2'>
				<a href='/' className='text-2xl font-bold hover:text-white'>
					Gammerce
				</a>
				<small className='hidden sm:block self-end text-gray-700'>
					a pseudo gamming ecommerce
				</small>
			</div>
			<button className='h-12 w-12 flex justify-center items-center rounded-full bg-black text-blue-500'>
				<img className='h-8 w-8' alt='Cart' src={cartIcon} />
			</button>
		</nav>
	)
}
