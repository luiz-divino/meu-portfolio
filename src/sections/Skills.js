import React from "react";
import skillsData from "../data/skillsData";

function Skills() {
    return (
        <section id="skills" className="h-full flex items-center justify-center space-y-8 flex-wrap bg-gray-300">
            <h1 className="text-4xl font-bold mt-10">My Skills</h1>

            <div className="flex space-x-4 justify-center">
                <div className="flex items-center flex-wrap justify-center mb-4">
                    {skillsData.map(skills => (
                        <div key={skills.id} className="m-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <img src={skills.image} alt={skills.nome} className="w-25 h-20" />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}


export default Skills;