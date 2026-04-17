import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Progress, Modal } from "antd";

import Feedback from "./Feedback";

const Course = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const courseId = location.pathname.split("/")[2];

  const playerRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [course, setCourse] = useState(null);

  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);

  const [changePlayed, setChangePlayed] = useState(0);

  const [popup, setPopup] = useState(false);

  // ✅ Mock course data (frontend only)
  useEffect(() => {
    const mockCourses = {
      1: {
        course_id: 1,
        course_name: "Web Development",
        instructor: "John Doe",
        description: "Learn HTML, CSS, JS from scratch",
        y_link: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
      },
      2: {
        course_id: 2,
        course_name: "Machine Learning",
        instructor: "Andrew Ng",
        description: "Intro to ML concepts",
        y_link: "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
      },
    };

    setCourse(mockCourses[courseId] || mockCourses[1]);
  }, [courseId]);

  // set duration
  const handleDuration = () => {
    const d = playerRef.current.getDuration();
    setDuration(d);
  };

  // progress tracking (frontend only)
  const handleProgress = (state) => {
    if (changePlayed + 10 <= state.playedSeconds) {
      setChangePlayed(state.playedSeconds);
      setPlayed(state.playedSeconds);
    }
  };

  const progressPercent =
    duration > 0 ? Math.ceil((played / duration) * 100) : 0;

  return (
    <div>

      <h3 style={{
        textAlign: "center",
        backgroundColor: "darkblue",
        color: "white",
        padding: "10px"
      }}>
        The Complete {course?.course_name} Course
      </h3>

      <div style={{ display: "flex", gap: "20px", padding: "30px" }}>

        {/* Video */}
        <ReactPlayer
          ref={playerRef}
          url={course?.y_link}
          controls
          width="60%"
          height="440px"
          onDuration={handleDuration}
          onProgress={handleProgress}
        />

        {/* Info */}
        <div style={{ width: "40%" }}>
          <h4>Course Info</h4>
          <p>{course?.description}</p>

          <h4>Instructor: {course?.instructor}</h4>

          <p>Progress: {progressPercent}%</p>

          {/* Quiz Unlock Logic */}
          {progressPercent >= 98 ? (
            <button
              className="enroll-button"
              onClick={() => navigate(`/assessment/${courseId}`)}
            >
              Take Quiz
            </button>
          ) : (
            <button
              className="enroll-button-deactive"
              onClick={() => setIsModalOpen(true)}
            >
              Take Quiz
            </button>
          )}

          <button
            className="enroll-button"
            onClick={() => navigate("/learnings")}
          >
            Back
          </button>
        </div>
      </div>

      {/* Description */}
      <div style={{ padding: "20px" }}>
        <h4>Description</h4>
        <p>{course?.description}</p>
      </div>

      {/* Progress Bar */}
      <div style={{ padding: "20px" }}>
        <Progress percent={progressPercent} />
      </div>

      {/* Discussion */}
      <button
        className="enroll-button"
        onClick={() => navigate(`/discussion/${courseId}`)}
      >
        Discussion
      </button>

      <Feedback courseid={courseId} />

      {/* Modal */}
      <Modal
        title="Note"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Complete 100% of your course to take Quiz</p>
      </Modal>

    </div>
  );
};

export default Course;