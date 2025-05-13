// src/components/Reports.js
import React from "react";
import "../styles/Reports.css";

function Reports() {
  const data = [
    { date: "2025-05-12", trips: 12, accepted: 10, rejected: 2 },
    { date: "2025-05-13", trips: 9, accepted: 7, rejected: 2 },
  ];

  return (
    <div>
      <h2>Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Trips</th>
            <th>Accepted</th>
            <th>Rejected</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, idx) => (
            <tr key={idx}>
              <td>{d.date}</td>
              <td>{d.trips}</td>
              <td>{d.accepted}</td>
              <td>{d.rejected}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;
