import React, { Component } from 'react';
import Header from '../components/header';
import axios from 'axios';
import '../styles/login.css';

class Login extends Component {
	state = {
		bigData: null
	};

	handleChange = (event) => {
		console.log(this.state);
		this.setState({
			...this.state,
			[event.target.name]: event.target.value
		});
	};

	handleLogin = (event) => {
		event.preventDefault();
		const user = {
			email: this.state.loginemail,
			password: this.state.loginpassword
		};

		axios({
			method: 'post',
			baseURL: 'http://localhost:3002/api/users/login',
			headers: { 'Content-Type': 'application/json' },
			withCredentials: true,
			data: user
		}).then((res) => {
			console.log(res.data);
			return res.data;
		});
	};

	render() {
		return (
			<div>
				<Header />
				<div className="login-component">
					<h1>Registrate</h1>
					<form onSubmit={this.handleLogin}>
                        <input placeholder="nombre" type="text" name="nombre" />
                        <input placeholder="apellido" type="text" name="apellido" />
						<input placeholder="email" type="text" name="loginemail" />
						<input
							placeholder="password"
							type="password"
							name="loginpassword"
							onChange={this.handleChange}
						/>
						<button type="submit">Login</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
