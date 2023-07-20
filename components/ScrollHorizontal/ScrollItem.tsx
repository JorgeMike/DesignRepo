import { useStyle } from "@/src/context/styleContext";
import CheckRadio from "../checks/CheckRadio";
import { ReactComponentElement, ReactNode } from "react";
import { componentInfo } from "@/src/interfaces/componetInfo.interface";

export default function ScrollItem({ info }: { info: componentInfo }) {
  const style = useStyle().style;
  return (
    <div className={style.recently_added_container}>
      {info.component}
      <div className={style.component_info}>
        <h4 className={style.component_name}>{info.name}</h4>
        <h6 className={style.component_author}>Added by: {info.author}</h6>
        <h6 className={style.component_author}>source: {info.source}</h6>
        <p className="fw-light">/{info.location}</p>
      </div>
    </div>
  );
}
