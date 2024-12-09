import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({dark = false}) => {
  const { i18n } = useTranslation();

  // Liste des langues disponibles
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
  ];

  // Change la langue actuelle
  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
      <select
        id="language-select"
        value={i18n.language}
        onChange={changeLanguage}
        className={`rounded text-sm flex items-center max-sm:text-xs
            ${dark === true ? " text-white bg-gray-800" : 
              "text-gray-800 bg-white/20"}`}
      >
        {languages.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
  );
};

export default LanguageSwitcher;
