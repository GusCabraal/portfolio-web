import { Container } from "./style";
import profileImg from "../../../src/assets/profile.jpg";

export function Profile() {
    return (
      <Container>
          <div>
            <h1>OLÁ, SOU GUSTAVO CABRAL</h1>
            <h3>Desenvolvedor web full stack</h3>
          </div>
          <img src={profileImg} alt="cabralzinho" />
      </Container>
    )
 }