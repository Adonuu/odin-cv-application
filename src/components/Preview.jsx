import '../styles/preview.css';

export function Preview({ data }) {
    return (
        <div className="preview">
            <div className="general-information">
                <h2>{data.name}</h2>
                <h3>{data.email} | {data.phone}</h3>
            </div>
        
            <div className="experience">
                <h3>Experience</h3>
                {data.experience.length > 0 ? (
                    data.experience.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <p><strong>Company:</strong> {exp.company}</p>
                            <p><strong>Position:</strong> {exp.position}</p>
                            <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
                            <p><strong>Start Date:</strong> {exp.startDate}</p>
                            <p><strong>End Date:</strong> {exp.endDate}</p>
                        </div>
                    ))
                ) : (
                    <p>No experience listed.</p>
                )}
            </div>
            <div className="education">
                <h3>Education</h3>
                {data.education.length > 0 ? (
                    data.education.map((edu, index) => (
                        <div key={index} className="education-item">
                            <p><strong>School:</strong> {edu.school}</p>
                            <p><strong>Degree:</strong> {edu.degree}</p>
                            <p><strong>Start Date:</strong> {edu.startDate}</p>
                            <p><strong>Graduation Date:</strong> {edu.graduationDate}</p>
                        </div>
                    ))
                ) : (
                    <p>No education listed.</p>
                )}
            </div>
        </div>
    );
}
