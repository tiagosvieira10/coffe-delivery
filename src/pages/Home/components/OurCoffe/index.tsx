import { CoffeCards } from "./styles";
import { CoffeCard } from "../CoffeCard";
import { coffees } from "../../../../data/coffees";

export function OurCoffe(){
  return(
    <CoffeCards>
      {coffees.map((coffee) => (
        <CoffeCard key={coffee.id} coffee={coffee}/>
      ))}
   </CoffeCards>
  )
}