import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      btn_test_product: "Test product",
      title_create_landingpage: "Create",
      title_landingpage: "your mockups online, easily and quickly",
      description_landingpage: "MockupFast is a solution designed to let you create custom mockups.",
      btn_download: "Download",
      text_model: "Models",
      text_text: "Text",
      text_background: "Background-Color",
      text_margin: "Margins",
      text_device: "Devices",
      text_coverImage: "Cover Image",
      text_marginTop: "Margin Top",
      text_marginBottom: "Margin Bottom",
      text_marginLeft: "Margin Left",
      text_marginRight: "Margin Right",
      text_marginRight: "Margin Right",
      text_color:"Text Color",
      text_backColor:"Back Color",
      text_fontSize:"Font Size",
      text_anchor:"Text Anchor",
      text_top:"Top",
      text_left:"Left",
      text_fontFamily:"Font Family",
      text_transparent:"Transparent",
      text_bold:"Bold",
      color:"Color",
      radius:"Radius",
      bmc: "Do you like my content ?",
      text_dragDrop:"Drag and Drop your file here or",
      text_chooseFile: "Choose File"
    },
  },
  fr: {
    translation: {
      btn_test_product: "Tester le produit",
      title_create_landingpage: "Créer",
      title_landingpage: "vos mockups en ligne, facilement et rapidement",
      description_landingpage: "MockupFast est une solution conçue pour vous permettre de créer des mockups personnalisés.",
      btn_download: "Télécharger",
      text_model: "Modèles",
      text_text: "Texte",
      text_background: "Arrière-plan",
      text_margin: "Marges",
      text_device: "Appareils",
      text_coverImage: "Image de couverture",
      text_marginTop: "Marge Haute",
      text_marginBottom: "Marge Basse",
      text_marginLeft: "Marge Gauche",
      text_marginRight: "Marge Droite",
      text_color:"Couleur de texte",
      text_backColor:"Couleur de fond",
      text_fontSize:"Taille du texte",
      text_anchor:"Ancrage du texte",
      text_top:"Haut",
      text_left:"Gauche",
      text_fontFamily:"Famille de police",
      text_transparent:"Transparent",
      text_bold:"Gras",
      color:"Couleur",
      radius:"Rayon",
      bmc: "Tu aimes mon contenu ?",
      text_dragDrop:"Faites glisser et déposez votre fichier ici ou",
      text_chooseFile: "Choisir un fichier"
    },
  },
};

i18n
  .use(LanguageDetector) // Détecte automatiquement la langue du navigateur
  .use(initReactI18next) // Passe la configuration à React
  .init({
    resources,
    fallbackLng: 'fr', // Langue par défaut
    interpolation: {
      escapeValue: false, // React échappe déjà par défaut
    },
  });

export default i18n;
