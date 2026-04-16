import React from "react";
import Navbar from "./Navbar";
import logo from "./images/logo.jpg";

import c1 from "./images/c1.jpg";
import c2 from "./images/html.png";
import c3 from "./images/sql.jpg";
import c4 from "./images/python.jpg";
import c5 from "./images/java.png";
import c6 from "./images/css.png";

import "./css/style.css";

import {
  faGraduationCap,
  faAward,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "./header and footer/Footer";

function Home() {
  const authToken = localStorage.getItem("token");

  return (
    <div>
      <Navbar page={"home"} />

      <section id="home">
        <h2>Enhance your future</h2>
        <p>
          Study is a learning platform with structured courses,
          videos, and assessments.
        </p>

        <div className="btn">
          <a className="blue" href="#">
            Learn More
          </a>
          <a className="yellow" href="#">
            Visit Courses
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <h1>Awesome Features</h1>

        <div className="fea-base">
          <div className="fea-box">
            <FontAwesomeIcon icon={faGraduationCap} />
            <h3>Scholarship Facility</h3>
          </div>

          <div className="fea-box">
            <FontAwesomeIcon icon={faStar} />
            <h3>Valuable Courses</h3>
          </div>

          <div className="fea-box">
            <FontAwesomeIcon icon={faAward} />
            <h3>Global Certification</h3>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="course">
        <h1>Popular Courses</h1>

        <div className="course-box">

          {[c1, c2, c3, c4, c5, c6].map((img, i) => (
            <div className="courses" key={i}>
              <img src={img} alt="course" />
              <div className="details">
                <h1>Course {i + 1}</h1>
                <div>
                  {[...Array(5)].map((_, idx) => (
                    <FontAwesomeIcon key={idx} icon={faStar} />
                  ))}
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>
          ))}

        </div>
      </section>

      {/* REGISTRATION */}
      <section id="registration">
        <div className="reminder">
          <h1>Register Now</h1>
        </div>

        {!authToken && (
          <div className="form">
            <h3>Create Account</h3>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="yellow">Submit</button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default Home;