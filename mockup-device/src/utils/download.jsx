import axios from 'axios';

const sendImageForOperation = async (path, deviceBase64, base64Image, extension, additionalParams) => {
  try {
    // Convertir les images base64 en Blob
    const imageBlob = base64ToBlob(deviceBase64, extension);
    const formData = new FormData();
    formData.append('device', imageBlob, `device.${extension}`);

    // Ajouter la watermark si elle est fournie
    if (base64Image) {
      const watermarkBlob = base64ToBlob(base64Image, "png");
      formData.append('screenshot', watermarkBlob, `screenshot.png`);
    }

    // Ajouter les paramètres supplémentaires à la requête
    Object.keys(additionalParams).forEach((key) => {
      formData.append(key, additionalParams[key]);
    });

    // Envoyer la requête POST
    const response = await axios.post(path, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 200) {
      return response.data; // Réponse au format JSON
    } else {
      return { error: 'Erreur : Transformation de l\'image échouée' };
    }
  } catch (error) {
    console.error(error);
    return { error: 'Erreur : Transformation de l\'image échouée' };
  }
};

// Fonction utilitaire pour convertir Base64 en Blob
const base64ToBlob = (base64, extension) => {
  const byteCharacters = atob(base64);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
    const slice = byteCharacters.slice(offset, offset + 1024);
    const byteNumbers = Array.from(slice).map((char) => char.charCodeAt(0));
    byteArrays.push(new Uint8Array(byteNumbers));
  }
  return new Blob(byteArrays, { type: `image/${extension}` });
};

// Exemple d'appel de la fonction
export const sendImageForMockup = async (deviceBase64, base64Image, extension, width, height, bordertop, borderleft, marginTop, marginLeft, marginBottom, marginRight, cornerRadius, gradientType = "solid", gradientColors = "transparent", gradientDirection = "to top right", radius = 50, text, textColor, backColor, fontSize, textAnchor,
  font, fontWeight, topText, leftText) => {
  console.log(font)
  return await sendImageForOperation('http://localhost:3001/mockup/generate', deviceBase64, base64Image, 'png', {
    width: width.toString(),
    height: height.toString(),
    bordertop: bordertop.toString(),
    borderleft: borderleft.toString(),
    marginTop: marginTop.toString(),
    marginLeft: marginLeft.toString(),
    marginBottom: marginBottom.toString(),
    marginRight: marginRight.toString(),
    gradientType: gradientType,
    gradientColors: gradientColors,
    gradientDirection: gradientDirection,
    radius: `${radius}%`,
    cornerRadius: cornerRadius.toString(),
    text: text.toString(),
    textColor: textColor.toString(),
    backColor: backColor.toString(),
    fontSizeText: fontSize.toString(),
    textAnchor: textAnchor.toString(),
    fontFamily: font.toString(),
    fontWeight: fontWeight.toString(),
    topText: topText.toString(),
    leftText: leftText.toString()
  });
};


export const cleanBase64 = (base64) => {
  const base64Pattern = /^data:image\/[a-zA-Z]*;base64,/;
  return base64.replace(base64Pattern, "");
};

