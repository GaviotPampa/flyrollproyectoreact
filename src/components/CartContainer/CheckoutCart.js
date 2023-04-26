import React, { useState } from "react";
import "./cartcontainer.css";
import { createOrder } from "../../services/firestore";
import { useNavigate } from "react-router-dom";
import { addDoc } from "firebase/firestore";

function CheckoutCart() {
 /*  const [orderId, setOrderId] = useState(null); */
  const navigateTo = useNavigate();

  async function handleCheckout() {
   /*  const orderData = {
      buyer: { name: "Vera", phone: "215379", email: "vera9@email.com" },
      items: cart,
      total: total,
      timestamp: new Date(),
    };
    const id = await createOrder(orderData); */
/*     setOrderId(id);
 */
    // * 3.C - Redirección - React Router
    navigateTo(`/checkout`)
     }
    return (
      <div>
        <button onClick={handleCheckout}>Terminar Compra</button>
      </div>
      
    );
    // 4. vaciar el carrito del context
  }
 
export default CheckoutCart;
