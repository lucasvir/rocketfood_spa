import { Container } from "./styles";

import logoGray from "../../assets/icon/logo_gray.svg";

export function Footer() {
  return (
    <Container>
      <div id="logo_footer">
        <img src={logoGray} alt="logo food explorer" />
        <p>food explorer</p>
      </div>
      <span>&#169; 2023 - Todos os direitos reservados.</span>
    </Container>
  );
}
