import React, { Component } from 'react';
import Register from '../pages/register';
import { Link } from 'react-router-dom';
import '../styles/header.css';
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
							<Link to="/tabla">TABLA</Link>
						</li>
						<li>
							<Link to="/register" component={Register}>
								REGISTRATE
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default HeaderNav;
