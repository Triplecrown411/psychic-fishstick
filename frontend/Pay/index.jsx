import React from 'react';
import { MiniKit, tokenToDecimals, Tokens } from "@worldcoin/minikit-js";

const sendPayment = async () => {
  try {
    if (!MiniKit.isInstalled()) {
      console.warn("Tried to invoke 'pay', but MiniKit is not installed.");
      return;
    }

    const res = await fetch("/api/initiate-payment", {
      method: "POST",
    });

    if (!res.ok) {
      console.error("Failed to initiate payment:", res.status, res.statusText);
      return;
    }

    const data = await res.json();
    if (!data?.id || typeof data.id !== "string") {
      console.error("Invalid payment initiation response:", data);
      return;
    }

    const { id } = data;
    console.log("Payment ID:", id);

    const payload = {
      reference: id,
      to: "0x0c892815f0B058E69987920A23FBb33c834289cf", // Test address
      tokens: [
        { symbol: Tokens.ETH, token_amount: tokenToDecimals(0.01, Tokens.ETH).toString() },
      ],
      description: "Test payment",
    };

    const { finalPayload } = await MiniKit.commandsAsync.pay(payload);

    if (!finalPayload || finalPayload.status === "error") {
      console.error("Payment command error:", finalPayload);
      return;
    }

    console.log("Payment sent!", finalPayload);
  } catch (err) {
    console.error("Payment failed:", err);
  }
};

export default function Pay() {
  return (
    <div>
      <button
        className="bg-blue-500 p-4 text-white rounded"
        onClick={sendPayment}
      >
        Pay
      </button>
    </div>
  );
}
