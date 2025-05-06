import React, { useState } from "react";

const Step2 = ({ formData, onChange }) => {
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size < 1024 * 1024) {
      onChange("avatar", file);
      const reader = new FileReader();
      reader.onloadend = () => setAvatarPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert("File should be an image and less than 1MB.");
    }
  };

  return (
    <div>
      <h3>Step 2: Role & Avatar Upload</h3>
      <select
        value={formData.role}
        onChange={(e) => onChange("role", e.target.value)}
      >
        <option value="Admin">Admin</option>
        <option value="Staff">Staff</option>
        <option value="Visitor">Visitor</option>
      </select>

      <input type="file" onChange={handleFileChange} />
      {avatarPreview && <img src={avatarPreview} alt="Avatar Preview" width={100} />}
    </div>
  );
};

export default Step2;
