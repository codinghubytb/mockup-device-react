
const InputColorComponent = ({id = `range-${Math.random().toString(36).substr(2, 9)}`, title, value = "#fff", onValueChanged}) => {
    const handleInputChange = (e) => {
        let newValue = e.target.value;
        
        if (newValue === "") {
            newValue = null;
        }

        if (onValueChanged) {
            onValueChanged(newValue); // Envoie la nouvelle valeur au parent
        }
    };

  return (
    <div className="w-full">
        <label htmlFor={id} className="block mb-1 text-sm text-slate-600">{title}</label>
        <input id={id} type="color" 
        className="p-1 h-20 w-full  block bg-white border
         border-gray-200 cursor-pointer rounded-lg
          disabled:opacity-50 disabled:pointer-events-none
           dark:bg-neutral-900 dark:border-neutral-700"
        value={value}
        onInput={handleInputChange}
        title={title} />
    </div>
  )
};

export default InputColorComponent;



