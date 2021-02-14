import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CartDrawer from './components/CartDrawer'
import NavBar from './components/NavBar'

import HomePage from './pages/Home'

export default function Routes() {
	return (
		<BrowserRouter>
			<NavBar />
			<CartDrawer />
			<Switch>
				<Route path='/' exact component={HomePage} />
			</Switch>
		</BrowserRouter>
	)
}
