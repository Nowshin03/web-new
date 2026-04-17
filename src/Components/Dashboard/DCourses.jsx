import React, { useState } from "react";
import "./dstyle.css";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";

function Courses() {
  const navigate = useNavigate();

  // ✅ Mock Data (frontend only)
  const [courses, setCourses] = useState([
    { course_id: 1, course_name: "Web Development" },
    { course_id: 2, course_name: "Machine Learning" },
    { course_id: 3, course_name: "Database Systems" },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [cid, setCid] = useState(null);

  const showModal = (id) => {
    setCid(id);
    setOpenModal(true);
  };

  const handleOk = () => {
    // ✅ Delete from frontend state
    setCourses(courses.filter((c) => c.course_id !== cid));
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  function editCourse(course_id) {
    navigate(`/editCourse/${course_id}`);
  }

  function addQuestions(course_id) {
    navigate(`/addquestions/${course_id}`);
  }

  return (
    <>
      <div>
        <SideBar current={"courses"} />

        <section id="content">
          <Navbar />

          <main className="t">
            <div className="table-data" style={{ marginTop: "-10px" }}>
              <div className="order">
                <div id="course" className="todo">
                  <div className="head" style={{ marginTop: "-100px" }}>
                    <h3 style={{ color: "blue" }}>Courses</h3>

                    <button
                      onClick={() => navigate("/addcourse")}
                      style={{
                        backgroundColor: "darkblue",
                        borderRadius: "10px",
                        color: "white",
                        border: "none",
                        padding: "8px",
                        fontWeight: "500",
                      }}
                    >
                      Add Course <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>

                  <ul className="todo-list">
                    {courses.map((course) => (
                      <div key={course.course_id}>
                        <li
                          className="completed"
                          style={{
                            marginTop: "10px",
                            backgroundColor: "white",
                            color: "black",
                          }}
                        >
                          <p>{course.course_name}</p>

                          <div style={{ width: "50px", display: "flex" }}>
                            {/* Delete */}
                            <button
                              onClick={() => showModal(course.course_id)}
                              style={{
                                marginLeft: "-100px",
                                marginRight: "40px",
                                backgroundColor: "white",
                              }}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>

                            {/* Edit */}
                            <button
                              onClick={() => editCourse(course.course_id)}
                              style={{
                                marginRight: "40px",
                                backgroundColor: "white",
                              }}
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>

                            {/* Test */}
                            <button
                              onClick={() => addQuestions(course.course_id)}
                              style={{
                                backgroundColor: "#457BC1",
                                borderRadius: "10px",
                                color: "white",
                                border: "none",
                                padding: "8px",
                                fontWeight: "500",
                              }}
                            >
                              Test
                            </button>
                          </div>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>

      {/* Modal */}
      <Modal open={openModal} onOk={handleOk} onCancel={handleCancel}>
        <h3>Are you sure you want to delete?</h3>
      </Modal>
    </>
  );
}

export default Courses;