import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Menu = () => {
    return (
        <div className="menuBox">
            <ul className="menu">
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link"to="/Projeto">Sobre o projeto</Link>
                </li>
                <li>
                    <Link className="link"to="/Autoras">Autoras</Link>
                </li>
                <li>
                    <Link className="link"to="/Sobremim">Sobre mim</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu