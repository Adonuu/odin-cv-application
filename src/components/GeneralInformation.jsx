import { Field } from "./field";
import { Title } from "./title";

export function GeneralInformation() {
    return (
        <div className="panel">
            <Title title='General Information'></Title>
            <Field label='Name' type='text'></Field>
            <Field label='E-mail' type='email'></Field>
            <Field label='Phone Number' type='tel'></Field>
        </div>
    );
}