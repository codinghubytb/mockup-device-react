import InputFileComponent from "../../library/InputFileComponent";
import InputSelectComponent from "../../library/InputSelectComponent";
import { useTranslation } from "react-i18next";

const BeginComponent = ({ onHandleImage, devices, device, setDevice, error}) => {

	  const { t } = useTranslation();
    const onChangeDevice = (value) => {
      const d = devices.find(f => f.Name === value);
      setDevice(d);
    }

    return (
      <div className="p-6 text-medium text-gray-800 w-full">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl text-center" >Image & {t("text_device")} </h1>
          <div>
            <label className="text-sm">{t("text_coverImage")}</label>
            <InputFileComponent
              onFileChange={onHandleImage} 
              maxSize={1024*1024*10} 
              textDragDrop={t("text_dragDrop")}
              textBtn={t("text_chooseFile")}/>
            {error && <p>{error}</p>}
          </div>
          <InputSelectComponent
                value={device.Name}
                values={devices.map(d => d.Name)}
                onValueChanged={onChangeDevice}
                label={t("text_device")}
            />


        </div>
      </div>
    )
};

export default BeginComponent;