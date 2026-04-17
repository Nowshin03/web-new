import React, { useEffect, useState } from "react";

const Feedback = (props) => {
  const courseId = props.courseid;

  const [feedback, setFeedback] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  // ✅ Load feedback from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("feedbacks")) || [];

    const filtered = stored.filter(
      (f) => String(f.course_id) === String(courseId)
    );

    setFeedbacks(filtered.slice(0, 3));
  }, [courseId]);

  // ✅ Save feedback locally
  const sendFeedback = () => {
    if (!feedback.trim()) {
      alert("Please enter feedback");
      return;
    }

    const stored = JSON.parse(localStorage.getItem("feedbacks")) || [];

    const newFeedback = {
      course_id: courseId,
      comment: feedback,
    };

    const updated = [newFeedback, ...stored];

    localStorage.setItem("feedbacks", JSON.stringify(updated));

    setFeedback("");

    // update UI instantly
    const filtered = updated
      .filter((f) => String(f.course_id) === String(courseId))
      .slice(0, 3);

    setFeedbacks(filtered);
  };

  return (
    <div className="feedback-main">

      {/* Input */}
      <div className="get-input">
        <label>Your Feedback</label>

        <input
          type="text"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          style={{ width: "100%" }}
        />

        <button
          onClick={sendFeedback}
          style={{
            marginTop: "5px",
            padding: "5px",
            backgroundColor: "purple",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </div>

      {/* List */}
      <div className="feedback-list">
        <h3>Recent Feedbacks</h3>

        <ul>
          {feedbacks.map((item, index) => (
            <li key={index}>{item.comment}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Feedback;