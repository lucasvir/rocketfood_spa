import { Container } from "./styles";

import burgerIcon from "../../assets/icon/menu.svg";

export function Burger({ open, setOpen }) {
  return (
    <Container open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Container>
  );
}
