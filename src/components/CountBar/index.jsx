import { Container } from "./styles";

import minusIcon from "../../assets/icon/minus.svg";
import plusIcon from "../../assets/icon/plus.svg";

export function CountBar() {
  return (
    <Container>
      <img src={minusIcon} alt="ícone de subtração" />
      <p>01</p>
      <img src={plusIcon} alt="íconde de adição" />
    </Container>
  );
}
