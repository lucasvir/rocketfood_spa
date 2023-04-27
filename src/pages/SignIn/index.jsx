import { Container } from "./styles";

import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import logoMobile from "../../assets/icon/logo_mob.svg";

export function SignIn() {
  return (
    <Container>
      <div id="logo">
        <img src={logoMobile} alt="logo foodexplorer" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <header>Faça login</header>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          placeholder="Exemplo: exemplo@email.com"
          type="text"
        />

        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          placeholder="No mínimo 6 caracteres"
          type="password"
        />

        <Button title="Entrar" />
        <a href="#">Criar uma conta</a>
      </Form>
    </Container>
  );
}
