import "../../styles/Select.css";

function Select({ label, options, value, onChange }) {
  return (
    <div className="select-container">
      <label className="select-label">{label}</label>

      <select
        className="select-input"
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