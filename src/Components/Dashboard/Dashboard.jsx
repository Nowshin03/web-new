import React, { useState, useEffect } from 'react';
import './dstyle.css';
import SideBar from './SideBar';
import Navbar from './Navbar';

function Dashboard() {
  const [userscount, setUserscount] = useState(0);
  const [coursescount, setCoursescount] = useState(0);
  const [enrolled, setEnrolled] = useState(0);

  // Mock data instead of backend
  useEffect(() => {
    // Simulated data (you can change anytime)
    const mockUsers = 120;
    const mockCourses = 35;
    const mockEnrolled = 210;

    setUserscount(mockUsers);
    setCoursescount(mockCourses);
    setEnrolled(mockEnrolled);
  }, []);

  return (
    <div style={{ backgroundColor: "#eee", minHeight: "100vh" }}>
      <SideBar current={"dashboard"} />
      
      <section id="content">
        <Navbar />
        
        <main>
          <div className="head-title">
            <div className="left">
              <h1 id="dashboard" style={{ color: 'darkblue' }}>
                Dashboard
              </h1>
            </div>
          </div>

          <ul className="box-info">
            <li>
              <i className='bx bxs-group' id="i"></i>
              <span className="text">
                <h3>{userscount}</h3>
                <p>Total Users</p>
              </span>
            </li>

            <li>
              <i className='bx bx-book' id="i"></i>
              <span className="text">
                <h3>{coursescount}</h3>
                <p>Total Courses</p>
              </span>
            </li>

            <li>
              <i className='bx bxs-calendar-check' id="i"></i>
              <span className="text">
                <h3>{enrolled}</h3>
                <p>Total Enrollment</p>
              </span>
            </li>
          </ul>
        </main>
      </section>
    </div>
  );
}

export default Dashboard;