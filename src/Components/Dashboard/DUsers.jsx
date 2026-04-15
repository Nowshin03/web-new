import React, { useState } from 'react';
import './dstyle.css';
import SideBar from './SideBar';
import Navbar from './Navbar';

function Users() {
  // ✅ Mock data
  const [users] = useState([
    {
      id: 1,
      username: "Nusrath",
      email: "nusrath@example.com",
      phno: "017XXXXXXXX",
      profession: "Student",
    },
    {
      id: 2,
      username: "Rahim",
      email: "rahim@example.com",
      phno: "018XXXXXXXX",
      profession: "Developer",
    },
    {
      id: 3,
      username: "Karim",
      email: "karim@example.com",
      phno: "019XXXXXXXX",
      profession: "Designer",
    },
  ]);

  return (
    <div style={{ backgroundColor: "#eee", minHeight: "100vh" }}>
      <SideBar current={"user"} />

      <section id="content">
        <Navbar />

        <main>
          <div className="table-data" style={{ marginTop: "-10px" }}>
            <div className="order">
              <div className="head">
                <h3>Users Info</h3>
              </div>

              <table
                id="user"
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginTop: "20px",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "1px solid #ddd" }}>
                    <th style={{ padding: "10px", textAlign: "start" }}>
                      Username
                    </th>
                    <th style={{ padding: "10px", textAlign: "center" }}>
                      Email
                    </th>
                    <th style={{ padding: "10px", textAlign: "center" }}>
                      Phone Number
                    </th>
                    <th style={{ padding: "10px", textAlign: "center" }}>
                      Profession
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
                      <td style={{ padding: "10px", textAlign: "start" }}>
                        {user.username}
                      </td>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {user.email}
                      </td>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {user.phno}
                      </td>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {user.profession}
                      </td>
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

export default Users;