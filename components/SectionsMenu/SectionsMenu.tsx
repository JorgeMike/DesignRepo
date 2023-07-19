import { useStyle } from "@/src/context/styleContext";
import { menuItems } from "@/src/interfaces/menuItems.interface";
import Link from "next/link";
import React from "react";

export default function SectionsMenu({
  menuItems,
}: {
  menuItems: menuItems[];
}) {
  const style = useStyle().style;
  return (
    <div className={`container ${style.divisor_bottom}`}>
      <div className="row">
        {menuItems.map((item, index) => (
          <section className="col-4 mb-3" key={index}>
            <Link href={item.route} className={`${style.link}`}>
              {item.title}
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
