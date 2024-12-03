/**
 * Génère un SVG pour une couleur unie.
 * @param {string} color - La couleur à utiliser.
 * @returns {string} - Le code SVG en tant que chaîne.
 */
export const CreateSolidColorSvg = (color) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="100%" height="100%" fill="${color}" />
  </svg>
`;

  /**
   * Génère un SVG pour un dégradé linéaire.
   * @param {string[]} colors - Tableau de couleurs à utiliser dans le dégradé.
   * @param {string} direction - La direction du dégradé (ex: "to right").
   * @returns {string} - Le code SVG en tant que chaîne.
   */
  export const CreateLinearGradientSvg = (colors, direction) => {
    const directions = {
      "to top left": ["100%", "100%", "0%", "0%"],
      "to top right": ["0%", "100%", "100%", "0%"],
      "to right": ["0%", "50%", "100%", "50%"],
      "to left": ["100%", "50%", "0%", "50%"],
      "to bottom right": ["0%", "0%", "100%", "100%"],
      "to bottom left": ["100%", "0%", "0%", "100%"],
    };
  
    const [x1, y1, x2, y2] = directions[direction?.toLowerCase()] || directions["to right"];
  
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="grad1" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">
          ${colors
            .map((color, index) => `<stop offset="${(index / (colors.length - 1)) * 100}%" stop-color="${color}" />`)
            .join("")}
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad1)" />
    </svg>`;
  };
  
  /**
   * Génère un SVG pour un dégradé radial.
   * @param {string[]} colors - Tableau de couleurs à utiliser dans le dégradé.
   * @param {number} radius - Rayon du dégradé (en pourcentage).
   * @returns {string} - Le code SVG en tant que chaîne.
   */
  export const CreateRadialGradientSvg = (colors, radius) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="${radius}%">
          ${colors.map((color, index) => `
            <stop
              offset="${(index / (colors.length - 1)) * 100}%"
              stop-color="${color}"
            />
          `).join('')}
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad1)" />
    </svg>
  `;

  
  
 {/*} export const GenerateSvgText = (
    text = "Your editable text",
    fontSize = 24,
    fontFamily = "Arial",
    textColor = "#000000",
    backgroundColor = "#ffffff",
    maxWidth = 300,
    height = 200,
  ) => `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      style="
        position : absolute;
        top:0;
        left: ;
      "

    >
      <foreignObject width="100%" height="100%">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style="
            font-size: ${fontSize}px;
            font-family: ${fontFamily};
            color: ${textColor};
            word-wrap: break-word;
            white-space: pre-wrap;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 100%;
            height: 100%;
            background-color: ${backgroundColor};
          "
        >
          ${text}
        </div>
      </foreignObject>
    </svg>
  `;
  */}
  
  