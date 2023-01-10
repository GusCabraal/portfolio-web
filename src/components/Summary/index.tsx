import { Container, FirstSection, SecondSection } from "./styles";
import profileImg from "../../../src/assets/profile.jpg";


export function Summary() {
  return (
    <Container>
        <FirstSection>
          <div>
            <h1>OLÁ, SOU GUSTAVO CABRAL</h1>
            <h3>Desenvolvedor web full stack</h3>
            <button>
                MOSTRAR MAIS
            </button>
          </div>
          <img src={profileImg} alt="cabralzinho" />

        </FirstSection>
        <SecondSection>
            
        </SecondSection>
    </Container>
  );
}
