import { ShoppingCart  } from "@phosphor-icons/react";
import { HeaderButton, HeaderCarrinho, HeaderContainer } from "./styles";
import img from '../../assets/logo.svg'
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [cartItemCount, setCarItemCount] = useState(0);

  const incrementCarCount = () => {
    setCarItemCount(cartItemCount + 2);
  }

  const countClass = cartItemCount === 0 ? "hidden" : "count";

  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={img} alt="" width={100} height={100}/>
      </Link>

      <HeaderCarrinho>
        
          <HeaderButton variant='yellow' onClick={incrementCarCount}>
            <Link to='/carrinho' className="carrinho">
              <p>Ir para o carrinho</p>
              <ShoppingCart color="white" weight="fill" size={22}/>
              <div className={`${countClass}`}>
                {cartItemCount}
              </div>
            </Link>
          </HeaderButton>
      </HeaderCarrinho>
    </HeaderContainer>
  )
}