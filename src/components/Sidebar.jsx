import React from 'react';

const Sidebar = ({ categories, selectedCategory, onCategorySelect }) => {
    return (
        <ul>
            {categories.map(category => (
                <li
                    key={category}
                    className={`cursor-pointer p-2 mb-2 rounded-md ${selectedCategory === category ? 'bg-gray-600' : ''}`}
                    onClick={() => onCategorySelect(category)}
                >
                    {category}
                </li>
            ))}
            <li
                key="All"
                className={`cursor-pointer p-2 mb-2 rounded-md ${selectedCategory === 'All' ? 'bg-gray-600' : ''}`}
                onClick={() => onCategorySelect('All')}
            >
                All
            </li>
        </ul>
    );
};

export default Sidebar;
