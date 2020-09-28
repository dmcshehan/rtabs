import React from "react";
import { showVertical } from "./TabContents.module.css";

export default function TabContents({ content, config }) {
  return <div style={{ width: "100%" }}>{content}</div>;
}
