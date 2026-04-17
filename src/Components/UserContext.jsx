const handleLogin = (e) => {
  e.preventDefault();

  // fake admin login (frontend only)
  if (username && password) {
    localStorage.setItem("adminUsername", username);
    navigate("/dashboard");
  } else {
    alert("Enter credentials");
  }
};