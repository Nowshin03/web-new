import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddQuestion() {
  const location = useLocation();
  const navigate = useNavigate();

  const courseId = location.pathname.split("/")[2];

  const [formData, setFormData] = useState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    courseId: courseId,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (!value) {
      setFormErrors({ ...formErrors, [name]: `${name} is required` });
    } else {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic validation
    let errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = "This field is required";
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // ✅ Save to localStorage (frontend only)
    const existingQuestions =
      JSON.parse(localStorage.getItem("questions")) || [];

    const newQuestion = {
      id: Date.now(),
      ...formData,
    };

    localStorage.setItem(
      "questions",
      JSON.stringify([...existingQuestions, newQuestion])
    );

    console.log("Question saved (frontend only):", newQuestion);

    toast.success("Question Added successfully!", {
      position: "top-right",
      autoClose: 1000,
    });

    // Reset form
    setFormData({
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: '',
      courseId: courseId,
    });
  };

  return (
    <div className="add">
      <div className="container1">
        <h2>Add Question</h2>

        <form onSubmit={handleSubmit} className="addQuestion-form">

          {["question", "option1", "option2", "option3", "option4", "answer"].map((field) => (
            <div key={field}>
              <label>{field.toUpperCase()}:</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
              <div style={{ height: "20px" }}>
                {formErrors[field] && (
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {formErrors[field]}
                  </span>
                )}
              </div>
            </div>
          ))}

          <div className="btn1">
            <button type="submit">Add Question</button>
          </div>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}

export default AddQuestion;