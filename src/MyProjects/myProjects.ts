import trybewallet from '../assets/trybewallet.png'
import cabralbuster from '../assets/cabralbuster.gif'
import tfc from '../assets/tfc.gif'

export const myProjects = [
  {
    id: 1,
    name: "CabralBuster",
    html_url: "https://github.com/GusCabraal/cabralbuster",
    description:
      "Uma locadora de filmes que vai matar sua nostalgia dos anos 90. O site da CabralBuster permite ao usuário: Acessar o catalogo de filmes, acessar detalhes sobre os filmes, fitrar os filmes por diretores e categorias, alugar e devolver títulos.",
    image: cabralbuster,
  },
  {
    id: 2,
    name: "Trybe Futebol Clube",
    html_url: "https://github.com/GusCabraal/trybe-futebol-clube",

    description:
      "Um site informativo sobre partidas e classificações de futebol.",
      image: tfc,
  },
  {
    id: 3,
    name: "Trybewallet",
    html_url: "https://github.com/GusCabraal/trybewallet",
    description:
      "Uma carteira de controle de gastos com conversor de moedas, onde o usuario pode ler, adicionar, remover e editar um item da tabela. Foi utilizado React JS para construir a interface, redux para gerenciar o estado global da aplicação, uma API de Cotações para realizar a busca de câmbio de moedas.",
      image: trybewallet,
  },
];
