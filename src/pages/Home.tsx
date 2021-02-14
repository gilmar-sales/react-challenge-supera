import React, { useEffect, useState } from 'react'

import arrowDownIcon from '../icons/arrow-down-icon.svg'

import ProductCard from '../components/ProductCard'
import Product from '../@types/Product'

import orderItems from '../utils/orderItems'

export default function Home() {
	const [games, setGames] = useState<Product[]>([])
	const [loadingPage, setLoadingPage] = useState(true)
	const [order, setOrder] = useState('name')

	useEffect(() => {
		if (loadingPage) return

		setGames((games) => {
			orderItems(games, order)
			return [...games]
		})
	}, [order, loadingPage])

	useEffect(() => {
		fetch('products.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((products) => {
				setGames(products)
				setLoadingPage(false)
			})
	}, [])

	return (
		<div className='p-4'>
			<div className='flex items-center justify-between mb-6'>
				<h1 className='text-2xl mb-4'>React Challenge Supera</h1>
				<div className='flex h-14 items-center justify-center relative'>
					<label className='pr-2 w-32'>Sort by:</label>
					<select
						className='bg-white h-full appearance-none border border-black inline-block py-3 pl-3 pr-8 rounded w-full cursor-pointer'
						onChange={(event) => setOrder(event.target.value)}
					>
						<option value='name_asc'>Name: Asc</option>
						<option value='name_desc'>Name: Desc</option>
						<option value='price_low'>Price: Low to High</option>
						<option value='price_high'>Price: Hight to Low</option>
						<option value='score_low'>Score: Low to High</option>
						<option value='score_high'>Score: Hight to Low</option>
					</select>
					<img
						className='absolute h-3 pointer-events-none inset-y-5 right-3'
						alt=''
						src={arrowDownIcon}
					/>
				</div>
			</div>
			<div className='grid grid-cols-12 gap-6'>
				{loadingPage
					? [...Array(8)].map((_, index) => (
							<div
								key={index}
								className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3'
							>
								<ProductCard loading />
							</div>
					  ))
					: games.map((game, index) => (
							<div
								key={index}
								className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3'
							>
								<ProductCard product={game} />
							</div>
					  ))}
			</div>
		</div>
	)
}
