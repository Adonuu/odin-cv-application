import { Title } from "./title";
import { ExperienceField } from "./ExperienceField";
import { useState } from "react";
import { AddButton } from "./AddButton";

export function Experience() {
    const [numOfExperienceFields, setNumOfExperienceFields] = useState(1);

    const handleOnClick = () => {
        setNumOfExperienceFields(numOfExperienceFields + 1);
    };

    const handleRemove = () => {
        setNumOfExperienceFields(numOfExperienceFields - 1);
    }

    return (
        <>
            <Title title="Experience"></Title>
            {/* Loop over numOfExperienceFields to create multiple ExperienceField components */}
            {[...Array(numOfExperienceFields)].map((_, index) => (
                <ExperienceField key={index} number={index + 1} handleRemove={handleRemove} />
            ))}
            <AddButton handleOnClick={handleOnClick}></AddButton>
        </>
    );
}