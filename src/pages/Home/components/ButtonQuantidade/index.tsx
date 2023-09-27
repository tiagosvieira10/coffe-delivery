import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonCountContainer } from "./styles";

export default function ButtonCount() {
  return (
    <ButtonCountContainer>
      <button><Minus size={14} weight="bold" color="#8047F8"/></button>
      <p>1</p>
      <button><Plus size={14} weight="bold" color="#8047F8"/></button>
    </ButtonCountContainer>
  )
}