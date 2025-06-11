import React from "react";

const Education = () => {
    const educationDetails = [
        {
            institution: "Army Public School Kirkee",
            degree: "Commerce",
            year: "2019 - 2021",
        },
        {
            institution: "Modern College of arts, science and commerce, GaneshKhind",
            degree: "Bacholers of Computer Application",
            year: "2021 - 2024",
        },
        {
            institution: "Ajeenkya DY Patil University",
            degree: "Master of Computer Application",
            year: "2024 - Present",
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