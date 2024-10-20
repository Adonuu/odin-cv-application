import { Title } from "./title";
import { EducationField } from "./EducationField";
import { AddButton } from "./AddButton";

export function Education({ education, onEducationChange, onRemoveEducation, onAddEducation }) {
    return (
        <>
            <Title title="Education" />
            {education.map((edu, index) => (
                <EducationField 
                    key={index} 
                    number={index + 1} 
                    data={edu}  // Change from education to data
                    onFieldChange={(field, value) => onEducationChange('education', index, field, value)}  // Update this prop
                    handleRemove={() => onRemoveEducation('education', index)} 
                />
            ))}
            <AddButton handleOnClick={onAddEducation} />
        </>
    );
}
