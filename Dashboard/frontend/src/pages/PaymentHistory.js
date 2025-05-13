// src/components/PaymentHistory.js
import React from "react";
import "../styles/PaymentHistory.css";

function PaymentHistory() {
  const payments = [
    { id: 1, amount: 1200, date: "2025-05-11" },
    { id: 2, amount: 1500, date: "2025-05-12" },
  ];

  return (
    <div>
      <h2>Payment History</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>₹{p.amount}</td>
              <td>{p.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentHistory;
