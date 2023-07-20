import Image from "next/image";
import cardsStyles from "../../styles/Cards/cards.module.css";
import image5 from "../../public/images/cards/image6.jpg";
import { BsFillPlayFill } from 'react-icons/bs';

export default function CardThree() {
  return (
    <a href="#" className={cardsStyles.card3}>
      <Image src={image5} width={350} height={200} alt="Example card" />
      <span className={cardsStyles.card3_footer}>
        <span>Lorem, ipsum dolor.</span>
        <span>Lorem, ipsum.</span>
      </span>
      <span className={cardsStyles.card3_action}>
        <BsFillPlayFill />
      </span>
    </a>
  );
}
