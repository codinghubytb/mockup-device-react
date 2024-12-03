import React from 'react';

const WrapperComponent = ({
  backgroundColor = "#fff",
  paddingInPx = 30,
  isUseBoxShadow = true,
  children
}) => {
  const boxShadow = isUseBoxShadow 
    ? "shadow-lg"
    : "";

  return (
    <div
      className={` min-h-full  w-full max-w-full shadow-lg rounded-md`}
      style={{
        backgroundColor: backgroundColor,
        padding: `${paddingInPx}px`,
        boxShadow: boxShadow
      }}
    >
      {children}
    </div>
  );
};

export default WrapperComponent;
