import InputFileComponent from "../../library/InputFileComponent";

const BeginComponent = ({ onHandleImage, onDownload, error}) => {
    return (
      <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-[250px] min-w-[250px]">
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Welcome to the Mockup Device !! 
          </h3>
          
          <InputFileComponent onFileChange={onHandleImage} />
          {error && <p>{error}</p>}

          <button onClick={onDownload} className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
            Download
          </button>
        </div>
      </div>
    )
};

export default BeginComponent;