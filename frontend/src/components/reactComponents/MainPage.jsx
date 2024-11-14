import React, { useState } from "react";
import Overview from "./Overview";
import Summaries from "./Summaries";
import "./MainPage.css";

export default function MainPage() {
  const [page, setPage] = useState("summaries");

  return (
    <>
      <nav className="nav-menu">
        <li className="nav-menu__item">
          <a
            className={page === "overview" ? "active" : ""}
            onClick={() => setPage("overview")}
          >
            Overview
          </a>
        </li>
        <li className="nav-menu__item">
          <a
            className={page === "summaries" ? "active" : ""}
            onClick={() => setPage("summaries")}
          >
            Summaries
          </a>
        </li>
      </nav>

      {page === "overview" ? <Overview /> : <Summaries />}
    </>
  );
}