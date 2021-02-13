import React, { useEffect, useState } from 'react'

import GameCard from '../components/GameCard'
import { Game } from '../@types/game'

export default function Home() {
	const [games, setGames] = useState<Game[]>([])
	const [loadingPage, setLoadingPage] = useState(true)

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
			<h1 className='text-2xl mb-4'>React Challenge Supera</h1>
			<div className='grid grid-cols-12 gap-4'>
				{loadingPage
					? [...Array(8)].map((_, index) => (
							<div className='col-span-12 sm:col-span-4 md:col-span-3'>
								<GameCard loading />
							</div>
					  ))
					: games.map((game, index) => (
							<div className='col-span-12 sm:col-span-4 md:col-span-3'>
								<GameCard key={index} game={game} />
							</div>
					  ))}
			</div>
		</div>
	)
}
