import React from 'react';

const StudentMarksTable = () => {
  // Static data for the table
  const studentMarks = [
    { sno: 1, courseId: 'CSE101', marks: 85, userId: 'U001' },
    { sno: 2, courseId: 'CSE102', marks: 78, userId: 'U002' },
    { sno: 3, courseId: 'CSE103', marks: 92, userId: 'U003' },
    { sno: 4, courseId: 'CSE104', marks: 88, userId: 'U004' },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Student Marks Table</h2>
      <table
        style={{
          width: '80%',
          margin: '0 auto',
          borderCollapse: 'collapse',
          border: '1px solid #ddd',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>S.No</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Course ID</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Marks</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>User ID</th>
          </tr>
        </thead>
        <tbody>
          {studentMarks.map((student) => (
            <tr key={student.sno}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{student.sno}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{student.courseId}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{student.marks}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{student.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentMarksTable;
