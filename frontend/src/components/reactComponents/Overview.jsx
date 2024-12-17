import React, {useState, useEffect} from "react";
import PrincipalChar from "./PrincipalChar";
import "./Overview.css";

export default function Overview() {
  const [data, setData] = useState(null)
  useEffect(()=>{
    fetch('https://spreads.gcf.group/fx/10003')
    // fetch('http://localhost:3000/fx/10003')
    .then(response => response.json())
    .then(json => {
      console.log("json",json)
      let obj = JSON.parse(json)
      setData(obj)
    })
  },[])
  return (
    <div className="grid-data">
      <div>
        <div className="table-title">
          <h3>wat10x</h3>
          <p>USD</p>
        </div>
        <table>
          <tbody>
            <tr className="table">
              <th scope="row">Balance</th>
              <td>${data ? data.balance : 0}</td>
            </tr>
            <tr>
              <th scope="row">Last day profit</th>
              <td>${data ? data.profit : 0}</td>
            </tr>
            <tr>
              <th scope="row">Equity</th>
              <td>${data ? data.equity : 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="colored-box">
        <PrincipalChar data={data ? data.balanceMonthly : [{time : 1, value: 1}]} />
      </div>
    </div>
  );
}
