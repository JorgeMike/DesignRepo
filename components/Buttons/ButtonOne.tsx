import ButtonsStyles from "../../styles/Buttons/buttons.module.css";

export default function ButtonOne() {
  return (
    <div className={ButtonsStyles.button1_container}>
      <a href="#" className={ButtonsStyles.button1}>
        <div className={ButtonsStyles.button1_line}></div>
        <div className={ButtonsStyles.button1_line}></div>
        <span className={ButtonsStyles.button1_text}>Entry</span>
        <div className={ButtonsStyles.button1_drow1}></div>
        <div className={ButtonsStyles.button1_drow2}></div>
      </a>
    </div>
  );
}
