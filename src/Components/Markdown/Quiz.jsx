import React, { useState } from 'react';

function Quiz({ question, options = [], answer }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const isCorrect = selected === answer;

  return (
    <div className="quiz-box">
      {/* <p><strong>Question:</strong> {question}</p>
      {options.map((opt, idx) => (
        <div key={idx}>
          <label>
            <input
              type="radio"
              name="quiz"
              value={opt}
              onChange={() => setSelected(opt)}
              disabled={submitted}
            />
            {opt}
          </label>
        </div>
      ))}
      {!submitted && <button onClick={handleSubmit}>Submit</button>}
      {submitted && (
        <p style={{ color: isCorrect ? 'green' : 'red' }}>
          {isCorrect ? 'Correct!' : `Incorrect. Correct answer: ${answer}`}
        </p>
      )} */}
      abc
    </div>
  );
}

export default Quiz;
