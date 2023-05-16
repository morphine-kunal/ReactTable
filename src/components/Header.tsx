import React from "react";
import style from "../style/header.module.css";

const Header = () => {
  const options = [
    {
      id: 1,
      name: "General",
    },
    {
      id: 2,
      name: "User",
    },
    {
      id: 3,
      name: "Plan",
    },
    {
      id: 4,
      name: "Blling",
    },
    {
      id: 5,
      name: "Integration",
    },
  ];
  return (
    <>
      <div className={style.page_heading}>
        <h2>Company Settings</h2>
      </div>
      <div className={style.tabs}>
        {options.map((option) => {
          return <div key={option.id} className={style.tab_items}>{option.name}</div>;
        })}
      </div>
    </>
  );
};

export default Header;
