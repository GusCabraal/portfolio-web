import { Container, Content } from "./styles";
export function Header() {
  return (
    <Container>
      <Content>
        <button>
          <a>Resumo</a>
        </button>
        <button>
          <a>Habilidades</a>
        </button>
        <button>
          <a>Projetos</a>
        </button>
        <button>
          <a>Contato</a>
        </button>
      </Content>
    </Container>
  );
}
