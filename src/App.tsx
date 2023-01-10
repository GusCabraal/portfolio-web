import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { MyProjects } from './MyProjects';
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
      <Header />
      <Summary />
      <MyProjects />
      <GlobalStyle />
    </>
  )
};