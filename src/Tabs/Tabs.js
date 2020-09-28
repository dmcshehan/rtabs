import React, { useState } from "react";

import TabTitles from "../TabTitles/TabTitles";
import TabContents from "../TabContents/TabContents";

import {
  hideTabContent,
  showTabContent,
  showVertical,
  horizontalTitle,
  verticalTitle,
  activeTab,
} from "./Tabs.module.css";

import "./index.css";

export default function Tabs({ children, config, className }) {
  const [showIndex, setShowIndex] = useState(0);

  if (config === undefined) {
    config = {};
  }

  const titles = children
    .map(({ props }) => props.children)
    .map((t, index) => (
      <div
        key={index}
        onClick={() => setShowIndex(index)}
        className={`${
          config.layout === "vertical" ? verticalTitle : horizontalTitle
        }`}
        style={
          showIndex === index
            ? config.layout === "vertical"
              ? {
                  borderRight: "2px solid",
                  borderColor: config.activeColor
                    ? config.activeColor
                    : "black",
                }
              : {
                  borderBottom: "2px solid",
                  borderColor: config.activeColor
                    ? config.activeColor
                    : "black",
                }
            : {}
        }
      >
        {t[0]}
      </div>
    ));

  const content = children
    .map(({ props }) => props.children)
    .map((t, index) => (
      <div
        key={index}
        className={showIndex !== index ? hideTabContent : showTabContent}
      >
        {t[1]}
      </div>
    ));

  return (
    <div className={config.layout === "vertical" ? showVertical : ""}>
      <TabTitles titles={titles} config={config} />
      <TabContents content={content} config={config} />
    </div>
  );
}
