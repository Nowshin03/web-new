import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Courses() {
  const navigate = useNavigate();

  const userId = localStorage.getItem("id");
  const authToken = localStorage.getItem("token");

  const [courses, setCourses] = useState([]);
  const [enrolled, setEnrolled] = useState([]);

  // ✅ Mock course data (no backend)
  useEffect(() => {
    const mockCourses = [
      {
        course_id: 1,
        courseName: "Web Development",
        price: 2000,
        instructor: "Rayhan Rahman",
        p_link: "https://via.placeholder.com/300",
      },
      {
        course_id: 2,
        courseName: "Machine Learning",
        price: 1500,
        instructor: "Riyad Ahmed",
        p_link: "https://via.placeholder.com/300",
      },
      {
        course_id: 3,
        courseName: "Database Systems",
        price: 2000,
        instructor: "Samanta Begum",
        p_link: "https://via.placeholder.com/300",
      },
      {
        course_id: 4,
        courseName: "Object Oriented Programming",
        price: 1500,
        instructor: "Naz Ahmed",
        p_link: "https://via.placeholder.com/300",
      },
    ];

    setCourses(mockCourses);

    // ✅ Load enrolled courses from localStorage
    const stored = JSON.parse(localStorage.getItem("enrolled")) || [];
    setEnrolled(stored);
  }, []);

  // ✅ Fake enroll (no backend)
  function enrollCourse(courseId) {
    if (!authToken) {
      toast.error("You need to login first");
      setTimeout(() => navigate("/login"), 1000);
      return;
    }

    let updated = [...enrolled, courseId];
    setEnrolled(updated);

    localStorage.setItem("enrolled", JSON.stringify(updated));

    toast.success("Course Enrolled Successfully!");

    setTimeout(() => {
      navigate(`/course/${courseId}`);
    }, 1000);
  }

  return (
    <div>
      <Navbar page={"courses"} />

      <div className="courses-container" style={{ marginTop: "20px" }}>
        {courses.map((course) => (
          <div key={course.course_id} className="course-card">

            <img
              src={course.p_link}
              alt={course.courseName}
              className="course-image"
            />

            <div className="course-details">
              <h3>
                {course.courseName}
              </h3>

              <p>Price: Rs. {course.price}</p>
              <p>Tutorial by {course.instructor}</p>
            </div>

            {enrolled.includes(course.course_id) ? (
              <button
                className="enroll-button"
                style={{
                  backgroundColor: "darkblue",
                  color: "#F4D03F",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("/learnings")}
              >
                Enrolled
              </button>
            ) : (
              <button
                className="enroll-button"
                onClick={() => enrollCourse(course.course_id)}
              >
                Enroll
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;