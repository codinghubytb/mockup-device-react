import InputTextComponent from "../../library/InputTextComponent.jsx";
import InputColorComponent from "../../library/InputColorComponent.jsx";
import InputNumberComponent from "../../library/InputNumberComponent.jsx";
import InputSelectComponent from "../../library/InputSelectComponent.jsx";
import InputCheckboxComponent from "../../library/InputCheckboxComponent.jsx";
import fonts from "../data/fonts.json"
import { useEffect, useState } from "react";
import InputRangeComponent from "../../library/InputRangeComponent.jsx";
import { useTranslation } from "react-i18next";

const TextStyleComponent = ({
    width,
    nbDivisor,
    anchors,
    textStyle,
    maxTop,
    maxLeft,
    updateTextStyle
  }) => {

    const { t } = useTranslation();

    const [isBold, setIsBold] = useState(textStyle.fontWeight === "bold");

    const changeStateBold = (value) => {
        setIsBold(value);
        if(value)
            updateTextStyle("fontWeight", "bold");
        else
            updateTextStyle("fontWeight", "");
    }

    const changeFont = (value) => {
        const fontFamily = fonts.find(font => font.font === value);
        updateTextStyle("fontFamily", fontFamily);
        changeText(textStyle.text);
    }

    const changeFontSize = (value) => {
        updateTextStyle("fontSize", value);
        changeText(textStyle.text);
    }
    
    const changeText = (value) => {

        const words = value.split(' ');
        let line = '';
        let lines = [];
    
        for (let i = 0; i < words.length; i++) {
        let testLine = line + (line ? ' ' : '') + words[i];
    
        const widthOfText = testLine.length * textStyle.fontSize * textStyle.fontFamily.factor;
    
        if (widthOfText > width) {
            lines.push(line); 
            line = words[i];
        } else {
            line = testLine;
        }
        }
        lines.push(line);
    
        updateTextStyle("height", (lines.length * textStyle.fontSize * 1.4));
        updateTextStyle("text", value);
        updateTextStyle("lines", lines);

    }

    useEffect(() => {
        changeText(textStyle.text);
      }, []);

    return (
        <div className="p-6 text-medium text-gray-800 bg-transparent w-full">
            <h1 className="text-3xl text-center" >{t("text_text")}</h1>
            <div className="flex flex-col gap-4">
                <InputTextComponent
                    label={t("text_text")}
                    value={textStyle.text}
                    onValueChanged={changeText}
                />

                <div className="flex gap-2">

                    <InputColorComponent
                        value={textStyle.color}
                        onValueChanged={value => updateTextStyle("color", value)}
                        title={t("text_color")}
                    />
                    <InputColorComponent
                        value={textStyle.backColor}
                        onValueChanged={value => updateTextStyle("backColor", value)}
                        title={t("text_backColor")}
                    />

                </div>

                <div className="flex gap-2">

                    <InputCheckboxComponent
                        value={textStyle.isTransparent} 
                        onValueChanged={value => updateTextStyle("isTransparent", value)} 
                        label={t("text_transparent")} />

                    <InputCheckboxComponent 
                        label={t("text_bold")}
                        value={isBold}
                        onValueChanged={changeStateBold}
                    />
                </div>
                
                <InputRangeComponent
                    label={t("text_fontSize")}
                    value={textStyle.fontSize}
                    max={50}
                    min={12}
                    onValueChanged={changeFontSize}
                />

                <div className="flex flex-row gap-3 max-lg:flex-col">

                    <InputRangeComponent
                        label={t("text_top")}
                        value={textStyle.top }
                        max={maxTop}
                        min={0}
                        onValueChanged={value => updateTextStyle("top", value)}
                    />

                    
                    <InputRangeComponent
                        label={t("text_left")}
                        value={textStyle.left}
                        max={maxLeft}
                        min={0}
                        onValueChanged={value => updateTextStyle("left", value)}
                    />
          
                </div>

          
                

                <InputSelectComponent
                    value={textStyle.anchor}
                    values={anchors}
                    onValueChanged={value => updateTextStyle("anchor", value)}
                    label={t("text_anchor")}
                />

                <InputSelectComponent
                    value={textStyle.fontFamily.font}
                    values={fonts.map(fontData => fontData.font)}
                    onValueChanged={changeFont}
                    label={t("text_fontFamily")}
                />
                
            </div>
          
        </div>
    );
  };
  
  export default TextStyleComponent;
  