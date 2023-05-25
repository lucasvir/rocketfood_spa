import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container } from "./styles";

import iconSearch from "../../assets/icon/search.svg";

export function Search({ id, ...rest }) {
  return (
    <Container id={id}>
      <img src={iconSearch} alt="ícone de busca" />
      <input type="text" {...rest} />
    </Container>
  );
}
