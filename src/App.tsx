import React from 'react'

import NavBar from './components/NavBar'
import Routes from './Routes'

function App() {
	return (
		<div className='App'>
			<NavBar />
			<div className='max-w-screen-xl mt-16 mx-auto'>
				<Routes />
			</div>
		</div>
	)
}

export default App
