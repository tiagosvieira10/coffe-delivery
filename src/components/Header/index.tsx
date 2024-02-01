import { ShoppingCart  } from "@phosphor-icons/react";
import { HeaderButton, HeaderCarrinho, HeaderContainer } from "./styles";
import img from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCarts";

export function Header() {
  const {cartQuantity} = useCart();
  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={img} alt="" width={100} height={100}/>
      </Link>

      <HeaderCarrinho>
        
          <HeaderButton>
            <Link to='/carrinho' className="carrinho">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart color="white" weight="fill" size={22}/>
            </Link>
          </HeaderButton>
      </HeaderCarrinho>
    </HeaderContainer>
  )
}