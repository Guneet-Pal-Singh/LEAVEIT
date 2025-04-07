import React, { useEffect } from 'react';
import './home.css';
import Card from './Components/Card';
import TopBar from './Components/Top_bar';


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This effect runs only once after the component mounts

  return (
    <div>
      <TopBar />
      <div className="home" id="home">

        <h1 className="new">The Ultimate</h1>
        <h1 className="new2">Guide to </h1>
        <h1 className="greetings">OVERCOME</h1>
        <h1 className="greetings2">SUBSTANCE</h1>
        <h1 className="greetings3">ABUSE</h1>
        <img
          src={'src/Images/drug.png'}
          alt="Drug"
          className="drug-image"
        />
      </div>
      <div className="Home-bottom">
        <h1 className="rec">Recovery Starts Here</h1><br />
        <div className="boxes">
          <div className="Contact_box">
            <h1 className="cont_box_text_heading">Speak to a Treatment Provider</h1>
            <p className="cont_box_text_content">Find a rehab for yourself or a loved one by speaking with a treatment provider here.
              <ul className="list-disc pl-4">
                <li>Free and confidential</li>
                <li>Available 24/7</li>
                <li>Discover your treatment options</li>
              </ul></p>
            <h1 className="cont_box_text_heading">Call +91 xxxxxxxxxx</h1>
          </div>
          <div className="Pincode_box">
          <h1 className="cont_box_text_heading">Find a Treatment Center Near You</h1>
          <input className="pincode_inp" type="text" placeholder="Enter your pincode..."></input>
          <br></br>
          <br></br>
          <button className="submit_btn">Submit</button>


          </div>
          
          
          
          </div>
      </div>
    </div>
  );
};

export default Home;
