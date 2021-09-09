import { PageLayout } from "../components/common/PageLayout";
import Button from "../components/common/Button";
import styled from "styled-components";

const HomeContent = styled.section`
  display: grid;
  grid-template-areas:
    "text text image"
    "button button image";
  margin-top: 3em;
  grid-gap: 1em;

  > p {
    grid-area: text;
  }
  > img {
    grid-area: image;
    margin: 0 auto;
    width: 100%;
  }
  > ${Button} {
    margin-top: 4em;
    grid-area: button;
  }

  @media (max-width: 768px) {
    grid-template-areas:
    "text text text"
    "image image image"
    "button button button";
    grid-gap: 0;

    > p {
    grid-area: text;
    }
    > img {
      grid-area: image;
      margin: 0 auto;
      width: 60%;
    }
    > ${Button} {
      margin: 2em 0; 
      grid-area: button;
    }
  }
`;

const Home = () => {
  return (
    <PageLayout>
      <h1>Home</h1>
      <hr />
      <h2>Bienvenido/a a libre de TCA!</h2>
      <HomeContent>
        <p>
          LIBRE DE TCA fue creado con el propósito de brindar información sobre
          los trastornos alimenticios, eliminando los estereotipos que tiene la
          sociedad sobre ellos, basándose más en experiencias de propias
          distintas y ajenas. En este espacio te contamos cómo es pasar por un
          tca realmente, cómo se vive, qué se siente, qué se gana y qué se
          pierde, para concientizar el daño que provocan los trastornos tanto
          física como mentalmente.
        </p>
        <Button large>Instagram</Button>
        <img
          src="https://images.unsplash.com/photo-1585834377576-0c019a596989?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
          alt=""
        />
      </HomeContent>
    </PageLayout>
  );
};

export default Home;
