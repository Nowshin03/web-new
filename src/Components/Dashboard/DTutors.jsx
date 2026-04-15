import React, { useState } from 'react';
import './dstyle.css';
import SideBar from './SideBar';
import Navbar from './Navbar';

function Tutors() {
  // ✅ Mock data (frontend only)
  const [tutors] = useState([
    {
      tutor_id: 1,
      tutor_name: "John Doe",
      tutor_email: "john@example.com",
      tutor_phno: "1234567890",
      tutor_qualification: "MSc Computer Science",
    },
    {
      tutor_id: 2,
      tutor_name: "Sarah Khan",
      tutor_email: "sarah@example.com",
      tutor_phno: "9876543210",
      tutor_qualification: "BSc Software Engineering",
    },
    {
      tutor_id: 3,
      tutor_name: "Ahmed Rahman",
      tutor_email: "ahmed@example.com",
      tutor_phno: "019XXXXXXXX",
      tutor_qualification: "PhD AI",
    },
  ]);

  return (
    <div style={{ backgroundColor: "#eee", minHeight: "100vh" }}>
      <SideBar current={"tutor"} />

      <section id="content">
        <Navbar />

        <main>
          <div className="table-data" style={{ marginTop: "-10px" }}>
            <div className="order">
              <div className="head">
                <h3>Tutors Info</h3>
              </div>

              <table id="user">
                <thead>
                  <tr>
                    <th>Tutor Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Qualification</th>
                  </tr>
                </thead>

                <tbody>
                  {tutors.map((tutor) => (
                    <tr key={tutor.tutor_id}>
                      <td><p>{tutor.tutor_name}</p></td>
                      <td>{tutor.tutor_email}</td>
                      <td>{tutor.tutor_phno}</td>
                      <td>{tutor.tutor_qualification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Tutors;