import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import React, { useRef, useState } from "react";
import { app } from "../firebase/firebase";
import { auth } from "../firebase/firebase.js";
import { useUpdateProfile } from "react-firebase-hooks/auth";

const EmailSignUp = () => {
  const emailInput = useRef();
  // const auth = getAuth(app);

  const actionCodeSettings = {
    url: "http://localhost:3000/",
    handleCodeInApp: true,
    // iOS: {
    //   bundleID: "",
    // },
    // android: {
    //   packageName: "",
    //   installApp: true,
    //   minimumVersion: 12,
    // },
    // dynamicLinkDomain: "",
  };

  const [emailData, setEmailData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setEmailData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      sendSignInLinkToEmail(auth, emailData.email, actionCodeSettings).then(
        () => {
          window.localStorage.setItem("emailForSignIn", emailData.email);
        }
      );
    } catch (error) {
      console.log("Error:", error);
      alert("Error occured!! check the console");
    }
  };

  return (
    <div className="bg-gray-700 w-screen h-screen flex justify-center items-center  ">
      <form
        onSubmit={handleSubmit}
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
            ref={emailInput}
            type="email"
            name="email"
            value={emailData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button className="bg-purple-700" type="submit" onSubmit={handleSubmit}>
          Sign UP
        </button>
      </form>
    </div>
  );
};

export default EmailSignUp;
