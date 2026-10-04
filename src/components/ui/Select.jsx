import "../../styles/Select.css";

function Select({ id, label, options, value, onChange, className = "" }) {
  return (
    <div className="select-container">
      <label className="select-label" htmlFor={id}>{label}</label>

      <select
        id={id}
        className={`select-input ${className}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;