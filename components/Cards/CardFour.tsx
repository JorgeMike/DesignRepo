import cardsStyles from "../../styles/Cards/cards.module.css";

export default function CardFour() {
  return (
    <div className={cardsStyles.card4}>
      <div className={cardsStyles.card4_wrapper}>
        <div className={cardsStyles.card4_banner}></div>
        <h1>Toyota Supra</h1>
        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>
      </div>
      <div className={cardsStyles.card4_button_wrapper}>
        <button className={cardsStyles.card4_outline}>DETAILS</button>
        <button className={cardsStyles.card4_fill}>BUY NOW</button>
      </div>
    </div>
  );
}
