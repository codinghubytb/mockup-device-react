import InputTextComponent from "../../library/InputTextComponent.jsx";
import InputColorComponent from "../../library/InputColorComponent.jsx";
import InputNumberComponent from "../../library/InputNumberComponent.jsx";
import InputSelectComponent from "../../library/InputSelectComponent.jsx";
import InputCheckboxComponent from "../../library/InputCheckboxComponent.jsx";
import fonts from "../data/fonts.json"
import { useState } from "react";
import InputRangeComponent from "../../library/InputRangeComponent.jsx";

const TextStyleComponent = ({
    width,
    anchors,
    textStyle,
    updateTextStyle
  }) => {

    const [isBold, setIsBold] = useState(false);

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

        console.log("je suis dedans")
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
    
        updateTextStyle("height", lines.length * textStyle.fontSize * 1.4);
        updateTextStyle("text", value);
        updateTextStyle("lines", lines);
    }

    return (
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-[250px] min-w-[250px]">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Text
            </h3>
            <div className="flex flex-col gap-4">
                <InputTextComponent
                    label="Text"
                    value={textStyle.text}
                    onValueChanged={changeText}
                />

                <div className="flex gap-2">

                    <InputColorComponent
                        value={textStyle.color}
                        onValueChanged={value => updateTextStyle("color", value)}
                        title="Color"
                    />
                    <InputColorComponent
                        value={textStyle.backColor}
                        onValueChanged={value => updateTextStyle("backColor", value)}
                        title="Back Color"
                    />

                </div>

                <div className="flex gap-2">

                    <InputCheckboxComponent
                        value={textStyle.isTransparent} 
                        onValueChanged={value => updateTextStyle("isTransparent", value)} 
                        label="Is Transparent" />

                    <InputCheckboxComponent 
                        label="Bold"
                        value={isBold}
                        onValueChanged={changeStateBold}
                    />
                </div>
                
                <InputRangeComponent
                    label="Font Size"
                    value={textStyle.fontSize}
                    max={50}
                    min={12}
                    onValueChanged={changeFontSize}
                />

                <InputRangeComponent
                    label="Top"
                    value={textStyle.top}
                    max={750}
                    min={0}
                    onValueChanged={value => updateTextStyle("top", value)}
                />

                <InputRangeComponent
                    label="Left"
                    value={textStyle.left}
                    max={200}
                    min={0}
                    onValueChanged={value => updateTextStyle("left", value)}
                />

                

                <InputSelectComponent
                    value={textStyle.anchor}
                    values={anchors}
                    onValueChanged={value => updateTextStyle("anchor", value)}
                    label="Text Anchor"
                />

                <InputSelectComponent
                    value={textStyle.fontFamily.font}
                    values={fonts.map(fontData => fontData.font)}
                    onValueChanged={changeFont}
                    label="Font Family"
                />
                
            </div>
        </div>
    );
  };
  
  export default TextStyleComponent;
  