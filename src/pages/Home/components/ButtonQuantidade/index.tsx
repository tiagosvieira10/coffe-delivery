import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonCountContainer } from "./styles";

export function ButtonCount() {
  return (
    <ButtonCountContainer>
      <button><Minus size={14} weight="bold"/></button>
      <p>1</p>
      <button><Plus size={14} weight="bold"/></button>
    </ButtonCountContainer>
  )
}