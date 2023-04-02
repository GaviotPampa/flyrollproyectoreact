import React, {useState} from "react";
import { createOrder } from "../../services/firestore";
import { useNavigate } from "react-router-dom";

function CheckoutCart({cart,total} ) {
  const [orderId, setOrderId] = useState(null);
  const navigateTo = useNavigate();
  
  async function handleCheckout({cart}) {
    const orderData = {
      buyer: { name: "Damian", phone: "29297777", email: "damian29@email.com" },
      items: cart,
      total: total,
      timestamp: new Date(),
    };
    //createOrder(orderData)
    const id = await createOrder(orderData);
     setOrderId(id);

    // * 3.C - Redirección - React Router
    navigateTo(`/checkout/${id}`)

    // 4. vaciar el carrito del context
    
  }

   return (
    <div>
      {
        orderId ? 
          <h3>Gracias por tu compra</h3>
          :
          <button onClick={handleCheckout}>Terminar Compra</button>
      }      
    </div>
  );
  
}

export default CheckoutCart;
