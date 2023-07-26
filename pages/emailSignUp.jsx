'use client'
import firebase from 'firebase/app';
import 'firebase/auth'
import { useState } from "react";
import { auth, app } from "../firebase/firebase.js"
import { sendSignInLinkToEmail } from "firebase/auth"
const EmailSignUp = () => {
  
  const sendEmailLink = async (e) => {
    e.preventDefault()
    const actionCodeSettings = {
      url: 'http://localhost:3000/inputs',
      handleCodeInApp: true,
      iOSBundleId: 'com.example.ios',
      androidPackageName: 'com.example.android',
      androidInstallApp: true,
      androidMinimumVersion: '12',
    };
  
    try {
      const email = emailData.email
      console.log(email)
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      alert('email sent')
      // Email sent successfully
    } catch (error) {
      // Handle errors here
      console.error('Error sending email link:', error);
    }
  };

  const [emailData, setEmailData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setEmailData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(emailData);
  };
  return (
    <div className="bg-gray-700 w-screen h-screen flex justify-center items-center  ">
      <form
        // onSubmit={handleSubmit}
        className="text-black bg-green-500 rounded-lg p-8 sm:mx-5 md:mx-20 lg:ml-20 lg:mr-20 shadow-2xl"
        style={{
          height: "90vh",
          flex: 1,
          borderRadius: "20px",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div className="mt-10">
          Email
          <input
            className="text-black"
            // ref={emailInput}
            type="email"
            name="email"
            value={emailData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-10">
          <button onClick={sendEmailLink} className="bg-blue-700 w-64 h-12 text-white">Sign UP</button>
        </div>
      </form>
    </div>
  );
};
export default EmailSignUp