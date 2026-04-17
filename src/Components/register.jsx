import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function RegistrationForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phno: "",
    password: "",
    dob: "",
    gender: "",
    location: "",
    profession: "",
    linkedin_url: "",
    github_url: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // FRONTEND ONLY REGISTER (no backend)
  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("Please fill required fields");
      return;
    }

    // store user in localStorage (fake database)
    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      id: Date.now(),
      ...formData,
    };

    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // auto login after registration (optional)
    localStorage.setItem("id", newUser.id);
    localStorage.setItem("name", newUser.username);
    localStorage.setItem("email", newUser.email);
    localStorage.setItem("isLoggedIn", "true");

    navigate("/login");
  };

  return (
    <div>
      <Navbar />

      <div className="registration-auth">
        <div className="registration-container">
          <h2>User Registration</h2>

          <form onSubmit={handleSubmit} className="registration-form">
            <input
              type="text"
              name="username"
              placeholder="Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phno"
              placeholder="Phone"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="dob"
              placeholder="DOB"
              onChange={handleChange}
            />

            <input
              type="text"
              name="gender"
              placeholder="Gender"
              onChange={handleChange}
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={handleChange}
            />

            <input
              type="text"
              name="profession"
              placeholder="Profession"
              onChange={handleChange}
            />

            <input
              type="text"
              name="linkedin_url"
              placeholder="LinkedIn"
              onChange={handleChange}
            />

            <input
              type="text"
              name="github_url"
              placeholder="GitHub"
              onChange={handleChange}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">Register</button>
          </form>

          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;