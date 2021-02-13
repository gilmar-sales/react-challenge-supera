import React from 'react'

import NavBar from './components/NavBar'
import { ShopCartProvider } from './contexts/ShopCartContext'
import Routes from './Routes'

function App() {
	return (
		<div className='App'>
			<ShopCartProvider>
				<NavBar />
				<div className='max-w-screen-xl mt-20 mx-auto'>
					<Routes />
				</div>
			</ShopCartProvider>
		</div>
	)
}

export default App
