import trybewallet from '../..//assets/trybewallet.png'
import cabralbuster from '../../assets/cabralbuster.gif'
import tfc from '../../assets/tfc.gif'

export const myProjects = [
  {
    id: 1,
    name: "CabralBuster",
    github_url: "https://github.com/GusCabraal/cabralbuster",
    deploy_url: "https://cabralbuster.vercel.app/",
    description:
      "Uma locadora de filmes que vai matar sua nostalgia dos anos 90. O site da CabralBuster permite ao usuário: Acessar o catálogo de filmes, acessar detalhes sobre os filmes, aplicar filtros, alugar e devolver títulos.",
    image: cabralbuster,
    stacks: "React, Node, Express, Sequelize, Typescript, React-Query, Tailwind CSS e MySQL."
  },
  {
    id: 2,
    name: "Trybe Futebol Clube",
    github_url: "https://github.com/GusCabraal/trybe-futebol-clube",

    description:
      "Um site informativo sobre partidas e classificações de futebol. Nessa aplicação o usuário pode consultar, adicionar e editar partidas de um campeonato ficticio.",
      image: tfc,
      stacks: "Node, Express, Sequelize, Typescript e MySQL."
    },
    {
      id: 3,
      name: "Trybewallet",
      github_url: "https://github.com/GusCabraal/trybewallet",
      deploy_url: "https://trybewallet-blond.vercel.app/",
      description:
      "Uma carteira de controle de gastos com conversor de moedas, onde o usuario pode ler, adicionar, remover e editar um item da tabela. Foi utilizado React JS para construir a interface, redux para gerenciar o estado global da aplicação, uma API de Cotações para realizar a busca de câmbio de moedas.",
      image: trybewallet,
      stacks: "React, Redux e CSS."
  },
];
