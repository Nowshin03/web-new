import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import ImgUpload from "./ImgUpload";
import Performance from "./Dashboard/Performance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Profile() {
  const navigate = useNavigate();

  const authToken = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const [userDetails, setUserDetails] = useState(null);
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || ""
  );

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
      return;
    }

    // FRONTEND ONLY USER DATA (no backend)
    const fakeUser = {
      id: id,
      username: localStorage.getItem("name") || "Demo User",
      email: localStorage.getItem("email") || "demo@email.com",
      phno: "0000000000",
      gender: "Not set",
      dob: "Not set",
      profession: "Student",
      learningCourses: [],
      linkedin_url: "https://linkedin.com",
      github_url: "https://github.com",
    };

    setUserDetails(fakeUser);
  }, [authToken, navigate, id]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const imageData = e.target.result;
      localStorage.setItem("profileImage", imageData);
      setProfileImage(imageData);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Navbar page={"profile"} />

      <div className="profile-card" id="pbg" style={{ marginTop: "3%" }}>
        <ImgUpload onChange={handleImageChange} src={profileImage} />

        <h2 className="profile-name">{userDetails?.username}</h2>

        <div style={{ marginTop: "20px" }}>
          <h4>Email:</h4>
          <p>{userDetails?.email}</p>
        </div>

        <div>
          <h4>Phone Number:</h4>
          <p>{userDetails?.phno}</p>
        </div>

        <div>
          <h4>Gender:</h4>
          <p>{userDetails?.gender}</p>
        </div>

        <div>
          <h4>Date of Birth:</h4>
          <p>{userDetails?.dob}</p>
        </div>

        <div>
          <h4>Profession:</h4>
          <p>{userDetails?.profession}</p>
        </div>

        <div>
          <h4>Learning courses:</h4>
          <p>{userDetails?.learningCourses.length}</p>
        </div>

        <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
          <a href={userDetails?.linkedin_url} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "38px", color: "#0077B5" }} />
          </a>

          <a href={userDetails?.github_url} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "38px", marginLeft: "15px" }} />
          </a>
        </div>
      </div>

      <Performance />
    </div>
  );
}

export default Profile;