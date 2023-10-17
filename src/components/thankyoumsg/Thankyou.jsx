import React from "react";
import { useParams } from "react-router-dom";

function ThankYou() {
  const styling = {
    color: "#E5CFF7",
    margin: "320px",
  };
  const { name } = useParams();

  return (
    <div style={styling}>
      <h1 className="thanks_msg">Thank you, {name}, for connecting!</h1>
    </div>
  );
}

export default ThankYou;
