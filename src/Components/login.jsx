import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useUserContext } from "./UserContext";
import Navbar from "./Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  // const { setUser } = useUserContext();

  // FRONTEND ONLY LOGIN (no backend)
  const login = (e) => {
    e.preventDefault();

    // simple validation (demo purpose)
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    // fake user data (you can change this)
    const fakeUser = {
      id: "1",
      name: "Demo User",
      email: email,
      token: "fake-token-123",
    };

    // store in localStorage (like backend would do)
    localStorage.setItem("token", fakeUser.token);
    localStorage.setItem("email", email);
    localStorage.setItem("name", fakeUser.name);
    localStorage.setItem("id", fakeUser.id);

    // setUser(fakeUser);

    navigate("/courses");
  };

  return (
    <div>
      <Navbar />
      <div className="auth">
        <div className="container">
          <h3>Welcome!</h3>
          <br />
          <h2>Login</h2>
          <br />

          <form autoComplete="off" className="form-group" onSubmit={login}>
            <label>Email Id :</label>
            <input
              type="email"
              className="form-control"
              style={{ width: "100%" }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br />

            <label>Password :</label>
            <input
              type="password"
              className="form-control"
              style={{ width: "100%" }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <br />

            <div className="btn1">
              <button type="submit" className="btn btn-success btn-md mybtn">
                LOGIN
              </button>
            </div>
          </form>

          {error && <span className="error-msg">{error}</span>}

          <br />

          <span>
            Don't have an account? Register{" "}
            <Link to="/register">Here</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;