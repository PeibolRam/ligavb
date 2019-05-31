import React, { Component } from 'react';
import HeaderNav from '../components/header';
import '../styles/equipos.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Equipos extends Component {
	state = {
        equipos: []
    }

    async componentDidMount(){
		await axios.get(`http://localhost:3002/equipos`).then(response => {
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
				<div className="equipos-div">
					<h1>Equipos</h1>
					<div className="grid-equipos">
						<article>
							{this.state.equipos.map(equipos => 
								<h2>
									<Link to={'/equipos/'+equipos.idEquipo}>{equipos.nombre}</Link>
								</h2>
							)}
						</article>
					</div>
				</div>

			</div>
		);
	}
}

export default Equipos;
