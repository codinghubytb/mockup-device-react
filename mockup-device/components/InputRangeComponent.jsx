
const InputRangeComponent = ({id = `range-${Math.random().toString(36).substr(2, 9)}`, label, min = 0, max = 100, value, onValueChanged}) => {

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

    <div className="w-full max-w-sm min-w-[200px]">  
        <label 
            htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label} ({value})
        <input 
            id={id} type="range" min={min} max={max} value={value} 
            onChange={handleInputChange} 
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />

        </label>
    </div>
  )};

export default InputRangeComponent;