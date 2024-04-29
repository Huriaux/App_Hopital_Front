
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import "../App.css";
import Logo from "../assets/Logo.png";

const Header = () => {

    return (
        <nav className="navbar">
            <div className="container">
                    <Link className='container-link' to="/">
                        <img src={Logo} alt="Logo Hopital"/>
                    </Link>

                <DropdownButton id="dropdown1" title="Patient">
                    <Dropdown.Item className='drop'><Link to="/AjoutPatient">Ajouter</Link></Dropdown.Item>
                    <Dropdown.Item className='drop'><Link to="/ModifierPatient">Modifier</Link></Dropdown.Item>
                </DropdownButton>

                <DropdownButton id="dropdown2" title="Séjour">
                    <Dropdown.Item href="#/action-1">Arrivée</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Sortie</Dropdown.Item>
                </DropdownButton>
            </div>
        </nav>
    );
};

export default Header;