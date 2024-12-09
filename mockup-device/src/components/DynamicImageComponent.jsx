import React from "react";
import { CreateSolidColorSvg, CreateLinearGradientSvg, CreateRadialGradientSvg, createTextSvg } from '../utils/gradients.jsx';

const DynamicImageComponent = ({
  device,
  nbDivisor = 1,
  textStyle,
  margins,
  backgroundStyle,
  imageSrc,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className="overflow-hidden border-black border border-opacity-10  min-h-full"
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {textStyle.text && 
       createTextSvg(
        device.Width / nbDivisor,
        textStyle.height,
        textStyle,
        nbDivisor
      ) }

      {/* Background options */}
      {backgroundStyle.type === "Solid" && <CreateSolidColorSvg color={backgroundStyle.color1} />}
      {backgroundStyle.type === "Transparent" && (
        <CreateSolidColorSvg color="transparent" />
      )}
      {backgroundStyle.type === "Linear" && (
        <CreateLinearGradientSvg
          colors={[backgroundStyle.color1, backgroundStyle.color2]}
          direction={backgroundStyle.direction}
        />
      )}
      {backgroundStyle.type === "Radial" && (
        <CreateRadialGradientSvg colors={[backgroundStyle.color1, backgroundStyle.color2]} radius={backgroundStyle.radius} />
      )}

      {/* Overlay container */}
      <div
        className="relative bg-transparent z-20 h-full min-h-full"
        style={{
          height: `${device.Height / nbDivisor}px`, // Base height without margins
          width: `${device.Width / nbDivisor}px`, // Base width without margins
          marginLeft: `${
            margins.right < 0
              ? margins.left / nbDivisor - margins.right / nbDivisor
              : margins.left / nbDivisor
          }px`,
          marginTop: `${
            margins.bottom < 0
              ? margins.top / nbDivisor - margins.bottom / nbDivisor
              : margins.top / nbDivisor
          }px`,
          marginRight: `${
            margins.left < 0
              ? margins.right / nbDivisor - margins.left / nbDivisor
              : margins.right / nbDivisor
          }px`,
          marginBottom: `${
            margins.top < 0
              ? margins.bottom / nbDivisor - margins.top / nbDivisor
              : margins.bottom / nbDivisor
          }px`,
        }}
      >
        {device && device.Path && <img
          src={`data:image/png;base64,${device.Path}`}
          alt="Uploaded"
          style={{
            height: "100%",
            width: "100%",
            zIndex: 1,
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />}
       
        {imageSrc && <img
          src={imageSrc}
          alt="Overlay"
          style={{
            position: "absolute",
            top: `${device.BorderTop / nbDivisor}px`,
            left: `${device.BorderLeft / nbDivisor}px`,
            width: `calc(100% - ${device.BorderLeft / (nbDivisor /2)}px)`, // Takes into account left and right spacing
            height: `calc(100% - ${device.BorderTop / (nbDivisor /2)}px)`, // Takes into account top and bottom spacing
            borderRadius: `${device.CornerRadius}px`,
          }}
        /> }
      </div>
    </div>
  );
};

export default DynamicImageComponent;
