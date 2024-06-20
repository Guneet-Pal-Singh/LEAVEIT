import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Top_bar() {
    const [helpContent, setHelpContent] = useState({
        heading: "Seek Professional Help",
        text: "Detoxification: Safely manage withdrawal symptoms under medical supervision.",
        text2: "Therapy and Counseling: Address underlying issues contributing to drug abuse through therapy modalities such as CBT and family therapy.",
        text3: "Medication-Assisted Treatment (MAT): Combine medications with counseling and behavioral therapies for opioid or alcohol addiction."
    });

    const handleButtonClick = (heading, text,text2,text3) => {
        setHelpContent({ heading, text,text2,text3});
    };

    return (
        <div className="w-6/12 h-28">
            <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8 rounded-full bg-white mt-10 shadow-md mt-20">
                <div className="lg:block">
                    <ul className="inline-flex space-x-8">
                        <li>
                            <button onClick={() => handleButtonClick("Seek Professional Help", "Detoxification: Safely manage withdrawal symptoms under medical supervision.","Therapy and Counseling: Address underlying issues contributing to drug abuse through therapy modalities such as CBT and family therapy.","Medication-Assisted Treatment (MAT): Combine medications with counseling and behavioral therapies for opioid or alcohol addiction.")} className="font-semibold text-black hover:text-green-600 text-xl">Seek Professional Help</button>
                        </li>
                        <li>
                            <button onClick={() => handleButtonClick("Build a Support Network", "Support Groups: Participate in peer support groups like Narcotics Anonymous (NA) or Alcoholics Anonymous (AA).","Family and Social Support: Involve loved ones in the recovery process for encouragement and understanding.","Therapy and Counseling: Seek professional help from therapists or counselors specializing in addiction recovery to explore underlying issues, develop coping strategies, and maintain progress.")} className="font-semibold text-black hover:text-green-600 text-xl"> Build a Support Network</button>
                        </li>
                        <li>
                            <button onClick={() => handleButtonClick("Adopt Healthy Habits", "Lifestyle Changes: Incorporate regular exercise, a nutritious diet, adequate sleep, and stress management techniques.","Holistic Approaches: Explore mindfulness practices, yoga, art therapy, and meditation to promote overall well-being.","Hobbies and Interests: Engage in activities that bring joy and fulfillment, such as gardening, cooking, painting, or playing a musical instrument, to redirect focus and build a sense of purpose outside of addiction.")} className="font-semibold text-black hover:text-green-600 text-xl"> Adopt Healthy Habits</button>
                        </li>
                        <li>
                            <button onClick={() => handleButtonClick("Plan for Long-Term Success", "Aftercare Programs: Continue treatment with aftercare programs, sober living homes, and outpatient services.","Relapse Prevention: Learn to identify triggers and high-risk situations to avoid relapse.","Continued Education: Pursue personal development and vocational training to support long-term recovery.")} className="font-semibold text-black hover:text-green-600 text-xl"> Plan for Long-Term Success</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col ">
                <h1 className="professional_help_head">{helpContent.heading}</h1>
                <p className="professional_help"><ul className="list-disc pl-4"><li>{helpContent.text}</li><li>{helpContent.text2}</li><li>{helpContent.text3}</li></ul></p>
            </div>
        </div>
    );
}

export default Top_bar;
