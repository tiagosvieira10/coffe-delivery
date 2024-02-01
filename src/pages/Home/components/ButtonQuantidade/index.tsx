import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonCountContainer } from "./styles";
// import { useState } from "react";

interface QuantityInputProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void
}

export function ButtonCount({onIncrease, onDecrease, quantity}: QuantityInputProps) {
  return (
    <ButtonCountContainer>
      <button disabled={quantity <= 1}onClick={onDecrease}>
        <Minus size={15} weight="bold" color="#F67828"/>
      </button>
      <p>{quantity}</p>
      <button onClick={onIncrease}>
        <Plus size={15} weight="bold" color="#F67828"/>
      </button>
    </ButtonCountContainer>
  )
}