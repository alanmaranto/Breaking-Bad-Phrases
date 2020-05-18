import React, { useState, useEffect } from "react";
import { Botton, Container } from "./styles";
import Phrase from "./components/Phrase";

function App() {
  const [phrase, setPhrase] = useState({});

  const fetchPhrases = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const phrase = await api.json();
    setPhrase(phrase[0]);
  };

  useEffect(() => {
    fetchPhrases()
  }, []);

  return (
    <Container>
      <Phrase phrase={phrase}></Phrase>
      <Botton onClick={fetchPhrases}>Obtener Frase</Botton>
    </Container>
  );
}

export default App;
