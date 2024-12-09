export const getBase64FromImage = async (imagePath) => {
    try {
      const response = await fetch(imagePath); // Charge l'image
      const blob = await response.blob(); // Convertit la réponse en Blob
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result); // Renvoie la chaîne base64
        reader.onerror = reject; // Gestion des erreurs
        reader.readAsDataURL(blob); // Lit le blob en tant que DataURL
      });
    } catch (error) {
      throw error;
    }
  };


  export const genereDataModel = () => {
    
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
  }