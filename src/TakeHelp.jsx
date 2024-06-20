import React, { useEffect } from 'react'
import TopBar from './Components/Top_bar';
import './TakeHelp.css'
const TakeHelp = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // This effect runs only once after the component mounts

    return (
        <div>
            <TopBar />
            <div className="takehelp">
                <h1 className="help_slogan1">Break Free,</h1>
                <h1 className="help_slogan2">Seek Care:</h1>
                <h1 className="help_slogan3">Your Doctor is</h1>
                <h1 className="help_slogan4">Your Partner</h1>
                <h1 className="help_slogan5">Against</h1>
                <h1 className="help_slogan6">Drug Abuse</h1>

            </div>
            <div className="doctor_info">
                <h1 className="heading2 mb-16">Recommended Doctors you can contact for help </h1><br></br>
                <div className="doctor1">
                    <h1 className="name_doc">Dr. Gaurav Gupta </h1>
                    <h1 className="add_doc">Address: B-5/255 Rohini Sector 7, Delhi </h1>
                    <h1 className="phn_doc">Contact-Info: 8105803710</h1>
                    <h1 className="rating">Rating: 4.5 Stars on JustDial</h1>

                </div>
                <div className="doctor2">
                    <h1 className="name_doc">Dr. Ravi Rana (Mahi Mind Centre) </h1>
                    <h1 className="add_doc">Address: Modi Nagar Ghaziabad, Modinagar </h1>
                    <h1 className="phn_doc">Contact-Info: 8904399094</h1>
                    <h1 className="rating">Rating: 4.8 Stars on JustDial</h1>
                </div>
                <div className="doctor3">
                    <h1 className="name_doc">Dr. Harshit Garg (M.D. AIIIMS) </h1>
                    <h1 className="add_doc">Address: Mayur Vihar Phase 1 Extension, Delhi
                    </h1>
                    <h1 className="phn_doc">Contact-Info: 7947147531
                    </h1>
                    <h1 className="rating">Rating: 4.5 Stars on JustDial</h1>
                </div>
                <div className="doctor4">
                    <h1 className="name_doc">Kiran Institute Of Ent Mental Health</h1>
                    <h1 className="add_doc">Address: Azadpur, Delhi
                    </h1>
                    <h1 className="phn_doc">Contact-Info: 8105803710</h1>
                    <h1 className="rating">Rating: 4.2 Stars on JustDial</h1>
                </div>
                <div className="doctor5">
                    <h1 className="name_doc">Dr. Tuleshwar Singh Md Aiims
                    </h1>
                    <h1 className="add_doc">Address: C 38, Lajpat Nagar 1, Delhi - 110024 (Near By Defence Colony Fly Over)
                    </h1>
                    <h1 className="phn_doc">Contact-Info: 7947147975
                    </h1>
                    <h1 className="rating">Rating: 4.8 Stars on JustDial</h1>
                </div>
                <div className="doctor6">
                    <h1 className="name_doc">Unnati Foundation
                    </h1>
                    <h1 className="add_doc">Address: Khasra No.822, Inam Vihar, Loni, Ghaziabad - 201102 (Near By Water Tank) </h1>
                    <h1 className="phn_doc">Contact-Info: 8867705307
                    </h1>
                    <h1 className="rating">Rating: 5 Stars on JustDial</h1>
                </div>

            </div>
            <div className="pin_out">
                <div className="Pincode_box2">
                    <h1 className="cont_box_text_heading2">Find a Treatment Center Near You</h1>
                    <input className="pincode_inp2" type="text" placeholder="Enter your pincode..."></input>
                    <br></br>
                    <br></br>
                    <button className="submit_btn2">Submit</button>


                </div>
            </div>
        </div>
    )
}

export default TakeHelp
