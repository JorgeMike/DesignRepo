import { useStyle } from "@/src/context/styleContext";

export default function ScrollHorizontal({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const style = useStyle().style;
  return (
    <div className={`container ${style.scroll_x}`}>
      <h3 className="m-0 fs-3 fw-light">{title}</h3>
      <div className={style.content_scroll_x}>{children}</div>
    </div>
  );
}
