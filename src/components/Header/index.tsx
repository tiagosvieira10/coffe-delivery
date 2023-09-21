import { MapPin, ShoppingCart  } from "@phosphor-icons/react";
import { HeaderButton, HeaderCarrinho, HeaderContainer } from "./styles";
import img from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={img} alt="" />

      <HeaderCarrinho>
        <HeaderButton>
          <MapPin/>
          Ouricuri, PE
        </HeaderButton>

        <HeaderButton>
          <ShoppingCart/>
        </HeaderButton>
      </HeaderCarrinho>
    </HeaderContainer>
  )
}