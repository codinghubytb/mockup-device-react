import { useState } from "react";

const TabsComponent = ({ activeTab, tabs = [], onActiveTab }) => {

  const onHandle = (value) => {
    if(onActiveTab)
        onActiveTab(value);
  }

  return (
    <ul className="flex-column space-y space-y-4 text-sm w-[150px] min-w-[150px] font-medium text-gray-500 dark:text-gray-400 ml-2 mb-4 md:mb-0">
      {tabs.map((tab) => (
        <li key={tab.id}>
          <div data-ripple-light="true" data-popover-target="popover-animation"
            onClick={() => onHandle(tab.id)} // Définit l'onglet actif
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full
              border-2 bg-gray-100 border-gray-300 
              hover:text-gray-800 hover:bg-gray-300 
              ${activeTab === tab.id ? "text-gray-800 bg-gray-300" : ""}`}
          >
            <img
              src={tab.image}
              alt={tab.title}
              className="w-4 h-4 me-2 text-white"
            />
            {tab.title}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TabsComponent;
