import { useState } from "react";
import '../styles/field.css';

export function Field({ label, type, value, onChange }) {
    const [errorMessage, setErrorMessage] = useState('');
    const labelNoSpaces = label.replaceAll(" ", "");

    const handleChange = (event) => { 
        const inputValue = event.target.value;
        onChange(inputValue);  // Call the provided onChange function from props
        const validationMessage = validateInput(inputValue);
        setErrorMessage(validationMessage);
    };

    const isValidDate = (value) => {
        const date = new Date(value);
        return !isNaN(date.getTime());
    };

    const validateInput = (value) => {
        if (type === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(value) ? '' : 'Invalid email address';
        } else if (type === "tel") {
            const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
            return phonePattern.test(value) ? '' : 'Invalid phone number';
        } else if (type === 'date'){
            return isValidDate(value) ? '' : 'Invalid date';
        } else if (type === "number") {
            return isNaN(value) ? 'Must be a number' : '';
        }
        return '';  // Default case if no specific validation
    }

    return (
        <div className="field">
            <label htmlFor={labelNoSpaces}>{label}</label>
            <input type={type} id={labelNoSpaces} value={value} onChange={handleChange} aria-describedby={`${labelNoSpaces}Error`} />
            {errorMessage && (
                <span id={`${labelNoSpaces}Error`} className="error-message">{errorMessage}</span>
            )}
        </div>
    );
}
