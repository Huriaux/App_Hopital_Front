import React from 'react';
import "../App.css";
import Image from "../assets/ImgAccueil.png";
import Footer from '../components/Footer';
import Header from '../components/Header';


const Accueil = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="imageFond" style={{ backgroundImage: `url(${Image})` }}>
            </main>
            <Footer />
        </div>
    );
};

export default Accueil;