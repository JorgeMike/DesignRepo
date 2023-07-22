import Image from "next/image";
import bannersStyles from "../../styles/Banners/banners.module.css";
import image8 from "../../public/images/cards/image8.jpg";
import image9 from "../../public/images/cards/image9.jpg";
import image10 from "../../public/images/cards/image10.jpg";
import image11 from "../../public/images/cards/image11.jpg";
import image12 from "../../public/images/cards/image12.jpg";
import image13 from "../../public/images/cards/image13.jpg";
import image14 from "../../public/images/cards/image14.jpg";

export default function BannerOne() {
  return (
    <div className={bannersStyles.banner1_container}>
      <h1 className={bannersStyles.banner1_title}>eFuse</h1>
      <h1
        className={`${bannersStyles.banner1_title} ${bannersStyles.banner1_title_large}`}
      >
        eFuse
      </h1>
      <div id="img-1" className={bannersStyles.banner1_img_container}>
        <Image
          width={500}
          height={500}
          className={bannersStyles.banner1_img}
          src={image8}
          alt="Example image"
        />
      </div>

      <div
        className={`${bannersStyles.banner1_img_container} ${bannersStyles.banner1_second_animation}`}
      >
        <Image
          width={500}
          height={500}
          className={bannersStyles.banner1_img}
          src={image9}
          alt="Example image"
        />
      </div>

      <div
        className={`${bannersStyles.banner1_img_container} ${bannersStyles.banner1_third_animation}`}
      >
        <Image
          width={500}
          height={500}
          className={bannersStyles.banner1_img}
          src={image10}
          alt="Example image"
        />
      </div>

      <div
        className={`${bannersStyles.banner1_img_container} ${bannersStyles.banner1_fourth_animation}`}
      >
        <Image
          width={500}
          height={500}
          className={bannersStyles.banner1_img}
          src={image11}
          alt="Example image"
        />
      </div>

      <div
        className={`${bannersStyles.banner1_img_container} ${bannersStyles.banner1_fifth_animation}`}
      >
        <Image
          width={500}
          height={500}
          className={bannersStyles.banner1_img}
          src={image12}
          alt="Example image"
        />
      </div>

      <div
        id="img-6"
        className={`${bannersStyles.banner1_img_container} ${bannersStyles.banner1_sixth_animation}`}
      >
        <Image
          width={500}
          height={500}
          className={bannersStyles.banner1_img}
          src={image13}
          alt="Example image"
        />
      </div>

      <div
        id="img-7"
        className={`${bannersStyles.banner1_img_container} ${bannersStyles.banner1_seventh_animation}`}
      >
        <Image
          width={500}
          height={500}
          className={bannersStyles.banner1_img}
          src={image14}
          alt="Example image"
        />
      </div>
    </div>
  );
}
