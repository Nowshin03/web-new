import React, { useState } from 'react';
import './dstyle.css';
import { useNavigate } from 'react-router-dom';

const Performance = () => {
  const navigate = useNavigate();

  // ✅ Mock enrolled courses
  const [enrolledcourses] = useState([
    { course_name: "Web Development" },
    { course_name: "Machine Learning" },
    { course_name: "Database Systems" },
  ]);

  // ✅ Mock performance data
  const [performanceData] = useState([
    {
      course: { id: 1, course_name: "Web Development" },
      marks: 85,
    },
    {
      course: { id: 2, course_name: "Machine Learning" },
      marks: 0,
    },
    {
      course: { id: 3, course_name: "Database Systems" },
      marks: 70,
    },
  ]);

  function certifiedUser(id) {
    navigate(`/certificate/${id}`);
  }

  return (
    <div className="performance-container" style={{ marginTop: '70px' }}>
      
      {/* Enrolled Courses */}
      <div style={{ marginBottom: '80px' }}>
        <h2 style={{ color: 'darkblue' }}>Courses Enrolled</h2>

        <table className="performance-table" style={{ width: '40%' }}>
          <thead>
            <tr>
              <th>Courses</th>
            </tr>
          </thead>

          <tbody>
            {enrolledcourses.map((data, index) => (
              <tr key={index}>
                <td>{data.course_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Performance Table */}
      <div>
        <h2 style={{ color: 'darkblue' }}>PERFORMANCE</h2>

        <table className="performance-table" style={{ marginBottom: '40px' }}>
          <thead>
            <tr>
              <th>Courses</th>
              <th>Progress</th>
              <th>Marks</th>
              <th>Certificate</th>
            </tr>
          </thead>

          <tbody>
            {performanceData.map((data, index) => (
              <tr key={index}>
                <td>{data.course.course_name}</td>

                <td
                  className={
                    data.marks !== 0 ? 'completed-status' : 'pending-status'
                  }
                >
                  {data.marks !== 0 ? 'Completed' : 'Pending'}
                </td>

                <td>{data.marks}</td>

                <td
                  className={
                    data.marks !== 0
                      ? 'completed-certificate'
                      : 'pending-certificate'
                  }
                  onClick={() => data.marks !== 0 && certifiedUser(data.course.id)}
                  style={{ cursor: data.marks !== 0 ? 'pointer' : 'not-allowed' }}
                >
                  {data.marks !== 0 ? 'Download Certificate' : 'Not Available'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Performance;