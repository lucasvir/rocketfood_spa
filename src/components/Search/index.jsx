import { Container } from "./styles";

import iconSearch from "../../assets/icon/search.svg";

export function Search({ ...rest }) {
  return (
    <Container>
      <img src={iconSearch} alt="ícone de busca" />
      <input type="text" {...rest} />
    </Container>
  );
}
