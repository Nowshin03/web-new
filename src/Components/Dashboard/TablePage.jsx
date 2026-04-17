// TablePage.jsx
import React from 'react';
import './dtablepage.css';

const TablePage = () => {
  const data = [
    { sno: 1, course_id: '1', student_id: '1', marks: 100 },
    { sno: 2, course_id: '1', student_id: '2', marks: 0 },
    { sno: 3, course_id: '2', student_id: '1', marks: 200 },
    { sno: 4, course_id: '2', student_id: '2', marks: 100 },
    { sno: 5, course_id: '3', student_id: '1', marks: 200},
    { sno: 6, course_id: '3', student_id: '2', marks: 100},
  ];

  return (
    <div className="table-container">
      <h1>Student Marks Table</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Course ID</th>
            <th>Student ID</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.sno}</td>
              <td>{row.course_id}</td>
              <td>{row.student_id}</td>
              <td>{row.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    
  );
};

export default TablePage;
