import { CSSProperties } from "react";

interface ButtonProps {
  type?: "submit" | "button";
  typeStyle?: "primary" | "secondary";
  text: string;
  style?: CSSProperties;
  onClick?: () => void;
}
export default function Button({
  type = "submit",
  text,
  typeStyle = "primary",
  onClick,
  style,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`button ${typeStyle}`}
      onClick={() => onClick?.()}
      style={style}
    >
      {text}
    </button>
  );
}
