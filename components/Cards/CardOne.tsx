import Image from "next/image";
import image1 from "../../public/images/cards/image1.jpg";
import cardsStyles from "../../styles/Cards/cards.module.css";

export default function CardOne() {
  return (
    <figure className={cardsStyles.card1}>
      <Image src={image1} width={300} height={400} alt="Example card" />
      <figcaption>Example</figcaption>
    </figure>
  );
}
