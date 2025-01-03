import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fileType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFiles([...files, ...e.target.files]);
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Uploaded Files:", files);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", fileType: "" });
    setFiles([]);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <img src="photo.jpg" alt="Paper Plane" className="icon" />
          <h1><b>Send us your Files!</b></h1>
        </div>

        <label htmlFor="name"><b>Full Name</b></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email"><b>E-mail</b></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="example@example.com"
          required
        />

        <label htmlFor="fileType"><b>Select your file types</b></label>
        <select
          id="fileType"
          name="fileType"
          value={formData.fileType}
          onChange={handleInputChange}
          required
        >
          <option value="">Please Select</option>
          <option value="photo">Photo</option>
          <option value="document">Document</option>
          <option value="pdf">PDF</option>
        </select>

        <label htmlFor="file-upload"><b>Upload your files here</b></label>
        <div className="file-drop-zone">
          <input
            type="file"
            id="file-upload"
            multiple
            onChange={handleFileChange}
          />
          <p>Upload photos or files</p>
          <p>Drag and drop files here</p>
        </div>

        <div className="file-list">
          {files.map((file, index) => (
            <div className="file-item" key={index}>
              <span>{`${file.name} (${(file.size / 1024).toFixed(2)} KB)`}</span>
              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDeleteFile(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>

        <button type="submit"><b>Submit</b></button>
      </form>
    </div>
  );
};

export default App;
