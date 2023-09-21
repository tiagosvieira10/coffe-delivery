import { MapPin, ShoppingCart  } from "@phosphor-icons/react";
import { HeaderButton, HeaderCarrinho, HeaderContainer } from "./styles";
import img from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={img} alt="" />

      <HeaderCarrinho>
        <HeaderButton>
          <MapPin weight="fill" color="#8047F8" />
          Ouricuri, PE
        </HeaderButton>

        <HeaderButton>
          <ShoppingCart color="#C47F17" weight="fill"/>
        </HeaderButton>
      </HeaderCarrinho>
    </HeaderContainer>
  )
}