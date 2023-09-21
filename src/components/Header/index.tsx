import { MapPin, ShoppingCart  } from "@phosphor-icons/react";
import { HeaderButton, HeaderCarrinho, HeaderContainer } from "./styles";
import img from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={img} alt="" />

      <HeaderCarrinho>
        <HeaderButton>
          <MapPin weight="fill" color="#8047F8" size={22}/>
          Ouricuri, PE
        </HeaderButton>

        <HeaderButton variant='yellow' >
          <ShoppingCart color="#C47F17" weight="fill" size={22}/>
        </HeaderButton>
      </HeaderCarrinho>
    </HeaderContainer>
  )
}