import React from "react";

const ImgUpload = ({ onChange, src }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Create local preview only (no backend)
    const reader = new FileReader();
    reader.onload = () => {
      if (onChange) onChange(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload">
        {src ? (
          <img src={src} alt="Profile preview" />
        ) : (
          <div style={{ marginTop: "32px" }}>
            Upload your Image Here ✌
          </div>
        )}
      </div>

      <input
        id="photo-upload"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
    </label>
  );
};

export default ImgUpload;