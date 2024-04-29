import React, { useState } from 'react';
import "../App.css";
import ajoutPatientController from '../controllers/AjoutPatientController';

const AjoutPatient = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true);
        setError(null);
        
        try {
            const newPatient = {
            lastName,
            firstName,
            birthdate,
            socialSecurityNumber,
            };
            await ajoutPatientController(newPatient);
        
        
            setLastName("");
            setFirstName("");
            setBirthdate("");
            setSocialSecurityNumber(""); 

        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (

        <div className='container-form'>
            <h2>Ajouter un nouveau patient :</h2>
            <form onSubmit={handleSubmit} >
                <div className='ajoutPrenom'>
                    <label htmlFor='firstName'>Prénom :</label>
                    <input type="text" id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>

                <div className='ajoutNom'>
                    <label htmlFor='lastName'>Nom :</label>
                    <input type="text" id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>

                <div className='ajoutDateNaiss'>
                    <label htmlFor='birthdate'>Date de naissance :</label>
                    <input type="date" id='birthdate' value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />
                </div>

                <div className='ajoutNumSecu'>
                    <label htmlFor='socialSecurityNumber'>Numéro de Sécu :</label>
                    <input type="text" id='socialSecurityNumber' value={socialSecurityNumber} onChange={(e) => setSocialSecurityNumber(e.target.value)} required />
                </div>   

                <button type='submit'>Enregistrer</button>             
            </form>

        </div>
        
    );
};

export default AjoutPatient;