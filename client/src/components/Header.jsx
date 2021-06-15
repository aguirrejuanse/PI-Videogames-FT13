import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/components/Header.scss';
import Logo from '../assets/logo-white.png';

const Header = () => {

    return (
        <header className="header">
            
            <img className="header__img" src={Logo} />
            
            <div>
                <Link to="/home" style={{ textDecoration: 'none' }} >
                    <h2 className="header__home" >Home</h2>
                </Link>
            </div>
            
            <div>
                <Link to="/home/create" style={{ textDecoration: 'none' }} >
                    <h2 className="header__create" >Crea un videojuego</h2>
                </Link>
            </div>
        </header>
    )
}

export default Header;