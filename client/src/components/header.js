import React, { Component } from 'react'
import './styles/header.css'


class Header extends Component{
    
    render(){
        return(
            <div className="main-header">
                <ul>
                    <li>Login</li>
                    <li>Registrate</li>
                </ul>

            </div>
        )
    }

}

export default Header;