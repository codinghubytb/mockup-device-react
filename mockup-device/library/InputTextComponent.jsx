const InputTextComponent = ({
  id = `range-${Math.random().toString(36).substr(2, 9)}`,
  placeholder = "Type here...",
  label,
  value = "", // Default to an empty string if value is null or undefined
  onValueChanged,
}) => {
  const handleInputChange = (e) => {
    if (onValueChanged) {
      onValueChanged(e.target.value); // Pass the new value to the parent
    }
  };

  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <label htmlFor={id} className="block mb-2 text-sm text-slate-600">
        {label}
        <input
          id={id}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder={placeholder}
          value={value} // Ensure `value` is never null
          onInput={handleInputChange}
        />
      </label>
    </div>
  );
};

export default InputTextComponent;
