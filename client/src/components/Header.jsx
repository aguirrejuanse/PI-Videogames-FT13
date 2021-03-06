import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/components/Header.scss';
import Logo from '../assets/logo-white.png';

const Header = ({ landing }) => {

    return (
        <header className="header">
            
            <img className="header__img" src={Logo} alt="Logo de Henry"/>
            

            {landing !== 'landing' &&
                <div>
                    <Link to="/home" style={{ textDecoration: 'none' }} >
                        <h3 className="header__home" >Home</h3>
                    </Link>
                </div>
            }
            
            {landing !== 'landing' &&
                <div>
                    <Link to="/home/create" style={{ textDecoration: 'none' }} >
                        <h3 className="header__create" >Crea un videojuego</h3>
                    </Link>
                </div>
            }
        </header>
    )
}

export default Header;