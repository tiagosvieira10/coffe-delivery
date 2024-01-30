import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import { CarrinhoProvider } from "./contexts/filter-contexts";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <BrowserRouter>
      <CarrinhoProvider>
        <Router/>
      </CarrinhoProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
