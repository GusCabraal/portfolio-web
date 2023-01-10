import { Container, FirstSection, SecondSection } from "./styles";
import profileImg from "../../../src/assets/profile.jpg";

export function Summary() {
  return (
    <Container>
      <FirstSection>
        <div>
          <h1>OLÁ, SOU GUSTAVO CABRAL</h1>
          <h3>Desenvolvedor web full stack</h3>
        </div>
        <img src={profileImg} alt="cabralzinho" />
      </FirstSection>
      <SecondSection>
        <div>
          <p>
            Sou um amante de café sem açucar, viajar e passar tempo com as
            pessoas que eu amo.
          </p>
          <p>
            Sou engenheiro civil, atualmente fazendo transição de carreira e
            estou a procura de minha primeira vaga.
          </p>
          <p>
            Estudante de desenvolvimento web na Trybe, cursando o último módulo
            da formação.
          </p>
          <p>
            Minhas principais habilidades são resolução de problemas,
            colaboração e capacidade analítica.
          </p>
        </div>
      </SecondSection>
    </Container>
  );
}
