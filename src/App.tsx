import React, { useContext } from 'react'

import ShopCartContext from './contexts/ShopCartContext'
import Routes from './Routes'

function App() {
	const cartCtx = useContext(ShopCartContext)
	return (
		<div className='App'>
			<div className={cartCtx.open ? 'overflow-hidden h-screen w-screen' : ''}>
				<div className='max-w-screen-xl mt-20 mx-auto'>
					<Routes />
				</div>
			</div>
		</div>
	)
}

export default App
