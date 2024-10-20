import { Title } from "./title";
import { EducationField } from "./EducationField";
import { useState } from "react";
import { AddButton } from "./AddButton";

export function Education() {
    const [numOfEducationFields, setNumOfEducationFields] = useState(1);

    const handleOnClick = () => {
        setNumOfEducationFields(numOfEducationFields + 1);
    };

    const handleRemove = () => {
        setNumOfEducationFields(numOfEducationFields - 1);
    }

    return (
        <>
            <Title title="Education"></Title>
            {/* Loop over numOfEducationFields to create multiple EducationField components */}
            {[...Array(numOfEducationFields)].map((_, index) => (
                <EducationField key={index} number={index + 1} handleRemove={handleRemove} />
            ))}
            <AddButton handleOnClick={handleOnClick}></AddButton>
        </>
    );
}