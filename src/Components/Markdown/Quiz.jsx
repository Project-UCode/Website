import React, { useState } from "react";

const parseQuizBlock = (text) => {
  const lines = text.split("\n").filter(Boolean);
  const questions = [];

  let currentQuestion = null;

  lines.forEach((line) => {
    if (line.startsWith("Question:")) {
      if (currentQuestion) questions.push(currentQuestion);
      currentQuestion = {
        question: line.replace("Question:", "").trim(),
        options: [],
      };
    } else if (line.startsWith("- [")) {
      const correct = line.startsWith("- [x]");
      const text = line.replace(/- \[.\] /, "");
      currentQuestion?.options.push({ text, correct });
    }
  });

  if (currentQuestion) questions.push(currentQuestion);
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
    <div className="my-6 p-4 border border-purple-400 rounded-md bg-purple-50">
      {parsedQuestions.map((q, qIdx) => (
        <div key={qIdx} className="mb-6">
          <p className="font-semibold mb-2">{q.question}</p>
          <ul className="space-y-2">
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
                  className={`p-2 rounded border cursor-pointer ${selected ? "border-purple-600" : "border-gray-300"} ${resultColor}`}
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
        className="px-4 py-2 bg-purple-600 text-white text-sm rounded disabled:opacity-50"
      >
        {submitted ? `Score: ${score}/${parsedQuestions.length}` : "Submit Quiz"}
      </button>
    </div>
  );
}

export default Quiz;
