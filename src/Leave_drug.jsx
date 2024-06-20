import React, { useEffect } from 'react';
import TopBar from './Components/Top_bar';
import TopBar2 from './Components/Top_bar2';
import "./Leave_drug.css"

const Leave_drug = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This effect runs only once after the component mounts

  const handleClick = () => {
    // Open the link in a new tab/window
    window.open('https://forms.gle/wQxc6GyaRUhMmTfo8', '_blank');
  };

  return (
    <div>
      <TopBar />
      <div className="main_leave">
        <h1 className="slogan1">"Step into</h1>
        <h1 className="slogan2"> Sobriety: Your </h1>
        <h1 className="slogan3">Journey Begins</h1>
        <h1 className="slogan4"> Here!"</h1>
      </div>

      <div className="self-leave">
        <h1 className="heading2">What You Can Do On Your End</h1>
        <TopBar2 />
      </div>
      
      <div className="survey_div">
        <h1 className="heading2 mt-40">LeaveIt coach you in leaving you drug abuse.  </h1>
        <div className="survey_box">
          <h2 className="consent_ques">Answer these simple questions to get started </h2>
          <button className='start_button' onClick={handleClick}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Leave_drug;
