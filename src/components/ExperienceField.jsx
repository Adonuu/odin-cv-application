import { Field } from "./field";
import { FieldHeading } from "./FieldHeading";
import { TextAreaField } from "./TextAreaField";

export function ExperienceField ({ number }) {
    return (
        <div className="fieldPanel">
            <FieldHeading heading={`Experience ${number}`}></FieldHeading>
            <Field label='Company' type='text'></Field>
            <Field label='Position' type='text'></Field>
            <TextAreaField label='Responsibilities'></TextAreaField>
            <Field label='Start Date' type='date'></Field>
            <Field label='End Date' type='date'></Field>
        </div>
    );
}