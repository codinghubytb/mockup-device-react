
const InputNumber = ({id = `range-${Math.random().toString(36).substr(2, 9)}`, placeholder, label, maxlength = 3, min=0, max=1000, value, onValueChanged}) => {
    const handleInputChange = (e) => {
        let newValue = e.target.value;

        // Si la valeur est vide, ne pas la traiter
        if (newValue === "") {
            newValue = null;
        }

        // Assurez-vous que la valeur est un nombre valide
        if (newValue !== null && (isNaN(newValue) || newValue < min || newValue > max)) {
            return; // Ne pas accepter la valeur si elle est invalide ou hors des limites
        }

        if (onValueChanged) {
            onValueChanged(newValue); // Envoie la nouvelle valeur au parent
        }
    };

  return (

    <div className="flex-1 max-w-sm min-w-[100px]">
        <label htmlFor={id} className="block mb-1 text-sm text-slate-600">{label}
        <input
        id={id}
        value={value}
        type="number"
        inputMode="numeric"
        onInput={handleInputChange}
        min={min}
        max={max}
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder={placeholder}
        maxLength={maxlength}
        /></label>
    </div>
    
  );
};

export default InputNumber;
