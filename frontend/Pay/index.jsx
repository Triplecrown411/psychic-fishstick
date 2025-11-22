import React from 'react';
import { MiniKit, tokenToDecimals, Tokens } from "@worldcoin/minikit-js";

const sendPayment = async () => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/initiate-payment`, {
      method: "POST",
    });

    const { id } = await res.json();
    console.log("Payment ID:", id);

    const payload = {
      reference: id,
      to: "0x0c892815f0B058E69987920A23FBb33c834289cf", // Test address
      tokens: [
        { token: Tokens.ETH, amount: tokenToDecimals(0.01) },
      ],
    };

    const mk = new MiniKit(payload);
    await mk.send();
    console.log("Payment sent!");
  } catch (err) {
    console.error(err);
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
