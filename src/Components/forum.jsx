import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./css/forum.css";

function Forum() {
  const taskRef = useRef(null);

  const location = useLocation();
  const courseId = location.pathname.split("/")[2];

  const name = localStorage.getItem("name") || "User";

  const [message, setMessage] = useState([]);

  // Load messages from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("messages")) || [];

    const filtered = stored.filter(
      (m) => String(m.course_id) === String(courseId)
    );

    setMessage(filtered);
  }, [courseId]);

  const addTask = () => {
    const text = taskRef.current.value.trim();

    if (!text) {
      alert("Enter a message");
      return;
    }

    const newMessage = {
      name,
      course_id: courseId,
      content: text,
    };

    const stored = JSON.parse(localStorage.getItem("messages")) || [];

    const updated = [...stored, newMessage];

    localStorage.setItem("messages", JSON.stringify(updated));

    setMessage(updated.filter((m) => m.course_id === courseId));

    taskRef.current.value = "";
  };

  return (
    <div className="Forum">

      <h2>
        Discussion Forum for Course {courseId}
      </h2>

      {/* Input */}
      <div className="inputContainer">
        <textarea
          ref={taskRef}
          rows="5"
          placeholder="Write your message..."
        />
      </div>

      <div className="snd">
        <button onClick={addTask}>Send</button>
      </div>

      {/* Messages */}
      <div className="taskContainer">
        {message.map((msg, index) => (
          <div className="taskItem" key={index}>
            <p style={{ color: "black" }}>
              <b style={{ color: "brown" }}>{msg.name}</b>: {msg.content}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Forum;