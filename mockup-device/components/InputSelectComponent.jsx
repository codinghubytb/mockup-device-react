
const InputSelectComponent = ({id = `range-${Math.random().toString(36).substr(2, 9)}`, label, values = [], onValueChanged}) => {

    const handleInputChange = (e) => {
        if (onValueChanged) {
            onValueChanged(e.target.value);
        }
    };

  return (

        <div className="w-full max-w-sm min-w-[200px]">
            <label htmlFor={id} className="block mb-1 text-sm text-slate-800">
                {label}

            <div className="relative">
            <select
                id={id}
                onChange={handleInputChange}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                    {values.map((name, index) => (
                        <option key={index} value={name}>{name.toUpperCase()}</option>
                    ))};
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
            </div>
            
            </label>
        </div>
  )};

export default InputSelectComponent;