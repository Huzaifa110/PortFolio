import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const skillsData = [
    {
        number: 1,
        title: 'Frontend Development',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS', 'WordPress'],
        bgColor: 'bg-blue-500',
        show: 'showFrontendSkills',
    },
    {
        number: 2,
        title: 'Backend Development',
        skills: ['Node.js', 'Express.js', 'Python (Django)', 'GoLang', 'php'],
        bgColor: 'bg-green-500',
        show: 'showBackendSkills',
    },
    {
        number: 3,
        title: 'Database',
        skills: ['MySQL', 'MongoDB'],
        bgColor: 'bg-purple-500',
        show: 'showDatabaseSkills',
    },
    {
        number: 4,
        title: 'Other Skills',
        skills: ['Git', 'RESTful APIs', 'Machine Learning', 'Software Testing', 'MS Office', 'Power BI', 'Expertise in Mathematics'],
        bgColor: 'bg-yellow-500',
        show: 'showOtherSkills',
    },
    {
        number: 5,
        title: 'Soft Skills',
        skills: ['Effective Communication', 'Time Management', 'Team Collaboration', 'Problem Solving'],
        bgColor: 'bg-red-500',
        show: 'showSoftSkills',
    },
];

const SkillsSection = () => {
    const [showSkills, setShowSkills] = useState({
        showFrontendSkills: false,
        showBackendSkills: false,
        showDatabaseSkills: false,
        showOtherSkills: false,
        showSoftSkills: false,
    });

    const toggleSkills = (skillType) => {
        setShowSkills(prevState => ({
            ...prevState,
            [skillType]: !prevState[skillType]
        }));
    };

    return (
        <div className="py-12" id='skills'>
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl font-semibold text-center my-6">Skills</h1>
                <div className="space-y-8 my-20">
                    {skillsData.map((category) => (
                        <div className="p-4 bg-white rounded-3xl shadow-xl relative w-full sm:max-w-lg mx-auto mt-6 sm:mt-10" key={category.number}>
                            <div className="w-14 h-14 bg-gray-700 rounded-full flex justify-center items-center absolute -top-7 left-1/2 transform -translate-x-1/2 sm:-left-8 sm:translate-x-0">
                                <span className="text-white text-lg font-semibold">{category.number}</span>
                            </div>
                            <div className="flex justify-between items-center mt-8 sm:mt-0">
                                <h3 className="text-xl sm:text-2xl font-semibold mb-4 pl-6 cursor-pointer" onClick={() => toggleSkills(category.show)}>
                                    {category.title}
                                </h3>
                                <button onClick={() => toggleSkills(category.show)} className="text-gray-700">
                                    {showSkills[category.show] ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                            </div>
                            {showSkills[category.show] && (
                                <div className="flex flex-wrap gap-2 pl-6 sm:pl-14">
                                    {category.skills.map((skill, index) => (
                                        <span className={`${category.bgColor} text-white rounded-full px-3 py-1 text-sm font-semibold`} key={index}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
