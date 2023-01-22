import { Container } from "./styles";
import { myProjects } from "./myProjects";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export function MyProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function showPreviousProject() {
    const isFirstMovie = currentIndex === 0;
    const newIndex = isFirstMovie ? myProjects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function showNextProject() {
    const isLastMovie = currentIndex === myProjects.length - 1;
    const newIndex = isLastMovie ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <Container>
      <div>
        <BsChevronCompactLeft className="change-project" onClick={() => showPreviousProject()} size={30} />
      </div>
      <section>
        <h1>Projetos desenvolvidos</h1>
        <img src={myProjects[currentIndex].image} alt="project"/>
        <h2>{myProjects[currentIndex].name}</h2>
        <p>{myProjects[currentIndex].description}</p>
        <button type="button">
          <a href={myProjects[currentIndex].github_url} target="_blank">
            Repositório
          </a>
        </button>
        <button type="button" disabled={!myProjects[currentIndex]?.deploy_url}>
          <a href={myProjects[currentIndex]?.deploy_url} target="_blank">
            Deploy
          </a>
        </button>
      </section>
      <div>
        <BsChevronCompactRight className="change-project" onClick={() => showNextProject()} size={30} />
      </div>
    </Container>
  );
}
