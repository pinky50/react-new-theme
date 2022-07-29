import React from "react";

export default function Tabs({ filterCategory, tabsData }) {
  return (
    <div>
      <div className="text-center mb-4">
        {tabsData.map((category, index) => {
          return (
            <button
              type="button"
              className="portfolio-btn btn btn-outline-primary mx-2 text-capitalize"
              onClick={() => filterCategory(category)}
              key={index}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
