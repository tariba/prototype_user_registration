import React from "react";
import { useState } from "react";

const Inputs = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    school: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  
      await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.uid,
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          school: formData.school,
        }),
      });
      alert("Registration successful!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred. Please try again later.");
    }
  };
  console.log(formData)
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />

      <label htmlFor="school">School Name:</label>
      <input
        type="text"
        id="school"
        name="school"
        value={formData.school}
        onChange={handleChange}
        required
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default Inputs;
