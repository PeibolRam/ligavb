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
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id est ea nulla, numquam dignissimos
						accusamus fugit rerum natus perferendis ut! Voluptatibus a, incidunt blanditiis reprehenderit
						pariatur reiciendis fugiat impedit quibusdam.
					</p>
					<img src={wallpaperHome} alt="" />
				</div>
			</div>
		);
	}
}

export default Home;
