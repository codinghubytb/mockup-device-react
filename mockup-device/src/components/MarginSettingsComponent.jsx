import InputRangeComponent from "../../library/InputRangeComponent";
import { useTranslation } from "react-i18next";

const MarginSettingsComponent = ({
    margins,
    updateTextStyle,
    updateMargins,
    nbDivisor
  }) => {
    
    const { t } = useTranslation();
    
    return (
      <div className="p-6 text-medium text-gray-800 w-full h-full">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl text-center" >{t("text_margin")}</h1>
          <div className="flex flex-col gap-2">

            <InputRangeComponent
              label={t("text_marginTop")}
              min={Math.floor(-350/nbDivisor)}
              max={Math.floor(400/nbDivisor)}
              value={margins.top}
              onValueChanged={(value) => {
                updateMargins("top", value);
                updateTextStyle("top", 0);
                updateTextStyle("left", 0);
              }}
            />
            <InputRangeComponent
              label={t("text_marginBottom")}
              min={Math.floor(-350/nbDivisor)}
              max={Math.floor(400/nbDivisor)}
              value={margins.bottom}
              onValueChanged={(value) => {
                updateMargins("bottom", value);
                updateTextStyle("top", 0);
                updateTextStyle("left", 0);
              }}
            />
          </div>
  
          <div className="flex gap-2 flex-col">
            <InputRangeComponent
              label={t("text_marginLeft")}
              min={Math.floor(-125/nbDivisor)}
              max={Math.floor(600/nbDivisor)}
              value={margins.left}
              onValueChanged={(value) => {
                updateMargins("left", value);
                updateTextStyle("top", 0);
                updateTextStyle("left", 0);
              }}
            />
            <InputRangeComponent
              label={t("text_marginRight")}
              min={Math.floor(-125/nbDivisor)}
              max={Math.floor(600/nbDivisor)}
              value={margins.right}
              onValueChanged={(value) => {
                updateMargins("right", value);
                updateTextStyle("top", 0);
                updateTextStyle("left", 0);
              }}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default MarginSettingsComponent;
  