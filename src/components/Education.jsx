import { Title } from "./title";
import { EducationField } from "./EducationField";
import { useState } from "react";

export function Education() {
    const [numOfEducationFields, setNumOfEducationFields] = useState(1);
    return (
        <>
            <Title title="Education"></Title>
            <EducationField number={numOfEducationFields}></EducationField>
        </>
    );
}