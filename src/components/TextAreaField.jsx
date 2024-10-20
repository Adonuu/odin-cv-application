import { useState } from "react";

export function TextAreaField ({ label }) {
    const [inputValue, setInputValue] = useState('');

    const labelNoSpaces = label.replaceAll(" ", "");

    const handleChange = (event) => { 
        setInputValue(event.target.value)
    };
    return (
        <div className="field">
            <label htmlFor={labelNoSpaces}>{label}</label>
            <textarea onChange={handleChange}>{inputValue}</textarea>
        </div>
    );
}