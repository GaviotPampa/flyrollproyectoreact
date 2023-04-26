import React from "react";
import { FaRegStar } from "react-icons/fa";

import "./button.css";

function ButtonFavorite() {
  return (
    <button className="btnFav">
      <FaRegStar className='"fav_icon' />
    </button>
  );
}

export default ButtonFavorite;
