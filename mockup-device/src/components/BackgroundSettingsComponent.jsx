import InputSelectComponent from "../../library/InputSelectComponent.jsx";
import InputColorComponent from "../../library/InputColorComponent.jsx";
import InputRangeComponent from "../../library/InputRangeComponent.jsx";
import { useTranslation } from "react-i18next";

const BackgroundSettingsComponent = ({
    backgrounds,
    directions,
    backgroundStyle,
    updateBackgroundStyle
  }) => {
    
    const { t } = useTranslation();

    return (
        <div className="p-6 text-medium text-gray-800
          w-full">
            <div>
                <h1 className="text-3xl text-center" >{t("text_background")}</h1>
                <InputSelectComponent
                        value={backgroundStyle.type}
                        values={backgrounds}
                        onValueChanged={value => updateBackgroundStyle("type", value) }
                        label="Type"
                    />
                {backgroundStyle.type !== "Transparent" && (
                <div className="flex flex-col gap-5 mt-3">
                    <div className="flex flex-col justify-between">
                    <InputColorComponent
                        value={backgroundStyle.color1}
                        onValueChanged={value => updateBackgroundStyle("color1", value)}
                        title={`${t("color")} 1`}
                    />
                    {(backgroundStyle.type === "Linear" || backgroundStyle.type === "Radial") && (
                        <InputColorComponent
                        value={backgroundStyle.color2}
                        onValueChanged={value => updateBackgroundStyle("color2", value)}
                        title={`${t("color")} 2`}
                        />
                    )}
                    </div>
                    {backgroundStyle.type === "Linear" && (
                    <InputSelectComponent
                        value={backgroundStyle.direction}
                        values={directions}
                        onValueChanged={value => updateBackgroundStyle("direction", value)}
                        label="Direction"
                    />
                    )}
                    {backgroundStyle.type === "Radial" && (
                    <InputRangeComponent
                        value={backgroundStyle.radius}
                        onValueChanged={value => updateBackgroundStyle("radius", value)}
                        label={t("radius")}
                    />

                    )}
                    
                </div>
                )}
            </div>
        </div>
    );
  };
  
  export default BackgroundSettingsComponent;
  