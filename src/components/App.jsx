import { useState } from "react";
import { exampleData } from "../exampleData";
import { Experience } from "./Experience";
import { GeneralInformation } from "./GeneralInformation";
import { Education } from "./Education";
import { Preview } from "./Preview";

export function App() {
    const [data, setData] = useState(exampleData);

    // Handle changes in fields for experience and education
    const handleFieldChange = (section, index, field, value) => {
        const updatedSection = data[section].map((item, i) => 
            i === index ? { ...item, [field]: value } : item
        );
        setData(prev => ({
            ...prev,
            [section]: updatedSection,
        }));
    };

    // Add new item for experience or education
    const handleAddItem = (section) => {
        const newItem = section === 'experience' 
        ? { company: '', position: '', responsibilities: '', startDate: '', endDate: '' }
        : { school: '', degree: '', startDate: '', graduationDate: '' };

        setData(prev => ({
            ...prev,
            [section]: [...prev[section], newItem]
        }));
    }

    // Remove item from experience or education
    const handleRemoveItem = (section, index) => {
        const updatedSection = data[section].filter((_, i) => i !== index);
        setData(prev => ({
            ...prev,
            [section]: updatedSection,
        }));
    };

    return (
        <>
            <div className="editor">
                <GeneralInformation 
                    data={data} 
                    onInputChange={(field, value) => setData(prev => ({ ...prev, [field]: value }))} 
                />
                <Experience 
                    experience={data.experience} 
                    onExperienceChange={handleFieldChange} 
                    onRemoveExperience={handleRemoveItem} 
                    onAddExperience={() => handleAddItem('experience')} 
                />
                <Education 
                    education={data.education} 
                    onEducationChange={handleFieldChange} 
                    onRemoveEducation={handleRemoveItem} 
                    onAddEducation={() => handleAddItem('education')} 
                />
            </div>
            <Preview data={data}></Preview>
        </>
        
    );
}
