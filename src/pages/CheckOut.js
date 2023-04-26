import React from "react";
import "./checkout.css";
import { FaStar } from "react-icons/fa";

function CheckOut() {
  return (
    <>
      <div>
        <h2 className="gracias">Gracias por tu compra.</h2>
      </div>
      <div className="fastar_icon">
        <FaStar /> <FaStar style={{ color: "#4de5e5", fontSize: "40px" }} />
        <FaStar />
      </div>
    </>
  );
}

export default CheckOut;
