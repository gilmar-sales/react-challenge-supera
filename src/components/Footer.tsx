import React from 'react'

export default function Footer() {
	return (
		<div className='flex justify-between p-16 border-t'>
			<span>Gammerce 2020, All rights reserved.</span>
			<span>
				Made by{' '}
				<a
					className='font-bold hover:text-blue-600'
					href='https://github.com/gilmarxd'
				>
					Gilmar Custodio
				</a>
			</span>
		</div>
	)
}
