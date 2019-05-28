import React, { Component } from 'react';
import HeaderNav from '../components/header';
import '../styles/tabla.css';

class Tabla extends Component {
	render() {
		return (
			<div>
				<HeaderNav />
				<div className="tabla-div">
                    <h1>Tabla de posiciones</h1>
					<table>
						<thead>
							<tr>
								<th>Posición</th>
								<th>Equipo</th>
								<th>Puntos</th>
								<th>Set Ganados</th>
								<th>Set Perdidos</th>
							</tr>
						</thead>
						<tbody>
							<tr></tr>
						</tbody>
					</table>
				</div>

			</div>
		);
	}
}

export default Tabla;
