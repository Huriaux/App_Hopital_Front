import React from 'react';
import "../App.css";
import Image from "../assets/ImgAccueil.png";
import Footer from '../components/Footer';
import Header from '../components/Header'; // Importation de votre en-tête


const Accueil = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="imageFond" style={{ backgroundImage: `url(${Image})` }}>
                {/* Contenu de votre page d'accueil */}
            </main>
            <Footer />
        </div>
    );
};

export default Accueil;