import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function EditCourse() {
  const navigate = useNavigate();
  const location = useLocation();
  const courseId = location.pathname.split("/")[2];

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    course_name: "",
    instructor: "",
    price: "",
    description: "",
    y_link: "",
    p_link: "",
  });

  const [formErrors, setFormErrors] = useState({});

  // ✅ Mock load course (no backend)
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];

    const course = storedCourses.find(
      (c) => String(c.course_id) === String(courseId)
    );

    if (course) {
      setFormData(course);
    } else {
      // fallback mock
      setFormData({
        course_name: "Demo Course",
        instructor: "Admin",
        price: 0,
        description: "Sample description",
        y_link: "",
        p_link: "",
      });
    }
  }, [courseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (!value) {
      setFormErrors({ ...formErrors, [name]: `${name} is required` });
    } else {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  // ✅ Fake update (localStorage only)
  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;
    Object.values(formData).forEach((val) => {
      if (!val) hasError = true;
    });

    if (hasError) {
      setError("Please fill all fields");
      return;
    }

    let storedCourses = JSON.parse(localStorage.getItem("courses")) || [];

    storedCourses = storedCourses.map((c) =>
      String(c.course_id) === String(courseId) ? formData : c
    );

    localStorage.setItem("courses", JSON.stringify(storedCourses));

    toast.success("Course updated successfully!");

    setTimeout(() => {
      navigate("/DCourses");
    }, 1000);
  };

  return (
    <div className="add">
      <div className="container1">

        <h2>Edit Course</h2>

        <form onSubmit={handleSubmit} className="addCourse-form">

          <label>Course Name</label>
          <input
            name="course_name"
            value={formData.course_name}
            onChange={handleChange}
          />
          <span style={{ color: "red" }}>{formErrors.course_name}</span>

          <label>Instructor</label>
          <input
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
          />
          <span style={{ color: "red" }}>{formErrors.instructor}</span>

          <label>Price</label>
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
          />

          <label>Description</label>
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <label>Video Link</label>
          <input
            name="y_link"
            value={formData.y_link}
            onChange={handleChange}
          />

          <label>Image Link</label>
          <input
            name="p_link"
            value={formData.p_link}
            onChange={handleChange}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">Update Course</button>
        </form>

      </div>
    </div>
  );
}

export default EditCourse;