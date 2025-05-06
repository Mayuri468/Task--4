import React from "react";

const Step1 = ({ formData, onChange }) => {
  return (
    <div>
      <h3>Step 1: Basic Info</h3>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) => onChange("fullName", e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => onChange("email", e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => onChange("password", e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) => onChange("confirmPassword", e.target.value)}
      />
    </div>
  );
};

export default Step1;
