import { useState, useEffect } from "react";
import { sendImageForMockup, cleanBase64 } from '../utils/download.jsx';
import TabsComponent from "../../library/TabsComponent.jsx";
import MarginSettingsComponent from "../components/MarginSettingsComponent.jsx";
import BackgroundSettingsComponent from "../components/BackgroundSettingsComponent.jsx";
import TextStyleComponent from "../components/TextStyleComponent.jsx";
import DynamicImageComponent from "../components/DynamicImageComponent.jsx";
import AllModelComponent from "../components/AllModelComponent.jsx";
import datamodels from "../data/models.json"
import BeginComponent from "../components/BeginComponent.jsx";
import { useFileHandler } from "../hooks/useFileHandler.jsx";
import { useTranslation } from "react-i18next";
import NavbarComponent from "../components/NavbarComponent.jsx";
import { fetchDevices } from "../utils/api"; 
import { getBase64FromImage } from "../utils/imageUtils"; 
import useTokenValidation from "../hooks/useTokenValidation.jsx";

function EditMockup() {
  
  //hooks
	const { t } = useTranslation();
  const { isValid, isChecking } = useTokenValidation();
  const { file, setFile, imageSrc, setImageSrc, error, setError, handleFileChange } = useFileHandler(100 * 1024 * 1024);

  //const
  const tabs = [
    { title: "Image", image: "", id:"configuration"},
    { title: t("text_model"), image: "", id:"model"},
    { title: t("text_margin"), image: "", id:"margin"},
    { title: t("text_text"), image: "", id:"text" },
    { title: t("text_background"), image: "", id:"back" }
  ]

  //usestate
  const [devices, setDevices] = useState([]);
  const [device, setDevice] = useState({});
  const [textStyle, setTextStyle] = useState({
    text: "",
    fontFamily: { font: "Arial", factor: 0.5 },
    fontWeight: "",
    color: "#000000",
    backColor: "#000000",
    isTransparent: true,
    anchor: "left",
    fontSize: 24,
    top: 0,
    left: 0,
    height: 0,
    lines: [],
  });
  const [margins, setMargins] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });
  const [backgroundStyle, setBackgroundStyle] = useState({
    type: "Transparent",
    direction: "to right",
    color1: "#ffffff",
    color2: "#b8c3ff",
    radius: 100
  });
  const [anchors] = useState(["left", "center", "right"]);
  const [backgrounds] = useState(["Transparent", "Solid", "Linear", "Radial"]);
  const [directions] = useState(["to right", "to left", "to bottom right", "to bottom left", "to top left", "to top right"]);
  const [nbDivisor, setNbDivisor] = useState(1.7);
  const [activeTab, setActiveTab] = useState(tabs[0].id);


  //fonctions
  const updateMargins = (key, value) =>
    setMargins((prev) => ({ ...prev, [key]: value }));

  const updateBackgroundStyle = (key, value) =>
    setBackgroundStyle((prev) => ({ ...prev, [key]: value }));

  const updateTextStyle = (key, value) =>
    setTextStyle((prev) => ({ ...prev, [key]: value }));

  const changeModel =(model) => {
    setTextStyle(model.textStyle);
    setBackgroundStyle(model.backgroundStyle);
    setMargins(model.margins);
  }


  const download = async () => {

    const result = await sendImageForMockup(
      device.Path,
      cleanBase64(imageSrc),
      'png',
      device.Width,
      device.Height,
      device.BorderTop,
      device.BorderLeft,
      margins.top,
      margins.left,
      margins.bottom,
      margins.right,
      device.CornerRadius,
      backgroundStyle.type.toLowerCase(),
      `${backgroundStyle.color1},${backgroundStyle.color2}`,
      backgroundStyle.direction,
      backgroundStyle.radius,
      textStyle.text,
      textStyle.color,
      textStyle.isTransparent ? "transparent" : textStyle.backColor,
      textStyle.fontSize,
      textStyle.anchor,
      textStyle.fontFamily.font,
      textStyle.fontWeight,
      textStyle.top,
      textStyle.left
    );

    if (!result || !result.image) {
      console.error('Error');
      return; // Arrêter l'exécution de la fonction
    }

    if (result && result.image) {
      const link = document.createElement('a');
      link.href = result.image;
      link.download = 'mockup.png'; // Nom du fichier
      document.body.appendChild(link);
      link.click();
  
      link.remove();
    } else {
      console.error('Échec du téléchargement de l\'image.');
    }
  }  

  const calculMaxTopText = () => {
    let maxTop = Math.floor(device.Height);
    if(margins.top > 0)
      maxTop += Math.floor(margins.top);
    if(margins.bottom > 0)
      maxTop += Math.floor(margins.bottom);

    return ((maxTop - Math.floor(textStyle.height)) );
  }
  
  const calculMaxLeftText = () => {

    let maxLeft = 0;
    if(margins.left > 0)
      maxLeft += Math.floor(margins.left);
    if(margins.right > 0)
      maxLeft += Math.floor(margins.right);

    return maxLeft;
  }

  useEffect(() => {
      if (isValid) {
        
        const fetchDeviceData = async () => {
          try {
            const data = await fetchDevices();  // Récupération des appareils via l'API
            setDevices(data);  // Mise à jour des appareils
            setDevice(data[0]);  // Mise à jour du premier appareil
          } catch (error) {
            setError("Erreur lors de la récupération des appareils.");
          }
        };
    
        fetchDeviceData();

        getBase64FromImage(`/test.jpg`)
          .then((base64) => {
            setImageSrc(base64); // Mettre à jour l'état de l'image en base64
          });
        
      }
  }, [isValid]); 


  useEffect(() => {
    console.log("mis a jour");
    const updateNbDivisor = () => {
      if (window.innerWidth <= 640) { // Taille `sm` en Tailwind
        setNbDivisor(3);
      } else {
        setNbDivisor(1.7); // Taille par défaut
      }
    };

    // Vérifier la taille au chargement initial
    updateNbDivisor();

    // Ajouter un écouteur d'événements pour les redimensionnements
    window.addEventListener("resize", updateNbDivisor);

    // Nettoyer l'écouteur lorsque le composant est démonté
    return () => window.removeEventListener("resize", updateNbDivisor);
  }, []);

  
  if (isChecking) {
    return <p>Vérification en cours...</p>;
  }

  if (!isValid) {
      return <p>Accès non autorisé.</p>;
  }

   return (
    <div className="bg-gray-100">
    

      <NavbarComponent onDownload={download} />
      
      <div className="flex flex-col-reverse gap-3 justify-center max-lg:gap-0 lg:flex-row" 
      style={{minHeight: "calc(100vh - 5rem)"}} >
    
        <div className="flex w-full " style={{minHeight: "calc(100vh - 5rem)"}} >


          <TabsComponent activeTab={activeTab}
            tabs={tabs} 
            onActiveTab={value => setActiveTab(value)}/>
          
          {activeTab === "margin" && 
            <MarginSettingsComponent 
              margins={margins}
              updateTextStyle={updateTextStyle}
              updateMargins={updateMargins}
              nbDivisor={nbDivisor}/>}

          {activeTab === "back" && 
            <BackgroundSettingsComponent
              backgrounds={backgrounds}
              directions={directions}
              backgroundStyle={backgroundStyle}
              updateBackgroundStyle={updateBackgroundStyle}/> }  

          {activeTab === "text" && 
                <TextStyleComponent
                  width={device.Width}
                  nbDivisor={nbDivisor}
                  anchors={anchors}
                  textStyle={textStyle}
                  maxTop={calculMaxTopText()}
                  maxLeft={calculMaxLeftText()}
                  updateTextStyle={updateTextStyle}/> 
          } 

          {activeTab === "model" && 
                <AllModelComponent
                  nbDivisor = {6}
                  onModelClick={changeModel}
                  device={device}
                  imageSrc={imageSrc}
                  models={datamodels}/> 
          }

          {activeTab === "configuration" && 
                <BeginComponent 
                  onHandleImage={handleFileChange}
                  error={error}
                  onDownload={download}
                  devices={devices}
                  device={device}
                  setDevice={setDevice}
                  /> 
          }  
          
        </div>

        <div className="flex w-full bg-blue-50/40  justify-center items-center border-gray-800  border-0 lg:border-l-2 max-lg:border-b-2 " >
          <div className="">
            <DynamicImageComponent 
            device={device}
            nbDivisor = {nbDivisor}
            textStyle={textStyle}
            margins={margins}
            backgroundStyle={backgroundStyle}
            imageSrc={imageSrc}
            />

          </div>

        </div>

      </div>
    
    </div>
  ); 
}

export default EditMockup;
