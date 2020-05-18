import React from "react";
import { Botton, Container } from "./styles";

function App() {
  const fetchPhrases = async () => {
    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const phrase = await api.json();
    console.log(phrase[0])
  };
  return (
    <Container>
      <Botton onClick={fetchPhrases}>Obtener Frase</Botton>
    </Container>
  );
}

export default App;
