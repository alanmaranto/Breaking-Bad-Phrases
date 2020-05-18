import React from "react";
import { PhraseContainer } from "../styles";

const Phrase = ({ phrase }) => {
    if (Object.keys(phrase).length === 0) return null;
  return (
    <PhraseContainer>
      <h1>{phrase.quote}</h1>
      <p>{phrase.author}</p>
    </PhraseContainer>
  );
};

export default Phrase;
