import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h2>Creo que nos perdimos...🤪 </h2>
      <div style={{ textAlign: "center", margin: "0 150px" }}>
        <p style={{ marginBottom: "30px", fontSize: "20px" }}>
          No pudimos encontrar la página que estabas buscando.¿Qué tal explorar
          nuestros productos?
        </p>
        <Link to={"/"}>Volver al início</Link>
      </div>
    </>
  );
}
