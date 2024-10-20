import { Field } from "./field";
import { FieldHeading } from "./FieldHeading";
import { TextAreaField } from "./TextAreaField";

export function ExperienceField({ number, data, onFieldChange, handleRemove }) {
    return (
        <div className="fieldPanel">
            <FieldHeading heading={`Experience ${number}`} />
            <Field 
                label='Company' 
                type='text' 
                value={data.company} 
                onChange={(value) => onFieldChange('company', value)} 
            />
            <Field 
                label='Position' 
                type='text' 
                value={data.position} 
                onChange={(value) => onFieldChange('position', value)} 
            />
            <TextAreaField 
                label='Responsibilities' 
                value={data.responsibilities} 
                onChange={(value) => onFieldChange('responsibilities', value)} 
            />
            <Field 
                label='Start Date' 
                type='date' 
                value={data.startDate} 
                onChange={(value) => onFieldChange('startDate', value)} 
            />
            <Field 
                label='End Date' 
                type='date' 
                value={data.endDate} 
                onChange={(value) => onFieldChange('endDate', value)} 
            />

            {/* Conditionally render the Remove button when number is greater than 1 */}
            {number > 1 && (
                <button onClick={handleRemove}>Remove</button>
            )}
        </div>
    );
}
