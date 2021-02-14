import React from 'react'

import { Link } from 'react-router-dom'
import CartButton from './CartButtom'

export default function NavBar() {
	return (
		<nav
			className={
				'fixed top-0 left-0 w-full h-20 z-50 shadow bg-blue-500 text-black flex items-center justify-between px-4'
			}
		>
			{/* NavContent */}
			<div className='flex justify-between w-full max-w-screen-xl mx-auto'>
				<div className='flex  max-w-screen-xl'>
					<Link to='/' className='text-2xl font-bold hover:text-white'>
						Gammerce
					</Link>
					<small className='hidden sm:block self-end text-gray-700'>
						a pseudo gamming ecommerce
					</small>
				</div>
				<CartButton />
			</div>
		</nav>
	)
}
