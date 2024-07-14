import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

const ProjectSection = () => {
    const displayedProjects = projects.slice(0, 3);

    return (
        <div className="py-12" id='projects'>
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-6">Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map(project => (
                        <Link to={`/project/${project.id}`} key={project.id}>
                            <div className="p-4 bg-white rounded-3xl shadow-xl relative w-full max-w-lg mx-auto">
                                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                                <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-6 flex justify-center">
                    <Link to="/projects">
                        <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 focus:outline-none">
                            View All Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
