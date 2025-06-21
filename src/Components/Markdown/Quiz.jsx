import React, { useState } from "react";

// Function to parse quiz content from markdown
const parseQuizBlock = (text) => {
  const lines = text.split("\n").filter(Boolean); // Split into lines and remove empty lines
  const questions = [];

  let currentQuestion = null;

  lines.forEach((line) => {
    if (line.startsWith("Question:")) {
      // Start a new question
      if (currentQuestion) questions.push(currentQuestion); // Push the previous question
      currentQuestion = {
        question: line.replace("Question:", "").trim(),
        options: [],
      };
    } else if (line.startsWith("- [")) {
      // Add an option to the current question
      const correct = line.startsWith("- [x]");
      const text = line.replace(/- \[.\] /, "").trim();
      currentQuestion?.options.push({ text, correct });
    }
  });

  if (currentQuestion) questions.push(currentQuestion); // Push the last question
  return questions;
};

function Quiz({ children }) {
  const rawText = children;
  const parsedQuestions = parseQuizBlock(rawText);

  const [selectedOptions, setSelectedOptions] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx, oIdx) => {
    if (submitted) return;
    setSelectedOptions((prev) => ({ ...prev, [qIdx]: oIdx }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = parsedQuestions.reduce((acc, q, i) => {
    const selectedIdx = selectedOptions[i];
    if (selectedIdx !== undefined && q.options[selectedIdx].correct) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className="quiz-container">
      {parsedQuestions.map((q, qIdx) => (
        <div key={qIdx} className="quiz-question">
          <p className="font-semibold">{q.question}</p>
          <ul>
            {q.options.map((opt, oIdx) => {
              const selected = selectedOptions[qIdx] === oIdx;
              const correct = opt.correct;
              const showResult = submitted;
              const resultColor =
                showResult && selected
                  ? correct
                    ? "bg-green-200"
                    : "bg-red-200"
                  : selected
                  ? "bg-blue-100"
                  : "bg-white";

              return (
                <li
                  key={oIdx}
                  onClick={() => handleSelect(qIdx, oIdx)}
                  className={`p-2 rounded border cursor-pointer ${
                    selected ? "border-purple-600" : "border-gray-300"
                  } ${resultColor}`}
                >
                  {opt.text}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        disabled={submitted}
        className="submit-btn"
      >
        {submitted ? `Score: ${score}/${parsedQuestions.length}` : "Submit Quiz"}
      </button>
    </div>
  );
}

export default Quiz;
