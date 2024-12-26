import React, { useState, useEffect } from "react";
import CharSelector from "./CharSelector";
import "./Overview.css";

export default function Overview() {
  const [data, setData] = useState(null);
  const [userSelected, setUserSelected] = useState(10003);
  useEffect(() => {
    fetch("https://spreads.gcf.group/fx/10003")
      // fetch('http://localhost:3000/fx/10003')
      .then((response) => response.json())
      .then((json) => {
        let obj = JSON.parse(json);
        setData(obj);
      });
  }, []);
  const format = (number) => {
    const formattedDollarNoDecimals = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(number);
    return formattedDollarNoDecimals;
  };
  const fetchData = (user) => {
    fetch(`https://spreads.gcf.group/fx/${user}`)
      // fetch('http://localhost:3000/fx/10003')
      .then((response) => response.json())
      .then((json) => {
        let obj = JSON.parse(json);
        setData(obj);
      });
  }
  const onChangeHandler = (e) => {
    const selected = e.target.value
    setUserSelected(selected)
    fetchData(selected)
  }

  return (
    <div className="grid-data">
      <div>
      <select value={userSelected} onChange={(e) => onChangeHandler(e)}>
        <option value={10003}>10003</option>
        <option value={10002}>10002</option>
        <option value={10021}>10021</option>
        <option value={10240}>10240</option>
        {/* <option value={2}>Equity</option> */}
      </select>
        <div className="table-title">
          <h3>{userSelected}</h3>
          <p>USD</p>
        </div>
        <table>
          <tbody>
            <tr className="table">
              <th scope="row">Balance</th>
              <td>{data ? format(data.balance) : 0}</td>
            </tr>
            <tr>
              <th scope="row">Profit del último día</th>
              <td>{data ? format(data.profit) : 0}</td>
            </tr>
            <tr>
              <th scope="row">Equity</th>
              <td>{data ? format(data.equity) : 0}</td>
            </tr>
            <tr>
              <th scope="row">Margen</th>
              <td>{data ? format(data.margin) : 0}</td>
            </tr>
            <tr>
              <th scope="row">Margen libre</th>
              <td>{data ? format(data.MarginFree) : 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="colored-box">
        <CharSelector
          data={data ? data : {balanceMonthly : [{ time: 1, value: 1 }], profitMonthly : [{ time: 1, value: 1 }]}} 
        />
      </div>
    </div>
  );
}
