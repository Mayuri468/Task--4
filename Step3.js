import React from "react";

const Step3 = ({ formData, onChange }) => {
  return (
    <div>
      <h3>Step 3: Review & Submit</h3>
      <div>
        <b>Full Name:</b> {formData.fullName}
      </div>
      <div>
        <b>Email:</b> {formData.email}
      </div>
      <div>
        <b>Role:</b> {formData.role}
      </div>
      {formData.avatar && (
        <div>
          <b>Avatar:</b> <img src={URL.createObjectURL(formData.avatar)} alt="Avatar" width={100} />
        </div>
      )}
    </div>
  );
};

export default Step3;
