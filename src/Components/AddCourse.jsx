import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCourse() {
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    courseName: '',
    tutor: '',
    price: '',
    description: '',
    video: '',
    photo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Simple validation
    if (!formData.courseName || !formData.tutor) {
      setError('Please fill required fields');
      return;
    }

    // ✅ Fake "save" (frontend only)
    const existingCourses =
      JSON.parse(localStorage.getItem('courses')) || [];

    const newCourse = {
      id: Date.now(),
      ...formData,
    };

    localStorage.setItem(
      'courses',
      JSON.stringify([...existingCourses, newCourse])
    );

    console.log('Course added (frontend only):', newCourse);

    setError('');
    navigate('/courses');
  };

  return (
    <div className='add'>
      <div className='container1'>
        <h2>Course Registration</h2>

        <form onSubmit={handleSubmit} className="addCourse-form">

          <label>Name:</label>
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />

          <label>Instructor:</label>
          <input
            type="text"
            name="tutor"
            value={formData.tutor}
            onChange={handleChange}
            required
          />

          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <label>Video Link:</label>
          <input
            type="text"
            name="video"
            value={formData.video}
            onChange={handleChange}
            required
          />

          <label>Image Link:</label>
          <input
            type="text"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            required
          />

          {error && <span className='error-msg'>{error}</span>}

          <div className='btn1'>
            <button type="submit">Add Course</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddCourse;