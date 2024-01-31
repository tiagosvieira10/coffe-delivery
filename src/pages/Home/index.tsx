import { Header } from "../../components/Header";
import { ApresentationHome } from "./components/Apresentation";
import { CoffesMenu } from "./components/CoffesMenu";
import { HomeContainer } from "./styles";


export function Home() {

  return (
    <HomeContainer>
      <Header/>
      <ApresentationHome/>
      <CoffesMenu/>
    </HomeContainer>
  )
}