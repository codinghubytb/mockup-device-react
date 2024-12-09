import axios from 'axios';

// Base URL pour les API
const api = axios.create({
  baseURL: `${import.meta.env.VITE_APIDATA}`, // Remplacez par votre URL de base si nécessaire
  withCredentials: true,  // Cela permet d'envoyer les cookies avec la requête
});

// Fonction pour récupérer les appareils
export const fetchDevices = async () => {
  try {
    const response = await api.get("/api/collection?database=mockupgenerator&collection=device");
    return response.data;  // Retourne les données des appareils
  } catch (error) {
    throw error;  // Lancer l'erreur pour qu'elle soit gérée au niveau de l'appelant
  }
};

// Fonction pour vérifier la validité du token
export const checkToken = async () => {
  try {
    const response = await api.get("/protected");
    return response.data.valid;  // Retourne la validité du token
  } catch (error) {
    return false;
  }
};

// Fonction pour se connecter
export const login = async (site) => {
  try {
    const response = await api.post("/login", { site });
    return response.data.login;  // Retourne le statut de la connexion
  } catch (error) {
    return false;
  }
};

// Autres requêtes API peuvent être ajoutées ici
