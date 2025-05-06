import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Admin",
    avatar: null,
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    alert("Form Submitted Successfully!");
    console.log(formData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Registration</h2>
      {step === 1 && <Step1 formData={formData} onChange={handleChange} />}
      {step === 2 && <Step2 formData={formData} onChange={handleChange} />}
      {step === 3 && <Step3 formData={formData} onChange={handleChange} />}

      <div>
        <button onClick={handlePrev} disabled={step === 1}>
          Prev
        </button>
        {step === 3 ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
};

export default App;
