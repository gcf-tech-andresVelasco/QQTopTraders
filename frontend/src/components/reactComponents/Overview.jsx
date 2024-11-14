import React from "react";
import PrincipalChar from "./PrincipalChar";
import "./Overview.css";

export default function Overview() {
  return (
    <div class="grid-data">
      <div>
        <div className="table-title">
          <h3>wat10x</h3>
          <p>USD</p>
        </div>
        <table>
          <tbody>
            <tr className="table">
              <th scope="row">Chris</th>
              <td>22</td>
            </tr>
            <tr>
              <th scope="row">Dennis</th>
              <td>45</td>
            </tr>
            <tr>
              <th scope="row">Sarah</th>
              <td>29</td>
            </tr>
            <tr>
              <th scope="row">Karen</th>
              <td>36</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="colored-box">
        <PrincipalChar />
      </div>
    </div>
  );
}
