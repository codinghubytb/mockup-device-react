import React from "react";
import DynamicImageComponent from "./DynamicImageComponent"; // Import your DynamicImageComponent

const AllModelComponent = ({ nbDivisor = 8, device, imageSrc, models = [], onModelClick }) => {
  const handleModelClick = (model) => {
    if (onModelClick) {
      onModelClick(model); // Appelle la fonction de rappel avec le modèle
    }
  };
  return (
    <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-[350px] min-w-[350px]">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Models
          </h3>
      <div className="flex flex-wrap justify-center items-center gap-3 w-full">
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
