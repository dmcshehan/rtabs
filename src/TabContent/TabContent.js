import React from "react";
import { tabContent } from "./TabContent.module.css";

export default function TabContent({ children }) {
  return <div className={tabContent}>{children}</div>;
}
