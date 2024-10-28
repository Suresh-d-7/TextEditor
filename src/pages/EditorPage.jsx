import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import { useNavigate } from 'react-router-dom';

const EditorPage = () => {
  const [text, setText] = useState(localStorage.getItem('document') || '');
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  const handleSave = () => {
    localStorage.setItem('document', text);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000); // Reset save message after 2 seconds
  };

  const handleLogout = () => {
    localStorage.removeItem('document'); 
    navigate('/login'); // Navigate to login page
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Document Editor</h2>
      <div className="mb-4">
        <ReactQuill
          value={text}
          onChange={setText}
          theme="snow" // Use the snow theme
          placeholder="Start typing your document..."
          className="border rounded" // Add Bootstrap styling
        />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <button onClick={handleSave} className="btn btn-primary">
          Save
        </button>
        {isSaved && <span className="text-success">Document saved!</span>}
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
};

export default EditorPage;
