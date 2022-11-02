import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { MenuItems } from "./MenuItems";

export default function Navbar(props) {
  return (
    <div className="container">
      <nav className="Navbar">
        <h1>THE CANDLE HUB</h1>
        <nav className="Links"></nav>
      </nav>

      <div className="Subnav">
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                {/* Temporary until utilization of routing */}
                <a href={item.url}>{item.title}</a>
              </li>
            );
          })}
          <li className="List-text">
            <a className="Search-btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
