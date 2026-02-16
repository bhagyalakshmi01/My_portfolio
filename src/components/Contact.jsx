import "./Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
import supabase from "../supabase";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSend = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase.from("messages").insert([form]);

    if (error) {
      alert("Error sending message");
      console.log(error.message);
    } else {
      alert("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact">
      <div className="contact-wrapper">
        {/* LEFT */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>I’m open to internships, jobs, and collaborations.</p>

          <div className="info-item">📧 bhagyalakshmiln23@gmail.com</div>
          <div className="info-item">📞 +91 6360858378</div>
          <div className="info-item">📍 Karnataka, India</div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/bhagyalakshmi-l-n-510b12369"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/bhagyalakshmi01"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button onClick={handleSend}>Send Message</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
