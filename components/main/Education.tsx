import React from "react";

const Education = () => {
    const educationDetails = [
        {
            institution: "University A",
            degree: "Bachelor of Science in Computer Science",
            year: "2015 - 2019",
        },
        {
            institution: "University B",
            degree: "Master of Science in Software Engineering",
            year: "2019 - 2021",
        },
        {
            institution: "University C",
            degree: "Ph.D. in Artificial Intelligence",
            year: "2021 - Present",
        },
    ];

    return (
        <section id="education" className="education-section">

            <h2 className="text-3xl font-bold text-center text-white mb-10">Education</h2>
            <div className="flex flex-col gap-6 items-center">
                {educationDetails.map((education, index) => (
                    <div
                        key={index}
                        className="card bg-transparent border border-gray-300 shadow-md rounded-lg p-6 w-3/4 md:w-1/2 transition-transform transform hover:scale-105 hover:bg-gray-800 hover:shadow-lg"
                    >
                        <h3 className="text-xl font-semibold text-white">{education.institution}</h3>
                        <p className="text-white">{education.degree}</p>
                        <p className="text-gray-400">{education.year}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;