import { Header } from "../../components/Header";
import { ApresentationHome } from "./components/Apresentation";
import { OurCoffes } from "./components/OurCoffes";
import { HomeContainer } from "./styles";


export function Home() {

  return (
    <HomeContainer>
      <Header/>
      <ApresentationHome/>
      <OurCoffes/>
    </HomeContainer>
  )
}