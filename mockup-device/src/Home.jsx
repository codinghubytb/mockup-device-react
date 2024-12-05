import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CardDevice from "../library/CardDevice"

function Home() {
  const [data, setData] = useState([])

  const navigate = useNavigate();
  const handleNavigate = (value) => {
    const item = data.find(element => element._id === value);
    const hiddenParams = { device: item }; // Paramètres cachés
    navigate("/edit", { state: hiddenParams }); // Redirection avec état caché
    
  };

  const generate = () => {
    const apiUrl = import.meta.env.VITE_APIDATA;
      fetch(`${apiUrl}/collection?database=mockupgenerator&collection=device`)
        .then(response => response.json())
        .then(data => {
          setData(data);
          console.log(data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des modules:', error);
        });
  }

  return (
    <>
      <div className='flex items-center flex-col pt-4 pb-4'>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center dark:text-white">Construisez vos mockup device</h1>
          <p onClick={generate} className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">Choissiez un modéle pour commencer pour pouvoir l'editer </p>
      </div>
      <div  className='flex justify-center flex-wrap gap-3'>
        {data.map((device, index) => (
            <CardDevice 
            onHandleClick={value => handleNavigate(value)} id={device._id} name={`data:image\png;base64,${device.Path}`}
            title={device.Name} key={device._id}/>
        ))}
      </div>
    </>
   
  );
}

export default Home;