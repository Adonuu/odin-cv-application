import { Field } from "./field";
import { FieldHeading } from "./FieldHeading";

export function EducationField ({number, handleRemove}) {
    return (
        <div className="fieldPanel">
            <FieldHeading heading={`Education ${number}`}></FieldHeading>
            <Field label='School' type='text'></Field>
            <Field label='Degree' type='text'></Field>
            <Field label='Start Date' type='date'></Field>
            <Field label='Graduation Date' type='date'></Field>

            {/* Conditionally render the Remove button when number is greater than 1 */}
            {number > 1 && (
                <button onClick={handleRemove}>Remove</button>
            )}
        </div>
    );
}