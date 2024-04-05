import { useState, useEffect } from "react";
import axios from "axios";
import OrdersPage from "./ordersCard";

const OrdersContainer = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/order/getAllOrders"
        );
        console.log("Orders:", response.data);
        setOrders(response.data.response); // Access response.data.response for orders array
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      {orders.length ===0 ? (
        <p>You got no books. Lets add some!</p>
      ) : (
        <OrdersPage orders={orders} />
      )}
    </div>
  );
};

export default OrdersContainer;
