import React, { Component } from 'react';
import HeaderNav from '../components/header';
import '../styles/homePage.css';
import wallpaperHome from '../images/wallpaperHome.jpg';

class Home extends Component {
	render() {
		return (
			<div>
				<HeaderNav />
				<div className="home-div">
					<h1>Voleibol</h1>
					<p>
						Inicia sesión para dar de alta tu equipo.
					</p>
					<img src={wallpaperHome} alt="" />
				</div>
			</div>
		);
	}
}

export default Home;
