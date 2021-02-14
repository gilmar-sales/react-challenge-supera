import React, { HTMLAttributes, useContext } from 'react'

import ShopCartContext from '../contexts/ShopCartContext'

import cartIcon from '../icons/cart-icon.svg'

const CartButton: React.FC<HTMLAttributes<{}>> = (props) => {
	const cartCtx = useContext(ShopCartContext)

	return (
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
}

export default CartButton
