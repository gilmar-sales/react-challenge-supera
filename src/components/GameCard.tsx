import React, { useState } from 'react'
import { Game } from '../@types/game'

import cardAddIcon from '../icons/cart-add-icon.svg'

interface GameCardProps {
	game?: Game
	loading?: boolean
}

const GameCard: React.FC<GameCardProps> = (props) => {
	const [count, setCount] = useState(1)

	return (
		<div
			className={`flex flex-col justify-between w-full h-full rounded-md border overflow-hidden transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
				props.loading && 'animate-pulse'
			}`}
		>
			<div>
				{/* Card Title */}
				<div className='text-center font-bold text-xl h-11 text-white p-2 bg-black'>
					{!props.loading && props.game?.name}
				</div>
				{/* Card Media */}
				<div className='h-44 overflow-hidden'>
					{props.loading ? (
						<div className='h-full w-full bg-gray-400' />
					) : (
						<img
							className='h-full mx-auto bg-cover'
							alt='media'
							src={`assets/${props.game?.image}`}
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
						{props.game?.price.toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						})}
					</div>
				)}
				<div className='flex items-end justify-between'>
					{props.loading ? (
						<div className='w-20 h-5 bg-gray-400' />
					) : (
						<label>Score: {props.game?.score}</label>
					)}

					{!props.loading ? (
						<div className='flex'>
							<input
								className='h-10 w-14  border  rounded-none rounded-l-md px-2 text-black appearance-none'
								type='number'
								value={count}
								min='0'
								onChange={(event) => setCount(Number(event.target.value))}
								onFocus={(event) => event.target.select()}
							/>
							<button className='flex h-10 items-center bg-blue-500 p-2 text-white rounded-none rounded-r-md hover:bg-blue-600'>
								<img className='w-8' alt='' src={cardAddIcon} />
							</button>
						</div>
					) : (
						<div className='bg-gray-400 rounded-md w-32 h-10' />
					)}
				</div>
			</div>
		</div>
	)
}

export default GameCard
