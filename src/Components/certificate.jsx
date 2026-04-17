import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-dom-confetti";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import img from "./images/logo.jpg";
import seal from "./images/seal.png";

const Certificate = () => {
  const navigate = useNavigate();

  const id = localStorage.getItem("id");

  const courseId = window.location.pathname.split("/")[2];

  const [userDetails, setUserDetails] = useState(null);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  const [pdfDownloading, setPdfDownloading] = useState(false);

  // ✅ Mock data instead of backend
  useEffect(() => {
    const mockUser = {
      username: localStorage.getItem("username") || "Student",
    };

    const mockCourses = {
      1: { course_name: "Web Development" },
      2: { course_name: "Machine Learning" },
      3: { course_name: "Database Systems" },
    };

    setUserDetails(mockUser);
    setCourse(mockCourses[courseId] || { course_name: "Course" });

    setLoading(false);
  }, [courseId]);

  const generateCertificateNumber = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const currentDate = formatDate(new Date());
  const certificateNumber = generateCertificateNumber();

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 100,
    dragFriction: 0.1,
    duration: 3000,
    colors: ["#3498db", "#e74c3c", "#27ae60"],
  };

  const handleDownloadPDF = () => {
    setPdfDownloading(true);

    const element = document.getElementById("certificate");

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("certificate.pdf");

      setPdfDownloading(false);
    });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      
      <Confetti active={!loading} config={confettiConfig} />

      <div
        id="certificate"
        style={{
          maxWidth: "600px",
          margin: "50px auto",
          textAlign: "center",
          border: "2px solid #3498db",
          padding: "30px",
          borderRadius: "15px",
        }}
      >
        <img
          src={img}
          alt="Logo"
          style={{
            width: "100px",
            borderRadius: "50%",
            marginBottom: "10px",
          }}
        />

        <h1 style={{ color: "#3498db" }}>
          Certificate of Completion
        </h1>

        <p>
          This is to certify that{" "}
          <b style={{ color: "red", fontSize: "22px" }}>
            {userDetails.username}
          </b>
        </p>

        <p>
          has successfully completed{" "}
          <b style={{ color: "green", fontSize: "20px" }}>
            {course.course_name}
          </b>
        </p>

        <p>Issued on {currentDate}</p>
        <p>Certificate ID: {certificateNumber}</p>

        <img
          src={seal}
          alt="seal"
          style={{ width: "100px", marginTop: "20px" }}
        />
      </div>

      <button
        onClick={handleDownloadPDF}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {pdfDownloading ? "Downloading..." : "Download PDF"}
      </button>
    </div>
  );
};

export default Certificate;