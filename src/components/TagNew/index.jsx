import { Container } from "./styles";

import addIcon from "../../assets/icon/plus.svg";

export function TagNew() {
  return (
    <Container>
      <input type="text" placeholder="Adicionar" />
      <a href="#">
        <img src={addIcon} alt="ícone para fechar" />
      </a>
    </Container>
  );
}
