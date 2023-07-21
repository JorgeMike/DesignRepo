import React from "react";
import ButtonsStyles from "../../styles/Buttons/buttons.module.css";

export default function ButtonTwo() {
  return (
    <div className={ButtonsStyles.button2_container}>
      <div className={ButtonsStyles.button2}>
        <a>Read more</a>
      </div>
      <div className={ButtonsStyles.button2}>
        <a>Read more</a>
      </div>
      <div className={ButtonsStyles.button2}>
        <a>Read more</a>
      </div>
    </div>
  );
}
