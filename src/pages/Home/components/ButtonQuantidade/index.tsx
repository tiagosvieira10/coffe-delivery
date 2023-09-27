import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonCountContainer } from "./styles";
import { useState } from "react";

export function ButtonCount() {
  const [count, setCount ] = useState(1)

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  };

  return (
    <ButtonCountContainer>
      <button onClick={decrementCount}>
        <Minus size={15} weight="bold" color="#8047F8"/>
      </button>
      <p>{count}</p>
      <button onClick={incrementCount}>
        <Plus size={15} weight="bold" color="#8047F8"/>
      </button>
    </ButtonCountContainer>
  )
}