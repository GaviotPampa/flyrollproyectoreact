import React, { useState } from "react";
import { createOrder } from "../../services/firestore";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  console.log(userData);

  const navigateTo = useNavigate();

  function handleChange(evt) {
    const value = evt.target.value;
    const input = evt.target.name;

    const newUserData = { ...userData };
    newUserData[input] = value;
    setUserData(newUserData);
  }

  function clearForm() {
    setUserData({
      name: "",
      email: "",
      phone: "",
    });
  }

  async function submitData({ cart, total, userData }) {
    props.onSubmit(userData);

    const orderData = {
      buyer: userData,
      items: cart,
      total: total,
      timestamp: new Date(),
    };
    const id = await createOrder(orderData);
    navigateTo(`/gracias`);
  }

  return (
    <div>
      <h2>
        Completa tus datos para finalizar tu compra
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-balloon-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"
          />
        </svg>
      </h2>
      <div className="form">
        <div className="formdos">
          <div>
            <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
            <input
              value={userData.name}
              name="name"
              type="text"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={{ width: "100px", marginRight: 4 }}>Email</label>
            <input
              value={userData.email}
              name="email"
              type="email"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={{ width: "100px", marginRight: 4 }}>Phone</label>
            <input
              value={userData.phone}
              name="phone"
              type="text"
              required
              onChange={handleChange}
            />
          </div>

          <button
            disabled={
              !(
                userData.name !== "" &&
                userData.phone !== "" &&
                userData.email !== ""
              )
            }
            onClick={() => props.onSubmit(submitData)}
          >
            Crear orden
          </button>
          <button onClick={clearForm}>Limpiar datos</button>
        </div>
      </div>
    </div>
  );
}
