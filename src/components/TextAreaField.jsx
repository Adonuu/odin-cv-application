export function TextAreaField({ label, value, onChange }) {
    const labelNoSpaces = label.replaceAll(" ", "");

    const handleChange = (event) => { 
        onChange(event.target.value);  // Call the onChange function passed as a prop
    };

    return (
        <div className="field">
            <label htmlFor={labelNoSpaces}>{label}</label>
            <textarea 
                id={labelNoSpaces} 
                value={value} 
                onChange={handleChange} 
            />
        </div>
    );
}
