import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../App.css";
import Logo from "../assets/Logo.png";
import AjoutPatient from '../views/AjoutPatient';

const Header = () => {

    return (
        <nav className="navbar">
            <div className="container">
                <img title='Accueil' src={Logo} alt="Logo Hopital" />

                <DropdownButton id="dropdown1" title="Patient">
                    <Dropdown.Item className='drop'><Link to={AjoutPatient}>Ajouter</Link></Dropdown.Item>
                    <Dropdown.Item className='drop' href="#/action-2">Modifier</Dropdown.Item>
                </DropdownButton>

                <DropdownButton id="dropdown2" title="Séjour">
                    <Dropdown.Item className='drop' href="#/action-1">Arrivée</Dropdown.Item>
                    <Dropdown.Item className='drop' href="#/action-2">Sortie</Dropdown.Item>
                </DropdownButton>
            </div>
        </nav>
    );
};

export default Header;