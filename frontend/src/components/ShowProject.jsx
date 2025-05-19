import React from 'react';

const ProjectAURA = ({ name, image, description, liveTesting, details }) => {
  return (
    <div className="relative w-full max-h-[84vh] overflow-y-auto p-6  text-white font-mono ">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src={image}
            alt={name}
            className="w-full h-auto rounded-lg border border-[#444]"
          />
        </div>

        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="text-xl font-bold text-cyan-300 font-mono ">{name}</h2>
          <p className="text-sm leading-relaxed text-gray-300">{description}</p>
          
          <div className="mt-4">
            <span className="block font-medium text-green-400">Live Testing:</span>
            <div className="text-sm mt-1">{liveTesting}</div>
          </div>

          <div className="mt-2">
            <span className="block font-medium text-yellow-400">Details:</span>
            <div className="text-sm mt-1">{details}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAURA;
