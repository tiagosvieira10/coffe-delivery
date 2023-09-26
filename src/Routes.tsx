import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CarrinhoPage } from "./pages/Carrinho";
import { ConfirmationPage } from "./pages/Confirmation";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/carrinho" element={<CarrinhoPage/>} />
      <Route path="/confirmation" element={<ConfirmationPage/>} />
    </Routes>
  )
}
