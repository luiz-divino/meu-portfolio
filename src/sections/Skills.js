import React from "react";
import skillsData from "../data/skillsData";
import background from "../assets/img/background2.jpeg"

function Skills() {
    return (
        <section id="skills" className="h-full py-4 flex items-center justify-center flex-wrap" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <h1 className="text-4xl font-bold mt-8 text-blue-600 bg-yellow-600 p-2 rounded-md">Skills</h1>

            <div className="flex space-x-4 mt-8 justify-center">
                <div className="flex items-center flex-wrap justify-center mb-4">
                    {skillsData.map(skills => (
                    <div key={skills.id} className="
                        m-4 p-4 bg-white rounded-lg
                        transition duration-300 ease-in-out
                        transform scale-100 shadow-md
                        hover:scale-110
                        hover:shadow-xl
                        hover:brightness-90">
                        <img src={skills.image} alt={skills.nome} className="w-25 h-20 " />
                    </div>
                    ))}

                </div>

            </div>
        </section>
    );
}


export default Skills;