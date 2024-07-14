import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import FooterSection from '../components/FooterSection';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <div className="py-12 max-w-6xl mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl font-semibold mb-6 text-center">{project.title}</h1>
                <div className="mb-4">
                    <video src={project.videoSrc} controls className="w-full rounded-lg mb-4"></video>
                </div>
                <p className="text-lg text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-col sm:flex-row justify-between mb-4">
                    {project.hasGithubLink && (
                        <a href={project.githubLink} className="text-blue-500 hover:underline mb-2 sm:mb-0" target="_blank" rel="noopener noreferrer">Get Source Code</a>
                    )}
                    {project.hasLiveLink && (
                        <a href={project.liveLink} className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">Check Live</a>
                    )}
                </div>
                <div className='flex flex-col sm:flex-row justify-between my-10'>
                    <button onClick={() => navigate('/projects')} className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 focus:outline-none mb-4 sm:mb-0">
                        All Projects
                    </button>
                    <button onClick={() => navigate('/')} className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 focus:outline-none">
                        Back to Home
                    </button>
                </div>
            </div>
            <FooterSection />
        </div>
    );
};

export default ProjectDetails;
