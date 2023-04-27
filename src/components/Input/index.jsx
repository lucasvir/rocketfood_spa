import { Container } from "./styles";

export function Input({ placeholder, ...rest }) {
  return <Container {...rest} placeholder={placeholder}></Container>;
}
