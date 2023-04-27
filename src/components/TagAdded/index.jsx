import { Container } from "./styles";

import closeIcon from "../../assets/icon/close.svg";

export function TagAdded({ title }) {
  return (
    <Container>
      <p>Alface</p>
      <a href="#">
        <img src={closeIcon} alt="ícone para fechar" />
      </a>
    </Container>
  );
}
