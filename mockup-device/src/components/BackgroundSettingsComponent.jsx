import InputSelectComponent from "../../library/InputSelectComponent.jsx";
import InputColorComponent from "../../library/InputColorComponent.jsx";
import InputRangeComponent from "../../library/InputRangeComponent.jsx";

const BackgroundSettingsComponent = ({
    backgrounds,
    directions,
    backgroundStyle,
    updateBackgroundStyle
  }) => {
    return (
        <div className="p-6 bg-white text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-[250px] min-w-[250px]">
            <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Background
                </h3>
                <InputSelectComponent
                        value={backgroundStyle.type}
                        values={backgrounds}
                        onValueChanged={value => updateBackgroundStyle("type", value) }
                        label="Background"
                    />
                {backgroundStyle.type !== "Transparent" && (
                <div className="flex flex-col gap-5 mt-3">
                    <div className="flex flex-col justify-between">
                    <InputColorComponent
                        value={backgroundStyle.color1}
                        onValueChanged={value => updateBackgroundStyle("color1", value)}
                        title="Color 1"
                    />
                    {(backgroundStyle.type === "Linear" || backgroundStyle.type === "Radial") && (
                        <InputColorComponent
                        value={backgroundStyle.color2}
                        onValueChanged={value => updateBackgroundStyle("color2", value)}
                        title="Color 2"
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
                        label="Radius"
                    />

                    )}
                    
                </div>
                )}
            </div>
        </div>
    );
  };
  
  export default BackgroundSettingsComponent;
  