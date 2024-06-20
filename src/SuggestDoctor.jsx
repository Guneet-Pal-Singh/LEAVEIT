import { useRef } from 'react';
import React, { useEffect } from 'react';
import TopBar from './Components/Top_bar';
import "./SuggestDoctor.css";
import emailjs from '@emailjs/browser';

const SuggestDoctor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This effect runs only once after the component mounts
  const form = useRef();
  const handleSubmit = (event) => {
    
    event.preventDefault();
    // Add your form submission logic here
    // You can access form data using event.target.elements
    const pincode = event.target.elements.pincode.value;
    const doctorName = event.target.elements.doctorName.value;
    const address = event.target.elements.address.value;
    const degree = event.target.elements.degree.value;
    // const website = event.target.elements.website.value;
    console.log("Pin Code:", pincode);
    console.log("Doctor's Name:", doctorName);
    console.log("Address:", address);
    console.log("Degree:", degree);
    // console.log("Website:", website);
    emailjs
      .sendForm('service_p8s2fcm', 'template_6crdlsa', form.current, {
        publicKey: 'VuY8-jXkj1_4h5Hky',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          event.target.elements.pincode.value='';
          event.target.elements.doctorName.value='';
          event.target.elements.address.value='';
          event.target.elements.degree.value='';
        },
        (error) => {
          console.log('FAILED...', error.text);
          event.target.elements.pincode.value='';
          event.target.elements.doctorName.value='';
          event.target.elements.address.value='';
          event.target.elements.degree.value='';
        },
      );
  };

  const handleReset = (event) => {
    event.preventDefault();
    event.target.elements.pincode.value='';
    event.target.elements.doctorName.value='';
    event.target.elements.address.value='';
    event.target.elements.degree.value='';
    // event.target.elements.website.value='';
  };
  return (
    <div>
      <TopBar />
      <div className="head">
        <h1 className="text-center heading2">Suggest Doctors in Your Area</h1>
        <form ref={form} onSubmit={handleSubmit} onReset={handleReset}>
          <div className="inputs">
            <label htmlFor="pincode" className="what_it_is">Pin Code</label>
            <input name="pincode" id="pincode" className="pincode_inp" type="text" placeholder="Enter your pincode..." required />
            <label htmlFor="doctorName" className="what_it_is">Doctor's Name</label>
            <input name="doctorname" id="doctorName" className="pincode_inp" type="text" placeholder="Enter Doctor's Name..." required />
            <label htmlFor="address" className="what_it_is">Address</label>
            <input name="address" id="address" className="pincode_inp" type="text" placeholder="Enter Doctor's Address..." required />
            <label htmlFor="degree" className="what_it_is">Qualifications</label>
            <input name="degree" id="degree" className="pincode_inp" type="text" placeholder="Enter Doctor's Qualifications..." required />
            {/* <label htmlFor="website" className="what_it_is">Website (if available)</label>
            <input name="website" id="website" className="pincode_inp" type="url" placeholder="Enter Doctor's Website..." /> */}
          </div>
          <div className="button-container">
            <button type="submit" className="button_sub">Submit</button>
            <button type="reset" className="button_sub">Reset</button>
          </div>
        </form>
      </div>
      
    </div>
    
  );
};

export default SuggestDoctor;
