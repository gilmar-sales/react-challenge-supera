import React from 'react'

export default function NavBar() {
	return (
		<nav
			className={
				'fixed top-0 w-full h-16 bg-blue-500 text-white flex items-center justify-between px-4'
			}
		>
			<div className='flex gap-2'>
				<a href='/' className='text-2xl font-bold hover:text-black'>
					Gammerce
				</a>
				<small className='hidden sm:block self-end text-gray-200 '>
					a pseudo gamming ecommerce
				</small>
			</div>
			<button className='h-10 w-10 rounded-full bg-indigo-50 text-blue-500 appearance-none focus:outline-none'>
				cart
			</button>
		</nav>
	)
}
