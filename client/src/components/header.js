import React, { Component } from 'react';
import Login from '../pages/login';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import Equipos from '../pages/equipos';
import Home from '../pages/home';

class HeaderNav extends Component {
	render() {
		return (
			<div className="main-header">
				<div>
					<ul>
						<li>
							<Link to="/" component={Home}>
								INICIO
							</Link>
						</li>
						<li>
							<Link to="/equipos" component={Equipos}>
								EQUIPOS
							</Link>
						</li>
						<li>
							<Link to="/tabla">TABLA</Link>
						</li>
						<li>
							<Link to="/login" component={Login}>
								LOGIN
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default HeaderNav;
