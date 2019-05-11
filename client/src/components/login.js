import React, { Component } from 'react'
import './styles/login.css'


class Login extends Component{
    render(){
        return(
            <div className="login-component">
                <h1>Login</h1>
                 <form onSubmit={this.handleLogin}>
                    <input placeholder="email" type="text" name="loginemail" onChange={this.handleChange} />
                    <input placeholder="password" type="password" name="loginpassword" onChange={this.handleChange}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }

}

export default Login;