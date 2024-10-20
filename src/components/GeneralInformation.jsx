import { Field } from "./field";
import { Title } from "./title";

export function GeneralInformation({ data, onInputChange }) {
    return (
        <div className="panel">
            <Title title='General Information' />
            <Field 
                label='Name' 
                type='text' 
                value={data.name} 
                onChange={(value) => onInputChange('name', value)} 
            />
            <Field 
                label='E-mail' 
                type='email' 
                value={data.email} 
                onChange={(value) => onInputChange('email', value)} 
            />
            <Field 
                label='Phone Number' 
                type='tel' 
                value={data.phone} 
                onChange={(value) => onInputChange('phone', value)} 
            />
        </div>
    );
}
