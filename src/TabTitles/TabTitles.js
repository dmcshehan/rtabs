import React from "react";
import {
  tabtitles,
  showVertical,
  showHorizontal,
  alignMiddle,
  alignRight,
} from "./TabTitles.module.css";

export default function TabTitles({ titles, config }) {
  return (
    <div
      className={`${tabtitles} ${
        config.layout === "vertical" ? showVertical : showHorizontal
      } ${
        config.alignTitles === "middle"
          ? alignMiddle
          : config.alignTitles === "right"
          ? alignRight
          : ""
      }`}
    >
      {titles}
    </div>
  );
}
