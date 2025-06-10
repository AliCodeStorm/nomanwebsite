import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const ProjectShowcase = ({ projects = [], title = "My Work", description = "", showCTA = true }) => {
    return (
        <section className="py-20 bg-white dark:bg-black text-black dark:text-white px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2">
                    {title} <span className="text-blue-600">Showcase</span>
                </h2>
                {description && (
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
                        {description}
                    </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="relative bg-gray-100 dark:bg-gray-900 p-6 rounded-xl hover:-translate-y-2 transition-all hover:shadow-md cursor-pointer"
                        >
                            <SquareArrowOutUpRight className="absolute top-3 right-3 w-5 h-5 text-gray-500 dark:text-gray-50" />

                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                            )}

                            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    View Case Study
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {showCTA && (
                    <div className="text-center mt-12">
                        <h4 className="text-xl font-semibold mb-2">Want results like these?</h4>
                        <NavLink to="/contact">
                            <Button variant="outline">Let&apos;s Talk</Button>
                        </NavLink>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectShowcase;
