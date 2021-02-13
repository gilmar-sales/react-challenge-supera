import React, { useEffect } from 'react'

export default function Home() {
	useEffect(() => {
		fetch('products.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((products) => console.log(products))
	}, [])

	return (
		<div>
			<h1 className='text-2xl'>React Challenge Supera</h1>
		</div>
	)
}
