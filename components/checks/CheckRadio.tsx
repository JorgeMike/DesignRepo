import neumorphism from "../../styles/Neumorphism/neumorphism.module.css";
import minimalist from "../../styles/Minimalist/minimalist.module.css";
import { ChangeEvent } from "react";
import { useStyle } from "@/src/context/styleContext";

export default function CheckRadio() {
  const onChangeStyle = useStyle()?.onChangeStyle;
  const style = useStyle()?.style;

  const onChangeSetStyle = (event: ChangeEvent<HTMLInputElement>) => {
    const style = event.target.value;
    onChangeStyle(style);
  };

  return (
    <div className={`${style.external_section} container mt-4`}>
      <h4 className={`${style.title} pt-3 ps-3`}>Informacion de contacto:</h4>
      <div className={`pb-3 ${style.text}`}>
        <div className="d-flex mx-5">
          <div className="form-check me-3">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="neumorphism"
              value="neumorphism"
              onChange={onChangeSetStyle}
            />
            <label className="form-check-label" htmlFor="neumorphism">
              Neumorphism
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="dark"
              value="dark"
              onChange={onChangeSetStyle}
            />
            <label className="form-check-label" htmlFor="dark">
              Dark
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
