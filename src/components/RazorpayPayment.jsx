import React from "react";

const RazorpayPayment = ({ order }) => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: order.key, // Enter the Key ID from your Razorpay Dashboard
      amount: order.amount, // Amount in the smallest currency unit
      currency: order.currency,
      name: "Your Company Name",
      description: "Test Transaction",
      order_id: order.id, // This is the order ID from the backend
      handler: (response) => {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        alert(`Order ID: ${response.razorpay_order_id}`);
        alert(`Signature: ${response.razorpay_signature}`);
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <button
      onClick={handlePayment}
      style={{ padding: "10px", fontSize: "16px" }}
    >
      Pay Now
    </button>
  );
};

export default RazorpayPayment;
