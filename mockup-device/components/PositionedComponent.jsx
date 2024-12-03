import React, { useEffect, useState } from 'react';

const PositionedComponent = ({
  backgroundColor = "#fff",
  positionContent = "top-center",
  children
}) => {
  const [positionStyle, setPositionStyle] = useState('');

  useEffect(() => {
    const positionMap = {
      "top-left": " justify-start items-start",
      "top-center": " justify-center items-start",
      "top-right": "justify-end items-center",
      "center-left": "justify-start items-center",
      "center-center": "justify-center items-center",
      "center-right": "justify-end items-center",
      "bottom-left": "justify-start items-end",
      "bottom-center": "justify-center items-end",
      "bottom-right": "justify-end items-end",
      "full": "",
    };

    setPositionStyle(positionMap[positionContent.toLowerCase()] || "position-center-center");
  }, [positionContent]);

  return (
    <div
      className={` min-h-full w-full flex relative ${positionStyle}`}
      style={{
        backgroundColor: backgroundColor
      }}
    >
      {children}
    </div>
  );
};

export default PositionedComponent;
