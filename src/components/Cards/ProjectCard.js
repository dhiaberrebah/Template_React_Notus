import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lightBlue-500 font-bold">${project.fundedAmount} raised</span>
          <span className="text-gray-500">{project.backers} backers</span>
        </div>
        <div className="mt-4 bg-gray-200 rounded-full h-2">
          <div
            className="bg-lightBlue-500 rounded-full h-2"
            style={{ width: `${(project.fundedAmount / project.goal) * 100}%` }}
          ></div>
        </div>
        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <span>{((project.fundedAmount / project.goal) * 100).toFixed(0)}% funded</span>
          <span>{project.daysLeft} days left</span>
        </div>
        <Link
          to={`/project/${project.id}`}
          className="mt-4 block text-center bg-lightBlue-500 text-white font-bold py-2 px-4 rounded hover:bg-lightBlue-600 transition duration-300"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
