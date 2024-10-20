import { Field } from "./field";
import { FieldHeading } from "./FieldHeading";
import { TextAreaField } from "./TextAreaField";

export function ExperienceField ({ number, handleRemove }) {
    return (
        <div className="fieldPanel">
            <FieldHeading heading={`Experience ${number}`}></FieldHeading>
            <Field label='Company' type='text'></Field>
            <Field label='Position' type='text'></Field>
            <TextAreaField label='Responsibilities'></TextAreaField>
            <Field label='Start Date' type='date'></Field>
            <Field label='End Date' type='date'></Field>

            {/* Conditionally render the Remove button when number is greater than 1 */}
            {number > 1 && (
                <button onClick={handleRemove}>Remove</button>
            )}
        </div>
    );
}