import { Field } from "./field";
import { FieldHeading } from "./FieldHeading";

export function EducationField ({number}) {
    return (
        <div className="fieldPanel">
            <FieldHeading heading={`Education ${number}`}></FieldHeading>
            <Field label='School' type='text'></Field>
            <Field label='Degree' type='text'></Field>
            <Field label='Start Date' type='date'></Field>
            <Field label='Graduation Date' type='date'></Field>
        </div>
    );
}