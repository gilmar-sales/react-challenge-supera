import React, { useContext, useState } from 'react'
import Product from '../@types/Product'
import ShopCartContext from '../contexts/ShopCartContext'

import cardAddIcon from '../icons/cart-add-icon.svg'
import cartRemoveIcon from '../icons/cart-remove-icon.svg'

interface ProductCardProps {
	product?: Product
	loading?: boolean
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
	const [count, setCount] = useState(1)
	const cartCtx = useContext(ShopCartContext)

	return (
		<div
			className={`flex flex-col justify-between w-full h-full rounded-md border overflow-hidden transition-transform duration-500 ease-in-out transform ${
				props.loading && 'animate-pulse'
			} ${
				props.product &&
				cartCtx.contains(props.product) &&
				'-translate-y-1 scale-105'
			}`}
		>
			<div>
				{/* Card Title */}
				<div className='text-center font-bold text-xl h-11 text-white p-2 bg-black'>
					{!props.loading && props.product?.name}
				</div>
				{/* Card Media */}
				<div className='h-44 overflow-hidden'>
					{props.loading ? (
						<div className='h-full w-full bg-gray-400' />
					) : (
						<img
							className='h-full mx-auto bg-cover'
							alt='media'
							src={`assets/${props.product?.image}`}
						/>
					)}
				</div>
			</div>
			{/* Card Content */}
			<div className='p-4'>
				{props.loading ? (
					<div className='mx-auto mb-2 w-20 h-5 bg-gray-400' />
				) : (
					<div className='text-center text-lg mb-2 font-bold'>
						{props.product?.price.toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						})}
					</div>
				)}
				<div className='flex items-end justify-between'>
					{props.loading ? (
						<div className='w-20 h-5 bg-gray-400' />
					) : (
						<label>Score: {props.product?.score}</label>
					)}

					{!props.loading ? (
						<>
							{props.product && cartCtx.contains(props.product) ? (
								<button
									className='flex h-10 items-center bg-red-500 p-2 text-white rounded-md hover:bg-red-600'
									onClick={() =>
										props.product && cartCtx.popItem(props.product)
									}
								>
									<img className='w-8' alt='' src={cartRemoveIcon} />
								</button>
							) : (
								<div className='flex'>
									<input
										className='h-10 w-14  border  rounded-none rounded-l-md px-2 text-black appearance-none'
										type='number'
										value={count}
										min='1'
										onChange={(event) => setCount(Number(event.target.value))}
										onFocus={(event) => event.target.select()}
									/>
									<button
										data-testid={props.product?.name}
										className='flex h-10 items-center bg-blue-500 p-2 text-white rounded-none rounded-r-md hover:bg-blue-600'
										onClick={() =>
											props.product && cartCtx.pushItem(props.product, count)
										}
									>
										<img className='w-8' alt='' src={cardAddIcon} />
									</button>
								</div>
							)}
						</>
					) : (
						<div className='bg-gray-400 rounded-md w-28 h-10' />
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductCard
