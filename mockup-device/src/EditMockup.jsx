import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import WrapperComponent from "../library/WrapperComponent.jsx";
import { sendImageForMockup, cleanBase64 } from './utils/download.jsx';
import TabsComponent from "../library/TabsComponent.jsx";
import MarginSettingsComponent from "./components/MarginSettingsComponent.jsx";
import BackgroundSettingsComponent from "./components/BackgroundSettingsComponent.jsx";
import TextStyleComponent from "./components/TextStyleComponent.jsx";
import DynamicImageComponent from "./components/DynamicImageComponent.jsx";
import AllModelComponent from "./components/AllModelComponent.jsx";
import datamodels from "./data/models.json"
import BeginComponent from "./components/BeginComponent.jsx";
import { useFileHandler } from "./hooks/useFileHandler .jsx";

function EditMockup() {
  const location = useLocation();
  const { device } = location.state || {}; // Accéder aux paramètres cachés
 
  //hooks
  const { file, imageSrc, error, handleFileChange } = useFileHandler(100 * 1024 * 1024);

  //usestate
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
    top: 100,
    bottom: 100,
    left: 100,
    right: 100,
  });

  const [backgroundStyle, setBackgroundStyle] = useState({
    type: "Linear",
    direction: "to right",
    color1: "#ffffff",
    color2: "#AEEADB",
    radius: 75,
  });
  
  const [anchors] = useState(["left", "center", "right"]);
  const [backgrounds] = useState(["Transparent", "Solid", "Linear", "Radial"]);
  const [directions] = useState(["to right", "to left", "to bottom right", "to bottom left", "to top left", "to top right"]);
  const [nbDivisor] = useState(1.7);
  const [activeTab, setActiveTab] = useState("begin");

  //fonctions
  const updateMargins = (key, value) =>
    setMargins((prev) => ({ ...prev, [key]: value }));

  const updateBackgroundStyle = (key, value) =>
    setBackgroundStyle((prev) => ({ ...prev, [key]: value }));

  const updateTextStyle = (key, value) =>
    setTextStyle((prev) => ({ ...prev, [key]: value }));


  const changeModel =(model) => {

  }

  const download = async () => {

    console.log(`{
      "margins" : {
          "top": ${margins.top},
          "bottom": ${margins.bottom},
          "left": ${margins.left},
          "right": ${margins.right}
      },
      "backgroundStyle" : {
          "type": "${backgroundStyle.type}",
          "direction": "${backgroundStyle.direction}",
          "color1": "${backgroundStyle.color1}",
          "color2": "${backgroundStyle.color2}",
          "radius": ${backgroundStyle.radius}
      },
      "textStyle" : {
          "text": "${textStyle.text}", 
          "fontFamily": {"font":"${textStyle.fontFamily.font}",
           "factor": ${textStyle.fontFamily.factor} },
          "fontWeight": "${textStyle.fontWeight}",
          "color": "${textStyle.color}", 
          "backColor": "${textStyle.backColor}",
          "isTransparent": ${textStyle.isTransparent},
          "anchor": "${textStyle.anchor}",
          "fontSize": ${textStyle.fontSize},
          "top": ${textStyle.top},
          "left": ${textStyle.left},
          "height": ${textStyle.height},
          "lines": "[${textStyle.lines}]"
      }


  }`)

    /*const result = await sendImageForMockup(
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
    console.log(result.image)*/
  }  

  return (
    <div className="flex gap-3  flex-col min-h-screen  h-full p-3 sm:flex-row">
      <WrapperComponent backgroundColor="lightgray" isUseBoxShadow={true} >

        <DynamicImageComponent 
          device={device}
          nbDivisor = {nbDivisor}
          textStyle={textStyle}
          margins={margins}
          backgroundStyle={backgroundStyle}
          imageSrc={imageSrc}
        />

      </WrapperComponent>

      <div className="md:flex">

        {activeTab == "close" && <></> }

        {activeTab === "margin" && 
          <MarginSettingsComponent 
            margins={margins}
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
                anchors={anchors}
                textStyle={textStyle}
                updateTextStyle={updateTextStyle}/> 
        } 

        {activeTab === "device" && 
              <AllModelComponent
                nbDivisor = {4}
                onModelClick={changeModel}
                device={device}
                imageSrc={imageSrc}
                models={datamodels}/> 
        }

        {activeTab === "begin" && 
              <BeginComponent 
                onHandleImage={handleFileChange}
                error={error}
                onDownload={download}/> 
        }  
        
        <TabsComponent activeTab={activeTab}
          tabs={ [
            { title: "Begin", image: "/icon/home.svg", id:"begin"},
            { title: "Modèle", image: "/icon/device.svg", id:"device"},
            { title: "Margin", image: "/icon/margin.svg", id:"margin"},
            { title: "Text", image: "/icon/text.svg", id:"text" },
            { title: "Background-Color", image: "/icon/backcolor.svg", id:"back" },
            { title: "Disabled", image: "/icon/disabled.svg", id:"close" },
          ]} 
          onActiveTab={value => setActiveTab(value)}/>
          
      </div>

    </div>
  );
}

export default EditMockup;
