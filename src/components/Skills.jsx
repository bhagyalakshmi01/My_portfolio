import { useEffect, useState } from "react";
import "./Skills.css";
import supabase from "../supabase";

function Skills() {
  const [dbSkills, setDbSkills] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .order("id", { ascending: false });

    if (!error && data) {
      setDbSkills(data);
    }
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        Technical expertise and tools I work with
      </p>

      <div className="skills-container">
        
        {/* ===== OLD STATIC SKILLS (UNCHANGED) ===== */}

        <div className="skill-box">
          <span className="skill-accent"></span>
          <div className="skill-header">
            <span className="skill-icon">💻</span>
            <h3>Frontend Development</h3>
          </div>
          <p>React, JavaScript, HTML5, CSS3, Responsive Design</p>
        </div>

        <div className="skill-box">
          <span className="skill-accent"></span>
          <div className="skill-header">
            <span className="skill-icon">📊</span>
            <h3>Programming & Data</h3>
          </div>
          <p>Python, Data Science Fundamentals, Problem Solving</p>
        </div>

        <div className="skill-box">
          <span className="skill-accent"></span>
          <div className="skill-header">
            <span className="skill-icon">🛠️</span>
            <h3>Tools & Platforms</h3>
          </div>
          <p>Git, GitHub, Firebase, VS Code</p>
        </div>

        {/* ===== NEW SKILLS FROM ADMIN ===== */}

        {dbSkills.map((skill) => (
          <div className="skill-box" key={skill.id}>
            <span className="skill-accent"></span>
            <div className="skill-header">
              <span className="skill-icon">⚡</span>
              <h3>{skill.name}</h3>
            </div>
            <p>{skill.level}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;
