import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Equipos from '../pages/equipos';
import Tabla from '../pages/tabla';
import Login from '../pages/login';

function RouterPage() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/equipos" component={Equipos} />
				<Route exact path="/tabla" component={Tabla} />
				<Route exact path="/login" component={Login} />
			</Switch>
		</BrowserRouter>
	);
}

export default RouterPage;
