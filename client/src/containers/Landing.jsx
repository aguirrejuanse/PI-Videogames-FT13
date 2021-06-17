import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/containers/Landing.scss';
import img from '../assets/videogame.png';

const Landing = () => {
    return(
        <section className="landing">
            <Header landing={"landing"}/>
            <section className="inicio">
                <h1>Individual Project - Henry Videogames</h1>
                <img src={img} width="300px" alt="Imagen del PI-Videogames"/>
                <div>
                    <p>
                        Este proyecto fue creado por Juan Aguirre para el proyecto individual.
                        Esta App utiliza React, Redux, Node y Sequelize.
                    </p>
                </div>
                <Link to="/home">
                    <button className="ver-button">
                        Ver proyecto
                    </button>
                </Link>
            </section>
            <Footer/>
        </section>
    )
}

export default Landing;