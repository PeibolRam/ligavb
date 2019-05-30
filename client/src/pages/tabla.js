import React, { Component } from 'react';
import HeaderNav from '../components/header';
import '../styles/tabla.css';
import axios from 'axios';

class Tabla extends Component {
	state = {
        equipos: []
    }

    async componentDidMount(){
		const dataFetch = await axios.get(`http://localhost:3002/equipos`).then(response => {
			this.setState({
			equipos: response.data
			})
		})
		.catch(error => {
			console.log('error');
		})

    }
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
							{this.state.equipos.map(equipos =>
								<tr>
									<th>{equipos.posicion}</th>
									<th>{equipos.nombre}</th>
									<th>{equipos.puntos}</th>
									<th>{equipos.setGanados}</th>
									<th>{equipos.setPerdidos}</th>
									
								</tr>				
							)}						
						</tbody>
					</table>
				</div>

			</div>
		);
	}
}

export default Tabla;
