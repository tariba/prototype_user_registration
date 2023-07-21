import React from "react";

const Inputs = () => {
  return (
    <div>
      <div className="w-1/3 mb-10">
        <label>Name</label>
        <input type="text" />
      </div>
      <div className="w-1/3">
        <label>last name</label>
        <input type="text" />
      </div>
      <div className="w-1/3">
        <label>email</label>
        <input type="text" />
      </div>
      <div className="w-1/3">
        <label>address</label>
        <input type="text" />
      </div>
      <div className="w-1/3">
        <label>cat Name</label>
        <input type="text" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Inputs;
