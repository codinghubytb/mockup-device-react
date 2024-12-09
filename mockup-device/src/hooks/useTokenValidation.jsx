import { useState, useEffect } from "react";
import axios from "axios";
import { checkToken, login } from "../utils/api"; 

const useTokenValidation = () => {
  const [isValid, setIsValid] = useState(false);  // État de validation
  const [isChecking, setIsChecking] = useState(true);  // État de vérification
  const [error, setError] = useState(null);  // État pour l'erreur éventuelle

  useEffect(() => {
    const checkTokenAndRedirect = async () => {
      const valid = await checkToken(); // Vérification du token
      if (!valid) {
        const loginSuccess = await login(import.meta.env.VITE_SITE); // Login si nécessaire
        if (!loginSuccess) {
          setIsChecking(false); // Échec de validation
          setError("Échec de la connexion, veuillez réessayer.");
          return;
        }
      }
      setIsValid(true);
      setIsChecking(false);
    };

    checkTokenAndRedirect();  // Exécution de la vérification au montage
  }, []); // Le tableau vide assure que ce code est exécuté une seule fois lors du montage

  return { isValid, isChecking, error };
};

export default useTokenValidation;
