import React from "react";
import projectsData from "../data/projects";

function ProjectsCard() {
    return (
        <section id="projects" className="h-full flex flex-col items-center justify-center mb-8">
            <h1 className="text-4xl font-bold py-10">Latest Projects</h1>
            <div className="flex flex-wrap justify-center gap-8 px-4 group relative w-full overflow-hidden" >
                {projectsData.map((project) => (
                    <div key={project.id} className="w-80 h-52 relative group overflow-hidden rounded border border-gray-900">
                        <a href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`link do projeto ${project.id}`}>
                            <img className="w-full h-full object-cover" src={project.image} alt={`Project ${project.id}`} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsCard;