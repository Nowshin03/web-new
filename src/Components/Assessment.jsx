import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'antd';

function Assessment() {
  const location = useLocation();
  const navigate = useNavigate();

  const courseId = location.pathname.split("/")[2];

  // ✅ Mock questions (frontend only)
  const [test] = useState([
    {
      no: 1,
      question: "What is React?",
      option1: "Library",
      option2: "Framework",
      option3: "Database",
      option4: "Language",
      answer: "Library",
    },
    {
      no: 2,
      question: "JS stands for?",
      option1: "JavaSystem",
      option2: "JavaScript",
      option3: "JustScript",
      option4: "None",
      answer: "JavaScript",
    },
    {
      no: 3,
      question: "Which is used for state?",
      option1: "useState",
      option2: "useEffect",
      option3: "useFetch",
      option4: "useRoute",
      answer: "useState",
    },
  ]);

  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(3).fill(false)
  );

  const [correctCount, setCorrectCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const totalQsns = test.length;

  const handleRadioChange = (index, selectedOption) => {
    const updated = [...selectedAnswers];
    const qsn = test[index];

    if (qsn.answer === selectedOption) {
      updated[index] = true;
    } else {
      updated[index] = false;
    }

    setSelectedAnswers(updated);

    const newScore = updated.filter(Boolean).length;
    setCorrectCount(newScore);
  };

  const handleSubmit = () => {
    setOpenModal(true);

    // ✅ Optional: store result locally
    localStorage.setItem(
      `score_${courseId}`,
      JSON.stringify({
        score: (correctCount / totalQsns) * 100,
      })
    );
  };

  const message =
    correctCount === 3
      ? "Awesome 😎"
      : correctCount >= 2
      ? "Good 😊"
      : "Poor 😒";

  return (
    <div className="assessment-container">

      <div style={{ display: 'flex' }}>
        <button
          id="backbtn"
          className="submit-button"
          onClick={() => navigate(`/course/${courseId}`)}
        >
          <FontAwesomeIcon icon={faBackward} />
        </button>

        <h1 className="assessment-title">
          Assessment Questions
        </h1>
      </div>

      <div className="assessment-form">
        {test.map((question, index) => (
          <div key={question.no} style={{ padding: "10px", marginTop: "10px" }}>
            <h3>{question.question}</h3>

            {[question.option1, question.option2, question.option3, question.option4].map(
              (opt, i) => (
                <label key={i} className="option">
                  <input
                    type="checkbox"
                    onChange={() => handleRadioChange(index, opt)}
                  />
                  {opt}
                </label>
              )
            )}
          </div>
        ))}

        <div style={{ paddingTop: "20px" }}>
          <button
            onClick={() => navigate(0)}
            className="submit-button"
          >
            Reset
          </button>

          <button
            onClick={handleSubmit}
            className="submit-button11"
          >
            Submit
          </button>
        </div>
      </div>

      <Modal
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
      >
        <h2>Assessment Result</h2>
        <h1 style={{ textAlign: "center" }}>{message}</h1>
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          You scored {(correctCount / totalQsns) * 100}%
        </h3>
      </Modal>

    </div>
  );
}

export default Assessment;