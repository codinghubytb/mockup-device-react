import { useState } from "react";

const TabsComponent = ({ activeTab, tabs = [], onActiveTab }) => {

  const onHandle = (value) => {
    if(onActiveTab)
        onActiveTab(value);
  }

  return (
    <div className="flex flex-col justify-start bg-gray-800">
      <ul className="flex flex-col space-y space-y-4 text-md p-6 h-full max-md:h-auto
      gap-6 max-md:gap-2 font-medium max-md:p-2 text-gray-500 mb-4 md:mb-0 max-md:text-xs">
        {tabs.map((tab) => (
          <li key={tab.id} className="h-full cursor-pointer">
            <div data-ripple-light="true" data-popover-target="popover-animation"
              onClick={() => onHandle(tab.id)}
              className={`inline-flex justify-center items-center px-4 py-3 rounded-lg w-full h-full
                
                ${activeTab === tab.id ? " bg-blue-600 text-white" : 
                  "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"}`}
            >
              <p className="">
              {tab.title}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabsComponent;
