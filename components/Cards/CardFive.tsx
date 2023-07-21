import Image from "next/image";
import cardsStyles from "../../styles/Cards/cards.module.css";
import image1 from "../../public/images/cards/image7.jpg";
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function CardFive() {
  return (
    <div className={cardsStyles.card5}>
      <Image src={image1} width={300} height={400} alt="Example card" />
      <div className={cardsStyles.card5_content}>
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          exercitationem iste, voluptatum, quia explicabo laboriosam rem
          adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
          asperiores harum? Dicta odio aut hic.
        </p>
        <a href="#">
          Find out more
          <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  );
}
