export const CreateSolidColorSvg = ({id = `range-${Math.random().toString(36).substr(2, 9)}`, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute top-0 left-0">
      <rect width="100%" height="100%" fill={color} />
    </svg>
  );


export const CreateLinearGradientSvg = ({id = `range-${Math.random().toString(36).substr(2, 9)}`, colors = [], direction = "to right" }) => {
  // Vérifier que colors est un tableau valide avant d'utiliser .map
  if (!Array.isArray(colors) || colors.length === 0) {
    return <div>Invalid or empty color array</div>;
  }

  const directions = {
    "to top left": ["100%", "100%", "0%", "0%"],
    "to top right": ["0%", "100%", "100%", "0%"],
    "to right": ["0%", "50%", "100%", "50%"],
    "to left": ["100%", "50%", "0%", "50%"],
    "to bottom right": ["0%", "0%", "100%", "100%"],
    "to bottom left": ["100%", "0%", "0%", "100%"],
  };

  // Extraire les coordonnées à partir de la direction, ou utiliser "to right" par défaut
  const [x1, y1, x2, y2] = directions[direction?.toLowerCase()] || directions["to right"];

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"   className="absolute top-0 left-0">
      <defs>
        <linearGradient id={id}  x1={x1} y1={y1} x2={x2} y2={y2}>
          {/* Vérification de l'existence de colors avant d'utiliser map */}
          {colors.map((color, index) => (
            <stop
              key={index}
              offset={`${(index / (colors.length - 1)) * 100}%`}
              stopColor={color}
            />
          ))}
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}  />
    </svg>
  );
};
  

export const CreateRadialGradientSvg = ({id = `range-${Math.random().toString(36).substr(2, 9)}`, colors = [], radius = 50 }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  className="absolute top-0 left-0">
        <defs>
          <radialGradient id={id} cx="50%" cy="50%" r={`${radius}%`}>
            {colors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (colors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    );
  };

export const createTextSvg = (width, height, textStyle, nbDivisor) => {

  let xPosition;
  let anchor;

  switch (textStyle.anchor) {
    case "center":
      xPosition = width / 2;
      anchor = "middle";
      break;
    case "right":
      xPosition = width;
      anchor = "end";
      break;
    case "left":
    default:
      xPosition = 0;
      anchor = "start";
      break;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className="absolute z-40"
      style={{ top: `${textStyle.top / nbDivisor}px`, left: `${textStyle.left / nbDivisor}px` }}  >
      <rect width="100%" height="100%" fill={`${textStyle.isTransparent ? "transparent" : textStyle.backColor}`} />
      {textStyle.lines.map((line, index) => (
        <text
          key={index}
          x={xPosition}
          fontFamily={textStyle.fontFamily.font}
          fontWeight={textStyle.fontWeight}
          y={(index + 1) * (Math.floor(textStyle.fontSize) / nbDivisor) * 1.2}
          style={{ fontSize: `${(Math.floor(textStyle.fontSize) / nbDivisor)}px`, fill: `${textStyle.color}` }}
          textAnchor={`${anchor}`}
        >
          {line}
        </text>
      ))}
    </svg>
  );
};
  
  