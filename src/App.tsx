import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MyStacks } from './components/MyStacks';
import { Profile } from './components/Profile';
import { Summary } from './components/Summary';
import { MyProjects } from './MyProjects';
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
      <Header />
      <Profile />
      <Summary />
      <MyProjects />
      <MyStacks />
      <Footer />
      <GlobalStyle />
    </>
  )
};