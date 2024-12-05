import React, { useState } from "react";

const Navbar = ({ toggleSidebar }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <nav className="sticky top-0 z-20 bg-white flex justify-between items-center pr-2 p-2 w-full shadow-md">
      <div className="flex items-center justify-center gap-2">
        <img src="tools.svg" className=" w-8 h-full *:justify-center items-center flex min-w-14 border-r-8"/>
        <div className="text-3xl font-bold"  onClick={toggleSidebar}>ToolsStudio</div>
      </div>
      <img src="tools.svg" className=" w-8 h-full *:justify-center items-center flex min-w-14 border-r-8"/>
        
    </nav>
    
  );
};

export default Navbar;
