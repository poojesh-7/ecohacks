"use client";

import { useEffect } from "react";

const RazorpayPage=()=>{
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openRazorpay = () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!, // public key
      amount: 49900, // ₹499 in paise
      currency: "INR",
      name: "My Website",
      description: "Test Payment - Frontend Only",
      handler: function (response: any) {
        alert(`Payment successful!\nPayment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#6366f1",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-2xl font-bold">Razorpay Frontend Integration</h1>
      <button
        onClick={openRazorpay}
        className="px-6 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        Pay ₹499
      </button>
    </div>
  );
}

export default RazorpayPage