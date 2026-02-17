import { useState } from "react";

function AIAssistant() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleAsk = () => {
    const msg = message.toLowerCase().trim();

    if (
      msg.includes("about") ||
      msg.includes("who is") ||
      msg.includes("introduce") ||
      msg.includes("bhagyalakshmi")
    ) {
      setReply(
        "Bhagyalakshmi is a passionate 6th semester Computer Science Engineering student with a strong interest in full-stack development. She has experience in React, JavaScript, Node.js, Firebase, and Supabase. She has built projects like an E-commerce web application and a modern portfolio website with an AI Assistant. She aims to secure a job offer by her 7th or 8th semester."
      );
    } else if (msg.includes("skills")) {
      setReply(
        "Her technical skills include React, JavaScript, HTML, CSS, Node.js, Firebase, Supabase, and database management."
      );
    } else if (msg.includes("projects")) {
      setReply(
        "She has developed an E-commerce web application, a responsive portfolio website, and implemented authentication systems using Firebase and Supabase."
      );
    } else if (msg.includes("education") || msg.includes("branch")) {
      setReply(
        "She is currently pursuing Computer Science Engineering and is in her 5th semester."
      );
    } else if (msg.includes("goal") || msg.includes("career")) {
      setReply(
        "Her goal is to become a skilled full-stack developer and secure a job opportunity before completing her degree."
      );
    } else if (msg === "") {
      setReply("Please type a question 😊");
    } else {
      setReply(
        "You can ask about Bhagyalakshmi's skills, projects, education, or career goals."
      );
    }
  };

  return (
    <section
      style={{
        background: "linear-gradient(to right, #0f172a, #020617)",
        padding: "100px 20px",
        textAlign: "center",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "10px" }}>
        Ask My AI Assistant
      </h1>

      <p style={{ color: "#94a3b8", marginBottom: "40px" }}>
        Ask about my skills and projects
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something about me..."
          style={{
            width: "500px",
            maxWidth: "90%",
            padding: "18px",
            borderRadius: "12px",
            border: "1px solid #1e293b",
            backgroundColor: "#0f172a",
            color: "white",
            outline: "none",
            fontSize: "16px",
          }}
        />

        <button
          onClick={handleAsk}
          style={{
            padding: "16px 28px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(to right, #2563eb, #3b82f6)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Ask AI
        </button>
      </div>

      {reply && (
        <div
          style={{
            marginTop: "40px",
            maxWidth: "800px",
            marginInline: "auto",
            color: "#cbd5e1",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          {reply}
        </div>
      )}
    </section>
  );
}

export default AIAssistant;
