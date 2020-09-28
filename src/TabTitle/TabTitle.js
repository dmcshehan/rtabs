import React from "react";
import { tabTitle, title } from "./TabTitle.module.css";

export default function TabTitle({ children, handleClick, className }) {
  return (
    <div
      onClick={handleClick}
      className={`${className ? className : ""} ${title} ${tabTitle}`}
    >
      {children}
    </div>
  );
}
