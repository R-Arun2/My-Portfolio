"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Health plus",
    description: "User Panel",
    image: "/images/projects/1.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "/",
    previewUrl: "https://carepulse-blush.vercel.app/",
  },
  {
    id: 2,
    title: "Health plus",
    description: "Admin Panel",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://carepulse-blush.vercel.app/",
  },
  {
    id: 3,
    title: "Expense Tracker",
    description: "Track the  All Expenses",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://r-arun2.github.io/react-expanse-tracker/",
  },
  {
    id: 4,
    title: "My-Todo",
    description: "Add Your Tasks here...",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://in-todo-react-app.netlify.app/",
  },
  {
    id: 5,
    title: "Todo",
    description: "Add Daily Updates",
    image: "/images/projects/5.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://r-arun2.github.io/To-do-App/",
  },
  {
    id: 6,
    title: "Coredera",
    description: "Trading Application by IONIXX",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://securitiesfintech.com/",
  },

  {
    id: 7,
    title: "Revex Revenue Management System",
    description: "RR Portal by IONIXX",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://rr.ionixxtech.com/#/login",
  },


];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <br/>
      <div className="footer border-t border-t-gray-500 border-l-0 border-r-0 border-transparent"></div>
    </section>
  );
};

export default ProjectsSection;
