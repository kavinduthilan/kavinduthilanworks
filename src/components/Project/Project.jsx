import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-400/25 ${
        isHovered ? "bg-white/15" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Status Badge */}
      <div className="absolute -top-3 -right-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
            project.status === "completed"
              ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white"
              : project.status === "in-progress"
              ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
              : "bg-gradient-to-r from-gray-400 to-gray-500 text-white"
          }`}
        >
          {project.status === "completed"
            ? "✓ Completed"
            : project.status === "in-progress"
            ? "🚧 In Progress"
            : "📋 Planned"}
        </span>
      </div>

      {/* Project Icon/Image */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
          {project.icon || project.title.charAt(0)}
        </div>
        {project.featured && (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2 shadow-lg">
            <span className="text-white text-sm">⭐</span>
          </div>
        )}
      </div>

      {/* Project Title & Category */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-purple-400">🏷️</span>
          <span className="text-purple-300 text-sm font-medium">
            {project.category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-white text-xs font-medium hover:from-gray-600 hover:to-gray-500 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-gray-300 text-xs font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-xl text-white font-medium transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <span className="mr-2">📂</span>
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 rounded-xl text-white font-medium transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <span className="mr-2">🚀</span>
            Live Demo
          </a>
        )}
        {project.previewUrl && (
          <a
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 rounded-xl text-white font-medium transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <span>👁️</span>
          </a>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      title: "Online Food Ordering Application",
      category: "Web Application",
      description:
        "Secure, transparent voting platform built on blockchain technology with smart contracts and voter verification.",
      technologies: ["React",  "Redux", ".NET Core", "Tailwind CSS"],
      status: "completed",
      featured: true,
      icon: "🗳️",
      githubUrl: "https://github.com/kavinduthilan/FoodOrderSystem.git",
      // stats: {
      //   stars: 95,
      //   commits: 78,
      // },
    },
    {
      title: "Kingfisher Restaurant",
      category: "Web Application",
      description:
        "A modern web application designed for Kingfisher Restaurant, featuring an intuitive interface for managing menus, online reservations, orders, and customer interactions. The platform streamlines restaurant operations and enhances the dining experience through efficient digital solutions.",
      technologies: ["HTML", "JavaScript", "CSS"],
      status: "completed",
      featured: false,
      icon: "📱",
      githubUrl: "https://github.com/kavinduthilan/restaurant-application.git",
      // liveUrl: "https://socialscheduler.demo.com",
      // stats: {
      //   stars: 312,
      //   commits: 298,
      //   users: "3.1K+",
      // },
    },
    {
      title: "Portfolio Website",
      category: "Web Application",
      description:
        "Modern real-time chat application with end-to-end encryption, file sharing, and video call integration.",
      technologies: ["React", "Tailwind CSS", "EmailJs"],
      status: "completed",
      featured: false,
      icon: "💬",
      githubUrl: "https://github.com/kavinduthilan/kavinduthilanworks.git",
      liveUrl: ""
      // stats: {
      //   stars: 45,
      //   commits: 23,
      // },
    },
    {
      title: "ERP System for Rividco Projects (Pvt) Ltd",
category: "ERP",
description: "A comprehensive ERP system developed for Rividco Projects (Pvt) Ltd to centralize and automate core business operations. The platform integrates modules for project management, customers and vendors handling , and reporting, enabling real-time data access, improved decision-making, and enhanced operational efficiency.",
      technologies: ["React", ".NET Core", "Rest API"],
      status: "completed",
      featured: false,
      icon: "🌤️",
      githubUrl: "https://github.com/BuddhimaZ/rividco_project_managament_system_frontend.git",
      // stats: {
      //   stars: 89,
      //   commits: 67,
      //   users: "500+",
      // },
    },
  ];

  return (
    <div className="min-h-screen p-8" id="works">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my projects showcasing various technologies and
            innovative solutions
          </p>
        </div>

        {/* All Projects */}
        <div>
          <div className="flex items-center mb-8">
            <span className="text-blue-400 text-2xl mr-3">📂</span>
            <h2 className="text-3xl font-bold text-white">All Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
