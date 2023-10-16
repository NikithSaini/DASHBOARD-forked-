import React, { useState } from "react";
const options = ["Last 30 days"];
// import React from "react";

function Dropdown() {
  return (
    <div>
      <select>
        <option value="last30days">Last 30 days</option>
      </select>
    </div>
  );
}

export default Dropdown;
