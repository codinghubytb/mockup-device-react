const InputRadioComponent = ({ value, values, onValueChanged }) => {
    const handleInputChange = (e) => {
        if (onValueChanged) {
            onValueChanged(e.target.value); // Envoie la nouvelle valeur au parent
        }
    };

    return (
        <div className="flex flex-wrap gap-10">
            {values.map((name, index) => (
                <div className="inline-flex items-center" key={index}>
                    <label className="relative flex items-center cursor-pointer" htmlFor={`radio-${index}`}>
                        <input
                            name="framework"
                            type="radio"
                            id={`radio-${index}`}
                            value={name}
                            checked={name === value}
                            onChange={handleInputChange}
                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                            aria-checked={name === value}
                        />
                        <span
                            className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0
                                        peer-checked:opacity-100 transition-opacity duration-200 top-1/2 
                                        left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        ></span>
                    </label>
                    <label
                        className="ml-2 text-slate-600 cursor-pointer text-sm"
                        htmlFor={`radio-${index}`}
                    >
                        {name}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default InputRadioComponent;
