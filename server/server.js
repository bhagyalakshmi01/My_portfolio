const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// ===== READ PORTFOLIO FILE SAFELY =====
const filePath = path.join(__dirname, "data", "portfolio.txt");

let portfolioData = "";

try {
  const rawData = fs.readFileSync(filePath, "utf-8");
  portfolioData = rawData.replace(/\r/g, "");
  console.log("✅ Portfolio file loaded");
} catch (err) {
  console.error("❌ Cannot read portfolio.txt", err.message);
}

// ===== HELPER =====
function extractSection(sectionName) {
  const lines = portfolioData.split("\n");

  let start = lines.findIndex((line) =>
    line.toLowerCase().startsWith(sectionName.toLowerCase())
  );

  if (start === -1) return null;

  let result = [];
  for (let i = start + 1; i < lines.length; i++) {
    if (lines[i].includes(":")) break;
    if (lines[i].trim()) result.push(lines[i]);
  }

  return result.join(" ");
}

// ===== CHAT ROUTE =====
app.post("/chat", (req, res) => {
  const { question } = req.body;
  console.log("REQUEST RECEIVED:", question);

  if (!question) {
    return res.json({ answer: "Please ask something." });
  }

  const q = question.toLowerCase();
  let answer = "";

  if (q.includes("skill")) {
    answer = extractSection("Skills") || "Skills info not found.";
  } else if (q.includes("project")) {
    answer = extractSection("Projects") || "Projects info not found.";
  } else if (q.includes("location") || q.includes("from")) {
    answer = extractSection("Location") || "Location info not found.";
  } else if (
    q.includes("career") ||
    q.includes("objective") ||
    q.includes("job")
  ) {
    answer = extractSection("Career Objective") || "Career info not found.";
  } else if (q.includes("name")) {
    answer = "Bhagyalakshmi L N";
  } else if (q.includes("branch")) {
    answer = "Computer Science Engineering";
  } else {
    answer =
      "Please ask about skills, projects, career objective, branch or location.";
  }

  res.json({ answer });
});

// ===== START SERVER =====
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
