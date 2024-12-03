import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import WrapperComponent from "../components/WrapperComponent";
import PositionedComponent from "../components/PositionedComponent";
import InputSelectComponent from "../components/InputSelectComponent";
import InputRadioComponent from "../components/InputRadioComponent";
import InputNumberComponent from "../components/InputNumberComponent";
import InputColorComponent from "../components/InputColorComponent";
import InputRangeComponent from "../components/InputRangeComponent";
import InputTextComponent from "../components/InputTextComponent";
import InputFileComponent from "../components/InputFileComponent";
import { CreateSolidColorSvg, CreateLinearGradientSvg, CreateRadialGradientSvg } from './utils/gradients.jsx';
import sendImageForMockup from './utils/download.jsx';

function EditMockup() {
  const location = useLocation();
  const { device } = location.state || {}; // Accéder aux paramètres cachés

  console.log(device);
  const [file, setFile] = useState(null);
  const [nbDivisor] = useState(2);
  const [error, setError] = useState(null);
  const [imageSrc,setImageSrc] = useState(null);
  const [marginTop, setMarginTop] = useState(100);
  const [marginBottom, setMarginBottom] = useState(100);
  const [marginLeft, setMarginLeft] = useState(100);
  const [marginRight, setMarginRight] = useState(100);
  const [background] = useState(["Transparent", "Solid", "Linear", "Radial"]);
  const [direction] = useState(["to right", "to left", "to bottom right", "to bottom left", "to top left", "to top right"]);
  const [valueDirection, setValueDirection] = useState(direction[0]);
  const [valueBackground, setValueBackground] = useState(background[2]);
  const [color1, setColor1] = useState("#ffffff");
  const [color2, setColor2] = useState("#AEEADB");
  const [radius, setRadius] = useState(75);
  const [activeTab, setActiveTab] = useState("background");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const maxFileSize = 1024 * 100; // 100 KB

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      setError("No file selected.");
      return;
    }

    if (selectedFile.size > maxFileSize) {
      setError("The file is too large. Please select a file less than 100 KB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setFile(selectedFile);
      setImageSrc(e.target.result);
      setError("");
    };
    reader.onerror = () => {
      setError("Error reading the file.");
    };
    reader.readAsDataURL(selectedFile);
  };

  const cleanBase64 = (base64) => {
    const base64Pattern = /^data:image\/[a-zA-Z]*;base64,/;
    return base64.replace(base64Pattern, "");
  };

  const download = async () => {
    const result = await sendImageForMockup(
      device.Path,
      cleanBase64(imageSrc),
      'png',
      device.Width,
      device.Height,
      device.BorderTop,
      device.BorderLeft,
      marginTop,
      marginLeft,
      marginBottom,
      marginRight,
      device.CornerRadius,
      valueBackground.toLowerCase(),
      `${color1},${color2}`,
      valueDirection,
      radius
    );
    console.log(result.image)
  }  

  return (
    <div className="flex gap-3  flex-col min-h-screen  h-full p-3 sm:flex-row">
      <WrapperComponent backgroundColor="lightgray" isUseBoxShadow={true} >

        <div className="overflow-hidden" 
            style={{
              position: "relative",
              display: "inline-block"
            }}>
          
          { valueBackground === "Solid" && <CreateSolidColorSvg color={color1} /> }
          { valueBackground === "Transparent" && <CreateSolidColorSvg color="transparent" /> }
          { valueBackground === "Linear" && <CreateLinearGradientSvg colors={[color1, color2]} direction={valueDirection} /> }
          { valueBackground === "Radial" && <CreateRadialGradientSvg colors={[color1, color2]} radius={radius} /> }
          
          <div className="relative bg-transparent z-20"
              style={{
                height: `${device.Height / nbDivisor}px`, // La hauteur de base sans marges
                width: `${device.Width / nbDivisor}px`, // La largeur de base sans marges
                marginLeft: `${marginRight < 0 ? marginLeft / nbDivisor  - marginRight / nbDivisor : marginLeft / nbDivisor}px`,
                marginTop: `${marginBottom < 0 ? marginTop / nbDivisor  - marginBottom / nbDivisor : marginTop / nbDivisor}px`,
                marginRight: `${marginLeft < 0 ? marginRight / nbDivisor  - marginLeft / nbDivisor : marginRight / nbDivisor}px`,
                marginBottom: `${marginTop < 0 ? marginBottom / nbDivisor  - marginTop / nbDivisor : marginBottom / nbDivisor}px`,
              }}>
            
            <img
              src={`data:image\png;base64,${device.Path}`}
              alt="Uploaded"
              style={{
                height: "100%",
                width: "100%",
                zIndex: 1,
                position: "absolute",
                top: "0",
                left: "0"
              }}
            />

            <img 
              src={imageSrc}
              alt="Uploaded"
              style={{
                position: "absolute",
                top: `${device.BorderTop / nbDivisor}px`,
                left: `${device.BorderLeft / nbDivisor}px`,
                width: `calc(100% - ${device.BorderLeft}px)`, // Prend en compte l'espacement gauche et droit
                height: `calc(100% - ${device.BorderTop}px)`, // Prend en compte l'espacement haut et bas
                borderRadius: `${device.CornerRadius}px`,
              }}
            />
          </div>
        </div>

      </WrapperComponent>

      <PositionedComponent backgroundColor="transparent" positionContent="top-left">
        <WrapperComponent>
          <div className="flex justify-between flex-col gap-5">
            <div className="flex items-center">
            <h1 className="font-bold leading-snug 
              tracking-tight text-slate-800 mx-auto my-6 w-full text-2xl lg:max-w-3xl lg:text-5xl">
              Mockup Device Edit
            </h1> 
            <button onClick={download} className="w-auto rounded-md bg-slate-800 py-2 px-4 
              border border-transparent text-center text-base text-white 
              transition-all shadow-md hover:shadow-lg focus:bg-slate-700 
              focus:shadow-none active:bg-slate-700 hover:bg-slate-700 
              active:shadow-none disabled:pointer-events-none disabled:opacity-50 
              disabled:shadow-none " type="button">
              Download
            </button>
            </div>
            
            { 
              file !== null ? 
              <>
                <div className="flex flex-col gap-5">
                  <div className="flex justify-around items-center flex-wrap gap-2">
                    <InputNumberComponent
                      label="Margin Top"
                      placeholder={0}
                      min={-(device.Height / 2)}
                      max={(device.Height / 2)}
                      value={marginTop}
                      onValueChanged={(value) => setMarginTop(value)} />
                    <InputNumberComponent
                      label="Margin Bottom"
                      placeholder={0}
                      min={-(device.Height / 2)}
                      max={(device.Height / 2)}
                      value={marginBottom}
                      onValueChanged={(value) => setMarginBottom(value)} />
                  </div>

                  <div className="flex gap-2 justify-around items-center flex-wrap">
                    <InputNumberComponent
                      label="Margin Left"
                      placeholder={0}
                      min={-(device.Width / 2)}
                      max={(device.Width / 2)}
                      value={marginLeft}
                      onValueChanged={(value) => setMarginLeft(value)} />
                    <InputNumberComponent
                      label="Margin Right"
                      placeholder={0}
                      min={-(device.Width / 2)}
                      max={(device.Width / 2)}
                      value={marginRight}
                      onValueChanged={(value) => setMarginRight(value)} />
                  </div>
                </div>

                <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full p-2">
                  <div className="w-full">
                    <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100" data-tabs="tabs" role="list">
                      <li className="z-30 flex-auto text-center">
                        <a
                          onClick={() => handleTabClick("background")}
                          className={`flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer ${activeTab === "background" ? "bg-white" : "bg-inherit"}`}
                          aria-selected={activeTab === "background"}
                          aria-controls="background"
                        >
                          Background
                        </a>
                      </li>
                      <li className="z-30 flex-auto text-center">
                        <a
                          onClick={() => handleTabClick("text")}
                          className={`flex items-center justify-center w-full px-0 py-2 mb-0 text-sm transition-all ease-in-out border-0 rounded-lg cursor-pointer ${activeTab === "text" ? "bg-white" : "bg-inherit"}`}
                          aria-selected={activeTab === "text"}
                          aria-controls="text"
                        >
                          Text
                        </a>
                      </li>
                    </ul>

                    <div data-tab-content="" className="p-3">
                      {/* Section pour "Background" */}
                      <div id="background" role="tabpanel" className={activeTab === "background" ? "block" : "hidden"}>
                        <div>
                          <div>
                            <InputRadioComponent
                              value={valueBackground}
                              values={background}
                              onValueChanged={setValueBackground}
                            />
                            {valueBackground !== "Transparent" && (
                              <div className="flex flex-col gap-5 mt-3">
                                <div className="flex justify-between">
                                  <InputColorComponent
                                    value={color1}
                                    onValueChanged={setColor1}
                                    title="Color 1"
                                  />
                                  {(valueBackground === "Linear" || valueBackground === "Radial") && (
                                    <InputColorComponent
                                      value={color2}
                                      onValueChanged={setColor2}
                                      title="Color 2"
                                    />
                                  )}
                                </div>
                                {valueBackground === "Linear" && (
                                  <InputSelectComponent
                                    values={direction}
                                    onValueChanged={setValueDirection}
                                    label="Direction"
                                  />
                                )}
                                {valueBackground === "Radial" && (
                                  <InputRangeComponent
                                    value={radius}
                                    onValueChanged={setRadius}
                                    label="Radius"
                                  />
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Section pour "Text" */}
                      <div id="text" role="tabpanel" className={activeTab === "text" ? "block" : "hidden"}>
                        {/*<InputTextComponent
                          label="Text"
                          onValueChanged={(value) => setMarginTop(value)} /> */}
                        <p className="p-2">Pas encore disponible</p>
                      </div>
                    </div>
                  </div>
                </div>
              </> 
              : 
              <InputFileComponent onFileChange={handleFileChange} maxSize={1024*1024*10}/>
            }

           

           
            
          </div>
        </WrapperComponent>
      </PositionedComponent>
    </div>
  );
}

export default EditMockup;
