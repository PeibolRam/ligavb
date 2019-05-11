import React, { Component } from 'react'
import './styles/header.css'


class Header extends Component{
    render(){
        return(
            <div className="main-header">
                <ul>
                    <li>Inicio</li>
                    <li>Equipos</li>
                    <li>Entrenadores</li>
                    <li>Logout</li>
                </ul>

            </div>
        )
    }

}

export default Header;