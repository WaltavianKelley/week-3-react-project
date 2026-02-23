import React from 'react';
import { useState } from 'react';

export const OrderForm = () => {
  const [customer_name, setCustomerName] = useState("");
  const [order_details, setOrderTexts] = useState("");
  const [result, setResult] = useState("");

  const onChangeName = (e) => {

   setCustomerName(e.target.value);
  }

  const onChangeOrder = (e) => {

    setOrderTexts(e.target.value);
  }

const handleSubmit = async (e) => {
  e.preventDefault();
 
  const url = import.meta.env.VITE_SUPABASE_URL + "/rest/v1/orders"
  const token = import.meta.env.VITE_SUPABASE_ANON_KEY;
 
  const order = {
    customer_name,
    order_details
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: token,
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(order)
    });

    if (response.ok) {
      setResult(alert("Order submitted successfully!"));
      setCustomerName("");
      setOrderTexts("");
    } else { 
      setResult("Failed to submit order. Please try again.");
      console.log(import.meta.env);
      console.log(import.meta.env.VITE_BASE_URL);
    }
  } catch (error) {
    console.error("Error submitting order:", error);
    setResult("An error occurred while submitting the order. Please try again.");
  }
};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={customer_name} onChange={onChangeName} />
        </div>

        <div className="mb-3">
          <label className="form-label">Order</label>
          <textarea type="text" className="form-control" value={order_details} onChange={onChangeOrder} />
        </div>

        <button className='btn btn-success'>Send Order</button>
      </form>

      <p className='mt-3'>{result}</p>
    </>
  )
}

export default OrderForm;