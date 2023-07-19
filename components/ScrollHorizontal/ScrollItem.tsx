import { useStyle } from "@/src/context/styleContext";
import CheckRadio from "../checks/CheckRadio";
import { ReactComponentElement, ReactNode } from "react";

export default function ScrollItem({
  name,
  author,
  location,
  source,
  component,
}: {
  name: string;
  author: string;
  location: string;
  source: string;
  component: ReactNode;
}) {
  const style = useStyle().style;
  return (
    <div className={style.recently_added_container}>
      {component}
      <div className={style.component_info}>
        <h4 className={style.component_name}>{name}</h4>
        <h6 className={style.component_author}>Added by: {author}</h6>
        <h6 className={style.component_author}>source: {source}</h6>
        <p className="fw-light">/{location}</p>
      </div>
    </div>
  );
}
