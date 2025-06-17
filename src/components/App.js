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

  const nextStep = () => {setStep(prev => prev + 1)}
  const prevStep = () => {setStep(prev => prev - 1)}

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
    setFormData(prev => ({...prev, [id]: value}));
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(validateForm()){
      console.log(formData)
      setStep(1);
      setFormData({
      first_name:"",
      last_name: "",
      model: "",
      car_price: 0,
      card_info: "",
      expiry_date: "",
    })}
  }

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
