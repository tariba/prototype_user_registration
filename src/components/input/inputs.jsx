import React from "react";
import { useState } from "react";
import axios from "axios";

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
    try { await axios.post("http://localhost:3001/users/", formData)
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
