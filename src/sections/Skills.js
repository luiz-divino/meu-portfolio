import React from "react";
import skillsData from "../data/skillsData";

function Skills() {
    return (
        <div className="h-screen flex items-center justify-center flex-col space-y-8 flex-wrap bg-gray-300">
            <h1 className="text-4xl font-bold mb-10">My Skills</h1>

            <div className="flex space-x-4 flex-wrap justify-center">
                {Object.entries(skillsData).map(([category, icons]) => (
                    <div key={category} className="flex flex-col items-center gap-3">

                        <h2 className="text-2xl font-semibold">{category}</h2>

                        <div className="flex space-x-2 mb-14">
                            {Object.entries(icons).map(([name, icon]) => (
                                <div key={name} className="flex flex-col items-center flex-wrap">
                                    <div><img src={icon} alt={name} className="w-12 h-12" /></div>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}


export default Skills;