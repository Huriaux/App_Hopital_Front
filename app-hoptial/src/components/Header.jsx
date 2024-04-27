import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../App.css";
import Logo from "../assets/Logo.png";

const Header = () => {

    return (
        <>

        <nav class="navbar">
            <div class="container">
                <img src={Logo} alt="Logo Hopital" />

                <DropdownButton id="dropdown1" title="Patient">
                    <Dropdown.Item className='drop' href="#/action-1">Ajouter</Dropdown.Item>
                    <Dropdown.Item className='drop' href="#/action-2">Modifier</Dropdown.Item>
                </DropdownButton>

                <DropdownButton id="dropdown2" title="Séjour">
                    <Dropdown.Item href="#/action-1">Arrivée</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Sortie</Dropdown.Item>
                </DropdownButton>
            </div>
        </nav>
        </>
    );
};

export default Header;