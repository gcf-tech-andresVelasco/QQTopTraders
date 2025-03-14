import React, { useState } from "react";

export default function Summaries() {
  return (
    <div>
      <h2>Summaries</h2>
      <table>
        <thead>
          <tr>
            <th>Account</th>
            <th>Balance</th>
            <th>Gross Profit</th>
            <th>Gross Loss</th>
            <th>Net Profit</th>
            <th>Profit factor</th>
            <th>Winners</th>
            <th>Winner%</th>
            <th>Losers</th>
            <th>Loser%</th>
            <th>Equity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10003</td>
            <td>10002</td>
            <td>10021</td>
            <td>10240</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
