import clsx from "clsx";
import style from "./tag.module.css";

export default function Tag({ className, children }) {
  return <div className={clsx(style.tag, className)}>{children}</div>;
}