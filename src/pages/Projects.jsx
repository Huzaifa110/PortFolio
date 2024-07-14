import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import projects from '../data/projects';
import FooterSection from '../components/FooterSection';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const categories = [...new Set(projects.map(project => project.category))];

    useEffect(() => {
        window.scrollTo(0, 0);
        if (selectedCategory === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === selectedCategory));
        }
    }, [selectedCategory]);

    return (
        <div>
            <div className="flex flex-col md:flex-row">
                {/* Sidebar Button for smaller screens */}
                <button className="block md:hidden p-2 bg-gray-800 text-white rounded-md mb-4" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    {isSidebarOpen ? 'Hide Categories' : 'Show Categories'}
                </button>

                {/* Sidebar */}
                <div className={`w-full md:w-64 bg-gray-800 text-white p-4 rounded-xl ${isSidebarOpen ? 'block' : 'hidden md:block'}`}>
                    <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                    <Sidebar categories={categories} selectedCategory={selectedCategory} onCategorySelect={setSelectedCategory} />
                </div>

                <div className="flex-1 py-12 px-6">
                    <h1 className="text-5xl font-semibold mb-6">All Projects</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map(project => (
                            <Link to={`/project/${project.id}`} key={project.id}>
                                <div className="p-4 bg-white rounded-3xl shadow-xl relative">
                                    <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                                    <div className="w-full h-48 overflow-hidden mb-4">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <button className="px-4 my-10 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 focus:outline-none mb-6">
                        <Link to="/">Back to Home</Link>
                    </button>
                </div>
            </div>
            <FooterSection />
        </div>
    );
};

export default Projects;
