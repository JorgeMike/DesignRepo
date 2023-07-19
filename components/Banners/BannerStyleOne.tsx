import { useStyle } from "@/src/context/styleContext";
import { TbBrandNextjs, TbBrandCss3 } from "react-icons/tb";
import { BiLogoReact } from "react-icons/bi";
import { bannerInfo } from "@/src/interfaces/bannerInfo.interface";

export default function BannerStyleOne({ info }: { info: bannerInfo }) {
  const style = useStyle().style;
  return (
    <div className={`container ${style.divisor_bottom}`}>
      <div className="row">
        <div
          className="col d-flex justify-content-center align-items-center"
          style={{ height: "20rem" }}
        >
          <div className="text-center">
            <p className="fs-1 fw-lighter m-0">{info.title}</p>
            <p className="fs-4 fw-lighter m-0">{info.subTitle}</p>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <div className={`${style.circle} me-3`}>
            <TbBrandNextjs size={80} />
          </div>
          <div className={`${style.circle} me-3`}>
            <BiLogoReact size={80} />
          </div>
          <div className={`${style.circle}`}>
            <TbBrandCss3 size={80} />
          </div>
        </div>
      </div>
    </div>
  );
}
