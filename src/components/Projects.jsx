import { useEffect, useState } from "react";
import "./projects.css";
import supabase from "../supabase";

import weatherImg from "../assets/weather.png";
import assignmentImg from "../assets/assignment.png";
import portfolioImg from "../assets/portfolio.png";

const Projects = () => {
  // 🔹 OLD STATIC PROJECTS (remain forever)
  const staticProjects = [
    {
      id: "static1",
      title: "Weather Intelligence App",
      description:
        "A real-time weather application that provides live weather data.",
      link: "https://live-weather-intelligence.netlify.app/",
      image: weatherImg,
    },
    {
      id: "static2",
      title: "Student Assignment Deadline Tracker",
      description:
        "Helps students track deadlines and manage tasks.",
      link: "https://student-assignment-tracker01.netlify.app/",
      image: assignmentImg,
    },
    {
      id: "static3",
      title: "My Portfolio",
      description: "Personal portfolio website.",
      link: "https://my1portfoliooo.netlify.app/",
      image: portfolioImg,
    },
  ];

  // 🔹 NEW PROJECTS FROM DATABASE
  const [dbProjects, setDbProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("id", { ascending: false });

    if (data) setDbProjects(data);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Selected personal and practical projects
      </p>

      <div className="projects-grid">

        {/* SHOW OLD PROJECTS */}
        {staticProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}

        {/* SHOW NEW PROJECTS */}
        {dbProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;
