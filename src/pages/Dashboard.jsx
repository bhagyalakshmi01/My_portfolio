import { useEffect, useState } from "react";
import supabase from "../supabase";
import "./dashboard.css";
import toast from "react-hot-toast";

function Dashboard() {
  // ================= PROJECT =================
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    link: "",
  });

  // ================= SKILLS =================
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({
    name: "",
    level: "",
  });

  // ================= CONTACT =================
  const [contact, setContact] = useState({
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });

  useEffect(() => {
    fetchSkills();
    fetchContact();
  }, []);

  // ================= FETCH =================

  const fetchSkills = async () => {
    const { data } = await supabase.from("skills").select("*");
    if (data) setSkills(data);
  };

  const fetchContact = async () => {
    const { data } = await supabase
      .from("contact")
      .select("*")
      .eq("id", 1)
      .single();

    if (data) setContact(data);
  };

  // ================= ADD =================

  const addProject = async () => {
    await supabase.from("projects").insert([newProject]);
    setNewProject({ title: "", description: "", link: "" });
    toast.success("Project Added 🚀");
  };

  const addSkill = async () => {
    await supabase.from("skills").insert([newSkill]);
    setNewSkill({ name: "", level: "" });
    fetchSkills();
    toast.success("Skill Added");
  };

  // ================= DELETE =================

  const deleteSkill = async (id) => {
    const confirmDelete = window.confirm("Delete this skill?");
    if (!confirmDelete) return;

    await supabase.from("skills").delete().eq("id", id);
    fetchSkills();
    toast.success("Skill Deleted");
  };

  // ================= SAVE CONTACT =================

  const saveContact = async () => {
    await supabase.from("contact").upsert({ id: 1, ...contact });
    toast.success("Contact updated");
  };

  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="topbar">
        <h1>Admin Dashboard</h1>
        <button className="logout">Logout</button>
      </div>

      {/* WELCOME */}
      <div className="welcome">
        <h2>Welcome back, Admin 👋</h2>
        <p>Manage your portfolio content from here.</p>
      </div>

      {/* ADD PROJECT */}
      <div className="section">
        <h2 className="section-title">🚀 Add New Project</h2>

        <input
          placeholder="Project Title"
          value={newProject.title}
          onChange={(e) =>
            setNewProject({ ...newProject, title: e.target.value })
          }
        />
        <textarea
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
        />
        <input
          placeholder="Project Link"
          value={newProject.link}
          onChange={(e) =>
            setNewProject({ ...newProject, link: e.target.value })
          }
        />

        <button className="primary-btn" onClick={addProject}>
          Add Project
        </button>
      </div>

      {/* SKILLS */}
      <div className="section">
        <h2 className="section-title">💡 Skills</h2>

        <input
          placeholder="Skill name"
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
        />
        <input
          placeholder="Level"
          value={newSkill.level}
          onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
        />

        <button className="primary-btn" onClick={addSkill}>
          Add Skill
        </button>

        {skills.map((s) => (
          <div key={s.id} className="project-item">
            <div>
              <strong>{s.name}</strong> — {s.level}
            </div>

            <button className="delete" onClick={() => deleteSkill(s.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* CONTACT */}
      <div className="section">
        <h2 className="section-title">📞 Contact Info</h2>

        <input
          placeholder="Email"
          value={contact.email || ""}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
        <input
          placeholder="Phone"
          value={contact.phone || ""}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        />
        <input
          placeholder="LinkedIn"
          value={contact.linkedin || ""}
          onChange={(e) => setContact({ ...contact, linkedin: e.target.value })}
        />
        <input
          placeholder="GitHub"
          value={contact.github || ""}
          onChange={(e) => setContact({ ...contact, github: e.target.value })}
        />

        <button className="primary-btn" onClick={saveContact}>
          Save Contact
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
