import React from 'react';
import "../App.css";
import Image from "../assets/ImgAccueil.png";


const Accueil = () => {
    return (
        <div className="wrapper">
            <main className="imageFond" style={{ backgroundImage: `url(${Image})` }}>
            </main>
        </div>
    );
};

export default Accueil;