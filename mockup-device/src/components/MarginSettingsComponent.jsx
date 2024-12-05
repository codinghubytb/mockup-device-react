import InputNumberComponent from "../../library/InputNumberComponent";
import InputRangeComponent from "../../library/InputRangeComponent";

const MarginSettingsComponent = ({
    margins,
    updateMargins,
    nbDivisor
  }) => {
    return (
      <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-[250px] min-w-[250px]">
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Margins
          </h3>
          <div className="flex flex-col gap-2">

            <InputRangeComponent
              label="Margin Top"
              min={Math.floor(-350/nbDivisor)}
              max={Math.floor(400/nbDivisor)}
              value={margins.top}
              onValueChanged={(value) => updateMargins("top", value)}
            />
            <InputRangeComponent
              label="Margin Bottom"
              min={Math.floor(-350/nbDivisor)}
              max={Math.floor(400/nbDivisor)}
              value={margins.bottom}
              onValueChanged={(value) => updateMargins("bottom", value)}
            />
          </div>
  
          <div className="flex gap-2 flex-col">
            <InputRangeComponent
              label="Margin Left"
              min={Math.floor(-125/nbDivisor)}
              max={Math.floor(400/nbDivisor)}
              value={margins.left}
              onValueChanged={(value) => updateMargins("left", value)}
            />
            <InputRangeComponent
              label="Margin Right"
              min={Math.floor(-125/nbDivisor)}
              max={Math.floor(400/nbDivisor)}
              value={margins.right}
              onValueChanged={(value) => updateMargins("right", value)}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default MarginSettingsComponent;
  