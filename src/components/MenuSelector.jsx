import React from "react";
import { optionData } from "./ImageData";
export default function MenuSelector() {
  return (
    <div className="Option-Scroller">
      {optionData.map((option) => {
        return (
          <div className="Scroll-Content" key={option.id}>
            <a>
              <img className={option.cNameImg} src={option.src} />
            </a>
            <p>{option.title}</p>
          </div>
        );
      })}
    </div>
  );
}
