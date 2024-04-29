const RecherchePatientController = async (patientName) => {
    try {
        const response = await fetch('https://api-ecf.sarahkatz.fr/patients?nom=${lastName}');

        if (!response.ok) {
            throw new Error('Échec de la recherche du patient ! Code: ${response.status}');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Échec de la recherche du patient", error);
        throw error;
    }
};