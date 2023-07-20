"use client";
import { useStyle } from "@/src/context/styleContext";
import { componentInfo } from "@/src/interfaces/componetInfo.interface";

export default function ComponentCounter({ info }: { info: componentInfo }) {
  const { style } = useStyle();
  return (
    <>
      <div className={`col-xl-6 py-3 ${style.component_container}`}>
        {info.component}
      </div>
      <div className={`col-xl-6 py-3 ${style.component_container}`}>
        <div className="info">
          <div className={style.component_main_info}>
            <h1>{info.name}</h1>
            <h5>Original code:</h5>
            <a href={info.source} target="_blank">
              {info.source}
            </a>
            <p>{info.location}</p>
          </div>
          <div className={style.component_tags}>
            {info.tags.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
