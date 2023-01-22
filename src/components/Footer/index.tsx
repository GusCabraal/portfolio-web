import { Container, Content } from "./styles";
import linkedinLogoImg from "../../../src/assets/linkedin.png";
import githubLogoImg from "../../../src/assets/github.png";

export function Footer() {
  return (
    <Container>
      <Content>
        <nav>
          <a href="https://www.linkedin.com/in/guscabraal/" target="_blank">
            <img src={linkedinLogoImg} alt="logo linkedin" />
          </a>
          <a href="https://github.com/guscabraal" target="_blank">
            <img src={githubLogoImg} alt="logo linkedin" />
          </a>
        </nav>
      </Content>
    </Container>
  );
}
