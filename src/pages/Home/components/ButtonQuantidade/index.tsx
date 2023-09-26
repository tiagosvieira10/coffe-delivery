import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonCountContainer } from "./styles";

export default function ButtonCount() {
  return (
    <ButtonCountContainer>
      <button className="count"><Minus size={14} weight="bold"/></button>
      <p>1</p>
      <button className="count"><Plus size={14} weight="bold"/></button>
    </ButtonCountContainer>
  )
}