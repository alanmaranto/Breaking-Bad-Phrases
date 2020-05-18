import React from "react";
import { Botton, Container } from "./styles";

function App() {
  const fetchPhrases = () => {
    console.log("fetching...");
  };
  return (
    <Container>
      <Botton onClick={fetchPhrases}>Obtener Frase</Botton>
    </Container>
  );
}

export default App;
