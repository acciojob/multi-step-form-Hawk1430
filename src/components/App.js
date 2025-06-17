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
          onNext={nextStep}
          onPrevious={prevStep}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>       
    </main>
  )
}

export default App
