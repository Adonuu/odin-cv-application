import { Field } from "./field";
import { FieldHeading } from "./FieldHeading";

export function EducationField({ number, data, onFieldChange, handleRemove }) {
    return (
        <div className="fieldPanel">
            <FieldHeading heading={`Education ${number}`} />
            <Field 
                label='School' 
                type='text' 
                value={data.school} 
                onChange={(value) => onFieldChange('school', value)} 
            />
            <Field 
                label='Degree' 
                type='text' 
                value={data.degree} 
                onChange={(value) => onFieldChange('degree', value)} 
            />
            <Field 
                label='Start Date' 
                type='date' 
                value={data.startDate} 
                onChange={(value) => onFieldChange('startDate', value)} 
            />
            <Field 
                label='Graduation Date' 
                type='date' 
                value={data.graduationDate} 
                onChange={(value) => onFieldChange('graduationDate', value)} 
            />

            {/* Conditionally render the Remove button when number is greater than 1 */}
            {number > 1 && (
                <button onClick={handleRemove}>Remove</button>
            )}
        </div>
    );
}
