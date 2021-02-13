import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './pages/Home'

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={HomePage} />
			</Switch>
		</BrowserRouter>
	)
}
