import { Container } from "./styles";

export function ButtonText({ title, icon, ...rest }) {
  return (
    <Container {...rest}>
      <img src={icon} alt="" />
      <p>{title}</p>
    </Container>
  );
}
