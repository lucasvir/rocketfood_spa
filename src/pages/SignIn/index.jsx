import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";

import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import logoMobile from "../../assets/icon/logo_mob.svg";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    if (!email || !password) {
      return alert("Preencha todos os campos.");
    }

    signIn({ email, password });
  }

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
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />
        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
