import React from "react";
import DynamicImageComponent from "./DynamicImageComponent"; // Import your DynamicImageComponent
import { useTranslation } from "react-i18next";

const AllModelComponent = ({ nbDivisor = 8, device, imageSrc, models = [], onModelClick }) => {
  
  const { t } = useTranslation();

  const handleModelClick = (model) => {
    if (onModelClick) {
      onModelClick(model); // Appelle la fonction de rappel avec le modèle
    }
  };
  return (
    <div className="p-6 text-medium text-gray-500 overflow-y-auto
      w-full">
      <h1 className="text-3xl text-center" >{t("text_model")}</h1>
      <div className="flex flex-wrap justify-evenly items-center gap-3 w-full mt-6">
        {models.map((model, index) => (
          <DynamicImageComponent
            key={index} // Ensure each component has a unique key
            device={device}
            imageSrc={imageSrc}
            nbDivisor={nbDivisor}
            textStyle={model.textStyle}
            margins={model.margins}
            backgroundStyle={model.backgroundStyle}
            onClick={() => handleModelClick(model)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllModelComponent;
