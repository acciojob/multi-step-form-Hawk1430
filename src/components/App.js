import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    model: '',
    car_price: '',
    card_info: '',
    expiry_date: ''
  });

  const nextStep = () => {
    if(step>3)
      setStep(prev => prev + 1)
  }
  const prevStep = () => {
    if(step>1)
      setStep(prev => prev - 1)
  }

  const validateForm = () => {  
  const cardRegex = /^\d{12}$/;
  const expiryRegex = /^(0?[1-9]|1[0-2])\/\d{2}$/;

  const isCardValid = cardRegex.test(formData.card_info);
  const isExpiryValid = expiryRegex.test(formData.expiry_date);

  if (!isCardValid) {
    alert("Card number must be exactly 12 digits.");
    return false;
  }

  if(isNaN(Number(formData.car_price))){
    alert("Price should be a number");
    return false;
  }

  if (!isExpiryValid) {
    alert("Expiry date must be in MM/YY format, e.g., 1/24 or 09/25.");
    return false;
  }

  return true;
};


  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormData({ ...formData, [id]: value });
  }

  const handleSubmit = () => {
    alert('Form submitted!');
    console.log(formData);
  };

  return (
    <main className="main__container">
      <div>
        <Step
          step={step}
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>       
    </main>
  )
}

export default App
