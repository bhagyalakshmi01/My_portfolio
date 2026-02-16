import { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    console.log("BUTTON CLICKED");

    if (!question.trim()) {
      console.log("EMPTY QUESTION");
      return;
    }

    setLoading(true);
    setAnswer("");

    try {
      console.log("Calling backend at localhost...");

      const res = await fetch("/chat",
 {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      console.log("Response status:", res.status);

      if (!res.ok) {
        throw new Error("Server returned error");
      }

      const data = await res.json();
      console.log("Response data:", data);

      setAnswer(data.answer || "No answer received from server.");
    } catch (error) {
      console.log("Frontend error:", error);
      setAnswer("Cannot connect to backend.");
    }

    setLoading(false);
  };

  return (
    <section className="chatbot">
      <h2>Ask My AI Assistant</h2>
      <p>Ask about my skills and projects</p>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Ask something about me..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={askQuestion} disabled={loading}>
          {loading ? "Thinking..." : "Ask AI"}
        </button>
      </div>

      {answer && <div className="chat-answer">{answer}</div>}
    </section>
  );
}

export default Chatbot;
