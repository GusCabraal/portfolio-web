import { myStacks } from "./myStacks";
import { Container } from "./styles";

export function MyStacks() {
  return (
    <Container>
      <h3>Tecnologias utilizadas</h3>
      <section>
        {myStacks.map(({ img, name }) => (
          <div key={name}>
            <img src={img} alt={`icone ${name}`} />
            <p>{name}</p>
          </div>
        ))}
      </section>
    </Container>
  );
}
