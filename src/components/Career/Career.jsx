import React, { useState } from "react";
import {
  Building2,
  Calendar,
  MapPin,
  Code,
  Award,
  Users,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const Career = () => {
  const [expandedNodes, setExpandedNodes] = useState(new Set([0]));

  const toggleNode = (index) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedNodes(newExpanded);
  };

  const experiences = [
    {
      company: "Upali Group of Companies",
      position: "Associate Software Engineer",
      duration: "May 2025 - Present",
      location: "Colombo 13, Sri Lanka",
      type: "Full-time",
      status: "current",
      achievements: ["Implemented automated deployment pipeline"],
      technologies: [
        "React",
        ".NET",
        "PHP",
        "Laravel",
        "MySQL",
        "Docker",
        "GitHub",
      ],
      projects: [
        { name: "kandos.lk website Revamp", status: "In-progress" },
        { name: "Task Management ERP System", status: "Completed" },
      ],
    },
    {
      company: "Echonlabs (pvt) Ltd",
      position: "Trainee Software Engineer",
      duration: "July 2024 - Jan 2025",
      location: "Battaramulla, Sri Lanka",
      type: "Full-time",
      status: "past",
      achievements: [
        "Designed and implemented scalable web modules using React, Angular, NestJS, and MongoDB to meet complex project requirements and ensure optimal performance.",
        "Developed and maintained secure REST APIs with comprehensive testing protocols using Postman to guarantee reliability and data integrity.",
        "Contributed to digital transformation initiatives in the insurance sector, specifically developing innovative solutions for Janashakthi PLC's customer-facing platforms.",
        "Collaborated effectively within cross-functional teams, leveraging GitLab for version control while actively learning best practices and advanced development techniques from senior developers.",
      ],
      technologies: [
        "React",
        "JavaScript",
        ".NET Core",
        "NestJs",
        "MongoDB",
        "GitLab",
      ],
      projects: [
        { name: "Janashakthi Broker Management System" },
        { name: "Janashkthi Agent Virtual Office" },
        { name: "Echonlabs Website" },
      ],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "current":
        return "from-green-400 to-emerald-500";
      case "past":
        return "from-blue-400 to-cyan-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  const getProjectStatusColor = (status) => {
    if (!status) return "bg-gray-500";
    const s = status.toLowerCase();
    if (s === "completed") return "bg-green-500";
    if (s === "in-progress") return "bg-yellow-500";
    return "bg-gray-500";
  };

  const getProjectBadgeColor = (status) => {
    if (!status) return "bg-gray-500/20 text-gray-300";
    const s = status.toLowerCase();
    if (s === "completed") return "bg-green-500/20 text-green-300";
    if (s === "in-progress") return "bg-yellow-500/20 text-yellow-300";
    return "bg-gray-500/20 text-gray-300";
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8" id="career">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Career Journey
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            My professional growth tree - expanding through experience,
            learning, and innovation
          </p>
        </div>

        {/* Experience Tree */}
        <div className="relative">
          {/* Main Trunk — shifts left on mobile */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 rounded-full opacity-60"></div>

          {/* Experience Nodes */}
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                <div className="absolute left-4 sm:left-8 top-8 w-5 sm:w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>

                {/* Node Circle */}
                <div
                  className={`absolute left-2.5 sm:left-6 top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${getStatusColor(
                    exp.status,
                  )} border-2 sm:border-4 border-slate-900 cursor-pointer transform transition-all duration-300 hover:scale-125 z-10`}
                  onClick={() => toggleNode(index)}
                >
                  <div className="absolute inset-0 rounded-full animate-ping bg-white opacity-20"></div>
                </div>

                {/* Experience Card */}
                <div className="ml-12 sm:ml-20 transform transition-all duration-500 hover:translate-x-1 sm:hover:translate-x-2">
                  <div
                    className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4 sm:p-6 shadow-2xl cursor-pointer"
                    onClick={() => toggleNode(index)}
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                      <div className="flex flex-wrap items-center gap-2 min-w-0">
                        <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                        <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight">
                          {exp.company}
                        </h3>
                        <span
                          className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getStatusColor(
                            exp.status,
                          )} text-white whitespace-nowrap`}
                        >
                          {exp.status === "current" ? "Current" : "Past"}
                        </span>
                      </div>
                      <div className="flex-shrink-0 mt-0.5">
                        {expandedNodes.has(index) ? (
                          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                        )}
                      </div>
                    </div>

                    <h4 className="text-base sm:text-xl font-semibold text-blue-300 mb-3">
                      {exp.position}
                    </h4>

                    {/* Meta info — stacks on very small screens */}
                    <div className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-6 text-gray-400 mb-4 text-sm sm:text-base">
                      <div className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 flex-shrink-0" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {exp.description && (
                      <p className="text-gray-300 mb-4 text-sm sm:text-base">
                        {exp.description}
                      </p>
                    )}

                    {/* Expanded Content */}
                    {expandedNodes.has(index) && (
                      <div className="mt-4 sm:mt-6 space-y-5 sm:space-y-6 animate-in slide-in-from-top duration-300">
                        {/* Achievements */}
                        <div className="relative">
                          <div className="flex items-center mb-3 sm:mb-4">
                            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 flex-shrink-0" />
                            <h5 className="text-base sm:text-lg font-semibold text-white">
                              Responsibilities Handled
                            </h5>
                          </div>
                          <div className="space-y-2 sm:space-y-3 ml-3 sm:ml-4">
                            {exp.achievements.map((achievement, achIndex) => (
                              <div
                                key={achIndex}
                                className="relative flex items-start"
                              >
                                <div className="absolute -left-3 sm:-left-4 top-2 w-2 h-0.5 bg-yellow-400"></div>
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400 mr-2 sm:mr-3 mt-1.5 flex-shrink-0"></div>
                                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Projects */}
                        <div className="relative">
                          <div className="flex items-center mb-3 sm:mb-4">
                            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-2 flex-shrink-0" />
                            <h5 className="text-base sm:text-lg font-semibold text-white">
                              Key Projects
                            </h5>
                          </div>
                          <div className="space-y-2 sm:space-y-3 ml-3 sm:ml-4">
                            {exp.projects.map((project, projIndex) => (
                              <div
                                key={projIndex}
                                className="relative flex flex-wrap items-center gap-2"
                              >
                                <div className="absolute -left-3 sm:-left-4 top-2 w-2 h-0.5 bg-purple-400"></div>
                                <div
                                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${getProjectStatusColor(
                                    project.status,
                                  )} flex-shrink-0`}
                                ></div>
                                <span className="text-gray-300 text-sm sm:text-base">
                                  {project.name}
                                </span>
                                {project.status && (
                                  <span
                                    className={`px-2 py-0.5 text-xs rounded-full ${getProjectBadgeColor(
                                      project.status,
                                    )}`}
                                  >
                                    {project.status}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="relative">
                          <div className="flex items-center mb-3 sm:mb-4">
                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 flex-shrink-0" />
                            <h5 className="text-base sm:text-lg font-semibold text-white">
                              Technologies
                            </h5>
                          </div>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 ml-3 sm:ml-4">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-white text-xs sm:text-sm font-medium hover:from-gray-600 hover:to-gray-500 transition-all duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
