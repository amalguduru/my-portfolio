"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Eat and Split Bill",
    description: "React.js",
    image: "/images/projects/split-bill.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amalguduru/split-bill/",
    previewUrl: "https://amalguduru.github.io/split-bill/",
  },
  {
    id: 2,
    title: "Travel Check-list",
    description: "React.js",
    image: "/images/projects/travel-checklist.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amalguduru/travel-list",
    previewUrl: "https://amalguduru.github.io/travel-list/",
  },
  {
    id: 3,
    title: "Movie Watchlist",
    description: "React.js",
    image: "/images/projects/watchlist.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amalguduru/movie-watchlist",
    previewUrl: "https://amalguduru.github.io/movie-watchlist/",
  },
  {
    id: 4,
    title: "Blog Website",
    description: "MERN Stack",
    image: "/images/projects/blog.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amalguduru/blog-postings",
    // previewUrl: "/",
  },
  {
    id: 5,
    title: "Book Store",
    description: "MERN Stack",
    image: "/images/projects/book-store.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amalguduru/book-store",
    // previewUrl: "/",
  },
  {
    id: 6,
    title: "Goal Setter",
    description: "MERN Stack",
    image: "/images/projects/goal-setter.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amalguduru/goalsetter",
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
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        /> */}
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
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
    </section>
  );
};

export default ProjectsSection;
