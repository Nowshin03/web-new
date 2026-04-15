import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Simple frontend validation
    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    // ✅ Fake admin auth (frontend only)
    localStorage.setItem("adminUsername", username);
    localStorage.setItem("isAdminLoggedIn", "true");

    setError("");
    navigate("/dashboard");
  };

  return (
    <div>
      <Navbar />

      <div className="auth">
        <div className="container">

          <h3>Welcome Admin!</h3>
          <h2>Admin Login</h2>

          <form autoComplete="off" className="form-group" onSubmit={handleLogin}>

            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              style={{ width: "100%" }}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />

            <br />

            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              style={{ width: "100%" }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <br />

            {error && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                {error}
              </p>
            )}

            <div className="btn1">
              <button type="submit">
                LOGIN
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default AdminLogin;