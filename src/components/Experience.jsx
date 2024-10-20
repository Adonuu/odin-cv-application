import { Title } from "./title";
import { ExperienceField } from "./ExperienceField";
import { AddButton } from "./AddButton";

export function Experience({ experience, onExperienceChange, onRemoveExperience, onAddExperience }) {
    return (
        <>
            <Title title="Experience" />
            {experience.map((exp, index) => (
                <ExperienceField 
                    key={index} 
                    number={index + 1} 
                    data={exp} 
                    onFieldChange={(field, value) => onExperienceChange('experience', index, field, value)} 
                    handleRemove={() => onRemoveExperience('experience', index)} 
                />
            ))}
            <AddButton handleOnClick={onAddExperience} />
        </>
    );
}
