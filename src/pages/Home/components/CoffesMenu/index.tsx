import { MagnifyingGlass } from "@phosphor-icons/react";
import {  CoffeMenu } from "./styles";
import { CardCoffe } from "../OurCoffe";

export function OurCoffes(){
  return(
    <CoffeMenu>
    <h2>Nossos cafés</h2>

    <div className="searchContainer">
        <input className="buscarCafe" type="text" placeholder="Buscar café" />
        <button type="submit">
          <MagnifyingGlass size={24} color="#F67828" />
        </button>
      </div>
      <CardCoffe/>
  </CoffeMenu>
  )
}