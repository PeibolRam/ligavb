import React, { Component } from 'react';
import HeaderNav from '../components/header';
import '../styles/equipos.css';

class Equipos extends Component {
	render() {
		return (
			<div>
				<HeaderNav />
				<div className="equipos-div">
					<h1>Equipos</h1>
				</div>

			</div>
		);
	}
}

export default Equipos;
