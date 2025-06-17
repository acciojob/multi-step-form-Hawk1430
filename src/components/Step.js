import React from 'react'
import { useState } from 'react';

const Step = ({step, formData, nextStep, prevStep, handleChange, handleSubmit}) => {
  const [focusedField, setFocusedField] = useState('');

  return (
    <form onSubmit={handleSubmit} style={{padding: "30px"}}>
        {
            step === 1 && 
            <div id='step1'>
                <h2>Customer Details</h2>
                <label>
                  First Name:
                  <br/>
                  <input
                    type='text'
                    id='first_name'
                    value={formData.first_name} 
                    onChange={(e)=>handleChange(e)}
                    required
                  />
                </label>
                <br/>
                <label>
                  Last Name:
                  <br/>
                  <input
                    type='text'
                    id='last_name'
                    value={formData.last_name} 
                    onChange={(e)=>handleChange(e)}
                    required
                  />
                </label>
            </div>
        }
        {
            step === 2 && 
            <div id='step2'>
                <h2>Car Details</h2>
                <label>
                  Model:
                  <br/>
                  <input
                    type='text'
                    id="model"
                    value={formData.model} 
                    onChange={(e)=>handleChange(e)}
                    required
                  />
                </label>
                <br/>
                <label>
                  Price:
                  <br/>
                  <input
                    type='text'
                    id='car_price'
                    value={formData.car_price} 
                    onChange={(e)=>handleChange(e)}
                    required
                  />
                </label>
            </div>
        }
        {
            step === 3 && 
            <div id='step3'>
                <h2>Payment Details</h2>
                <label>
                  Credit Card Number:
                  <br/>
                  <input
                    type='text'
                    id='card_info'
                    value={formData.card_info} 
                    onChange={(e)=>handleChange(e)}
                    onFocus={() => setFocusedField('card')}
                    onBlur={() => setFocusedField('')}
                    required
                  />
                </label>
                {focusedField === 'card' && (
                  <p style={{ color: 'gray', fontSize: '12px' }}>
                    Card number must be exactly 12 digits.
                  </p>
                )}
                <br/>
                <label>
                  Expiration Date:
                  <br/>
                  <input
                    type='text'
                    id='expiry_date'
                    value={formData.expiry_date} 
                    onChange={(e)=>handleChange(e)}
                    onFocus={() => setFocusedField('expiry')}
                    onBlur={() => setFocusedField('')}
                    required
                  />
                </label>
                {focusedField === 'expiry' && (
                  <p style={{ color: 'gray', fontSize: '12px' }}>
                    Expiry date should be in MM/YY format. (e.g., 1/24 or 09/25)
                  </p>
                )}
            </div>
        }
        <div style={{marginTop: "10px"}}>
          {step>1 &&(
            <button type='button' onClick={prevStep} style={{marginRight: "5px"}}>Previous</button>
          )}
          {step<3 &&(
            <button type='button' onClick={nextStep}>Next</button>
          )}
          {step===3 &&(
            <button type='submit'>Submit</button>
          )}
        </div>
    </form>
  )
}

export default Step