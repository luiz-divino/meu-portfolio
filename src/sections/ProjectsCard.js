import React from "react";
import projectsData from "../data/projects";
import background from "../assets/img/background4.png"

function ProjectsCard() {
    return (
        <section id="projects" className="h-full flex flex-col items-center justify-center py-8" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <h1 className="text-4xl font-bold text-blue-600 bg-white mb-9 p-2 rounded-md"><span className="text-yellow-600">Latest </span>Projects</h1>
            <div className="flex flex-wrap justify-center gap-8 px-4 group relative w-full overflow-hidden" >
                {projectsData.map((project) => (
                    <div key={project.id} className="w-72 h-50 relative group overflow-hidden rounded border border-gray-900">
                        <a href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`link do projeto ${project.id}`}>
                            <img className="w-full h-full object-cover
          transition duration-300 ease-in-out
          transform scale-100 shadow-md
          hover:scale-110
          hover:shadow-xl
          hover:brightness-90
                            " src={project.image} alt={`Project ${project.id}`} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsCard;