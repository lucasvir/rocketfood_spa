import { Container } from "./styles";

import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import logoMobile from "../../assets/icon/logo_mob.svg";

export function SignUp() {
  return (
    <Container>
      <div id="logo">
        <img src={logoMobile} alt="logo foodexplorer" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <header>Crie sua conta</header>
        <label htmlFor="nome">Seu nome</label>
        <Input id="nome" placeholder="Exemplo: João Felipe" type="text" />

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

        <Button title="Criar conta" />
        <a href="#">Já tenho uma conta</a>
      </Form>
    </Container>
  );
}
