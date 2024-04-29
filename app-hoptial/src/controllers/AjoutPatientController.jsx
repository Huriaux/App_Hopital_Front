
// const ajoutPatientController = async (patientData) {
//         try {
//             const response = await fetch("https://api-ecf.sarahkatz.fr/patients", {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(patientData),
//             });

//             if (!response.ok) {
//                 // Ici, tu peux utiliser response.text() pour voir ce que l'API renvoie
//                 const text = await response.text();
//                 console.error("Response text:", text); // Affiche le texte pour le débogage
//                 throw new Error(`HTTP error! status: ${response.status}`);
//               }
        
//               let data;
//               if (response.headers.get("content-type")?.includes("application/json")) {
//                 data = await response.json();
//               } else {
//                 console.warn("Response not JSON:", await response.text());
//               }
        
//               setPatients((prevPatients) => [...prevPatients, data]);


//         } catch (error) {
//             setError(error);
//             console.error("Échec de l'ajout du nouveau patient", error); 
//         } finally {
//             setIsLoading(false);
//         }
    
//     return {patients, isLoading, error, addPatient};

// }
// export default ajoutPatientController;

const ajoutPatientController = async (patientData) => {
    try {
        const response = await fetch("https://api-ecf.sarahkatz.fr/patients", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Échec de l'ajout du nouveau patient", error);
        throw error;
    }
};

export default ajoutPatientController;