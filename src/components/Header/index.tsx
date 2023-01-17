import { Container, Content } from "./styles";
import logoImg from "../../../src/assets/logoCabral.png";
import linkedinLogoImg from "../../../src/assets/linkedin.png";
import githubLogoImg from "../../../src/assets/github.png";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" className="logo" />
        <nav>
          <a>
            <img src={linkedinLogoImg} alt="logo linkedin" />
          </a>
          <a>
            <img src={githubLogoImg} alt="logo linkedin" />
          </a>
        </nav>
      </Content>
    </Container>
  );
}
