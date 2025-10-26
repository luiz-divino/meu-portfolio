import React from "react";
import projectsData from "../data/projects";

function ProjectsCard() {
    return (
        <section className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-10">Latest Projects</h1>
            <div>
                {projectsData.map((project) => (
                    <div key={project.id} className="flex flex-col items-center gap-4 mb-8 px-4">
                        <img className="h-auto border border-gray-900 rounded" src={project.image} alt={`Project ${project.id}`} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsCard;