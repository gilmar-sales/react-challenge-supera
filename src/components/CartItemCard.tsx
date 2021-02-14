import React, { useContext } from 'react'
import CartItem from '../@types/CartItem'
import Product from '../@types/Product'
import ShopCartContext from '../contexts/ShopCartContext'

import cartRemoveIcon from '../icons/cart-remove-icon.svg'

interface CartItemCardProps {
	cartItem: CartItem
}

const CartItemCard: React.FC<CartItemCardProps> = (props) => {
	const cartCtx = useContext(ShopCartContext)

	return (
		<div className='my-6 grid grid-cols-12 pb-6 border-b'>
			<div className='w-24 bg-white col-span-4'>
				<img className='' alt='media' src={`assets/${props.cartItem.image}`} />
			</div>
			<div className='col-span-8 flex flex-col justify-between'>
				<h1 className=''>{props.cartItem.name}</h1>
				<label>
					{(props.cartItem.price * props.cartItem.count).toLocaleString(
						'pt-BR',
						{
							style: 'currency',
							currency: 'BRL',
						}
					)}
				</label>
				<div className='flex justify-between items-end'>
					<input
						className='bg-black border appearance-none pl-2 w-16'
						value={props.cartItem.count}
						type='number'
						min='1'
						onChange={(event) =>
							cartCtx.changeCount(
								props.cartItem as Product,
								Number(event.target.value)
							)
						}
						onFocus={(event) => event.target.select()}
					/>
					<button
						className='bg-red-500 p-2 h-10 mr-4'
						onClick={() => cartCtx.popItem(props.cartItem)}
					>
						<img className='h-6' alt='' src={cartRemoveIcon} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItemCard
