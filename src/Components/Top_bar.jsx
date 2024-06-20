import React from 'react';
import './Top_bar.css'

import { Link } from 'react-router-dom';


function Top_bar() {
    return (
        <div className="top-0 w-ful z-10 sticky COLOR">
            <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8 ">

                <div className="inline-flex items-center space-x-2">
                    <img
                        className="h-16"
                        src="src\Images\logo.png"
                        alt="Dan_Abromov"
                    />
                    <span className="font-bold text-xl">LeaveIt</span>
                </div>

                <div className="lg:block">
                    <ul className="inline-flex space-x-8">
                        <li>
                            <button className="but font-semibold text-black hover:text-emerald-600 text-base"> <Link to="/" >Home</Link></button>
                        </li>
                        <li>
                            <button className="but font-semibold text-black hover:text-emerald-600 text-base"> <Link to="/Leave-Drugs" >Leave-Drugs</Link></button>
                        </li>
                        <li>
                            <button className="but font-semibold text-black hover:text-emerald-600 text-base"> <Link to="/TakeHelp">Take-Help</Link></button>
                        </li>
                        <li>
                            <button className="but font-semibold text-black hover:text-emerald-600 text-base"><Link to="/SuggestDoctor"> Suggest-Doctor</Link></button>
                        </li>
                      

                    </ul>
                </div>

                {/* <div className="ml-2 mt-2  lg:block">
                    <span className="relative inline-block">

                        <button className="h-10 w-10 rounded-full border border-gray-300">
                            <Link to="/login">
                                <img
                                    className="h-full w-full rounded-full"
                                    src="src\Images\profile-user.png"
                                    alt="Dan_Abromov"
                                />
                            </Link>
                        </button>

                    </span>
                </div> */}

            </div>
        </div>
    );
}

export default Top_bar;
