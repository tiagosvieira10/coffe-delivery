import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import CartContext from "./contexts/CartContexts";


export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <BrowserRouter>
      <CartContext.Provider value={''}>
        <Router/>
      </CartContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
