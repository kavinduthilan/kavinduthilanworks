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
      company: "TechCorp Solutions",
      position: "Senior Software Engineer",
      duration: "Jan 2022 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      status: "current",
      description:
        "Leading development of scalable microservices architecture serving 1M+ users. Implementing CI/CD pipelines and mentoring team members.",
      achievements: [
        "Reduced system latency by 40% through optimization",
        "Led team of 5 engineers on critical product features",
        "Architected new payment processing system",
        "Implemented automated deployment pipeline",
      ],
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "AWS",
        "Docker",
        "PostgreSQL",
      ],
      projects: [
        { name: "Payment Gateway", status: "completed" },
        { name: "User Dashboard v3", status: "in-progress" },
        { name: "API Optimization", status: "completed" },
      ],
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      duration: "Jun 2020 - Dec 2021",
      location: "Remote",
      type: "Full-time",
      status: "past",
      description:
        "Built and maintained full-stack applications using modern web technologies. Collaborated with cross-functional teams to deliver high-quality products.",
      achievements: [
        "Developed 3 major product features from scratch",
        "Improved application performance by 60%",
        "Implemented automated testing suite",
        "Mentored 2 junior developers",
      ],
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis"],
      projects: [
        { name: "E-commerce Platform", status: "completed" },
        { name: "Analytics Dashboard", status: "completed" },
        { name: "Mobile App API", status: "completed" },
      ],
    },
    {
      company: "Digital Agency Co",
      position: "Frontend Developer",
      duration: "Mar 2019 - May 2020",
      location: "New York, NY",
      type: "Full-time",
      status: "past",
      description:
        "Created responsive web applications and collaborated with design teams to implement pixel-perfect UI components.",
      achievements: [
        "Delivered 15+ client projects on time",
        "Increased client satisfaction by 25%",
        "Implemented design system",
        "Optimized performance across all projects",
      ],
      technologies: ["React", "JavaScript", "Sass", "Webpack", "Figma"],
      projects: [
        { name: "Corporate Website", status: "completed" },
        { name: "Portfolio Platform", status: "completed" },
        { name: "Design System", status: "completed" },
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
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Career Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional growth tree - expanding through experience,
            learning, and innovation
          </p>
        </div>

        {/* Experience Tree */}
        <div className="relative">
          {/* Main Trunk */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 rounded-full opacity-60"></div>

          {/* Experience Nodes */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                <div className="absolute left-8 top-8 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>

                {/* Node Circle */}
                <div
                  className={`absolute left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-r ${getStatusColor(
                    exp.status
                  )} border-4 border-slate-900 cursor-pointer transform transition-all duration-300 hover:scale-125 z-10`}
                  onClick={() => toggleNode(index)}
                >
                  <div className="absolute inset-0 rounded-full animate-ping bg-white opacity-20"></div>
                </div>

                {/* Experience Card */}
                <div className="ml-20 transform transition-all duration-500 hover:translate-x-2">
                  <div
                    className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-2xl cursor-pointer"
                    onClick={() => toggleNode(index)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Building2 className="w-6 h-6 text-blue-400" />
                        <h3 className="text-2xl font-bold text-white">
                          {exp.company}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getStatusColor(
                            exp.status
                          )} text-white`}
                        >
                          {exp.status === "current" ? "Current" : "Past"}
                        </span>
                      </div>
                      {expandedNodes.has(index) ? (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                      )}
                    </div>

                    <h4 className="text-xl font-semibold text-blue-300 mb-3">
                      {exp.position}
                    </h4>

                    <div className="flex items-center space-x-6 text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {/* Expanded Content */}
                    {expandedNodes.has(index) && (
                      <div className="mt-6 space-y-6 animate-in slide-in-from-top duration-300">
                        {/* Branches for Achievements */}
                        <div className="relative">
                          <div className="flex items-center mb-4">
                            <Award className="w-5 h-5 text-yellow-400 mr-2" />
                            <h5 className="text-lg font-semibold text-white">
                              Key Achievements
                            </h5>
                          </div>
                          <div className="space-y-3 ml-4">
                            {exp.achievements.map((achievement, achIndex) => (
                              <div
                                key={achIndex}
                                className="relative flex items-start"
                              >
                                <div className="absolute -left-4 top-2 w-2 h-0.5 bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3 mt-1 flex-shrink-0"></div>
                                <span className="text-gray-300">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Branches for Projects */}
                        <div className="relative">
                          <div className="flex items-center mb-4">
                            <Code className="w-5 h-5 text-purple-400 mr-2" />
                            <h5 className="text-lg font-semibold text-white">
                              Key Projects
                            </h5>
                          </div>
                          <div className="space-y-3 ml-4">
                            {exp.projects.map((project, projIndex) => (
                              <div
                                key={projIndex}
                                className="relative flex items-center"
                              >
                                <div className="absolute -left-4 top-2 w-2 h-0.5 bg-purple-400"></div>
                                <div
                                  className={`w-2 h-2 rounded-full ${getProjectStatusColor(
                                    project.status
                                  )} mr-3 flex-shrink-0`}
                                ></div>
                                <span className="text-gray-300">
                                  {project.name}
                                </span>
                                <span
                                  className={`ml-2 px-2 py-1 text-xs rounded-full ${
                                    project.status === "completed"
                                      ? "bg-green-500/20 text-green-300"
                                      : project.status === "in-progress"
                                      ? "bg-yellow-500/20 text-yellow-300"
                                      : "bg-gray-500/20 text-gray-300"
                                  }`}
                                >
                                  {project.status}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technology Branches */}
                        <div className="relative">
                          <div className="flex items-center mb-4">
                            <Users className="w-5 h-5 text-green-400 mr-2" />
                            <h5 className="text-lg font-semibold text-white">
                              Technologies
                            </h5>
                          </div>
                          <div className="flex flex-wrap gap-2 ml-4">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-white text-sm font-medium hover:from-gray-600 hover:to-gray-500 transition-all duration-200"
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
