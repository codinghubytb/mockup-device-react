import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";

const NavbarComponent = ({
    onDownload
  }) => {
    
    const { t } = useTranslation();

    return (
        <div className="flex flex-row items-center justify-between px-6 py-3 h-20 bg-gray-800 text-white">
          <div className="flex items-center gap-2"> 
            <img src="icon.svg" className="w-8 h-8 max-sm:h-4 max-sm:w-4 " />
              <h1 className="font-bold text-xl max-sm:text-sm">MockupFast</h1>
              <LanguageSwitcher dark={true}/>
          </div>
          
          <div className="flex gap-1 items-center">
          <Link to="https://buymeacoffee.com/codinghubstudio" target="_blank">
            <button className="rounded-md bg-orange-300  p-1.5 border border-transparent text-center
            text-white transition-all shadow-sm hover:shadow-lg 
            active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
             title={t("bmc")}>
              <img src="bmc-brand-icon.svg" width={20} height={20}/>
            </button>
          </Link>

            <button onClick={onDownload} className="rounded-md
            py-2 px-4 font-bold text-center text-sm max-sm:text-xs
            transition-all shadow-md hover:shadow-lg
            bg-blue-500 hover:bg-blue-600 text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
              {t("btn_download")}
            </button>
          </div>
          
      </div>
    )
};

export default NavbarComponent