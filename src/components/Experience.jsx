import { Title } from "./title";
import { ExperienceField } from "./ExperienceField";
import { useState } from "react";

export function Experience() {
    const [numOfExperienceFields, setNumOfExperienceFields] = useState(1);
    return (
        <>
            <Title title="Education"></Title>
            <ExperienceField number={numOfExperienceFields}></ExperienceField>
        </>
    );
}