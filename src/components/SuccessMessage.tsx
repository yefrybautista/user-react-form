import { BsFillPatchCheckFill } from "react-icons/bs";
import Button from "./Button";
interface SuccessMessage {
  message: string;
  onOkClick: () => void;
}

export default function SuccessMessage({ message, onOkClick }: SuccessMessage) {
  return (
    <div className="message-banner success">
      <div className="icon">
        <BsFillPatchCheckFill size={50} color />
      </div>
      <h1 className="title">{message}</h1>
      <Button onClick={onOkClick} text="Ok" />
    </div>
  );
}
