import React from 'react'

import NavBar from './components/NavBar'
import Routes from './Routes'

function App() {
	return (
		<div className='App'>
			<NavBar />
			<div className='mt-16'>
				<Routes />
			</div>
		</div>
	)
}

export default App
