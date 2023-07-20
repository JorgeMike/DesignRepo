import Image from "next/image";
import image3 from "../../public/images/cards/image3.jpg";
import cardsStyles from "../../styles/Cards/cards.module.css";

export default function CardTwo() {
  return (
    <div className={cardsStyles.card2}>
      <div className={cardsStyles.card2_content}>
        <h3 className={cardsStyles.card2_title}>Lorem ipsum</h3>
        <p className={cardsStyles.card2_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          eveniet possimus sapiente molestiae, eum deleniti.
        </p>
        <a href="#" className={cardsStyles.card2_link}>
          <span>Link to somewhere</span>
        </a>
      </div>
      <div className={cardsStyles.card2_extra}>
        <h4>More lorem text</h4>
      </div>
      <Image
        src={image3}
        alt="Example card"
        className={cardsStyles.card2_image}
        width={400}
        height={700}
      />
    </div>
  );
}
