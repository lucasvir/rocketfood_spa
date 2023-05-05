import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container } from "./styles";

import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import logoMobile from "../../assets/icon/logo_mob.svg";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos.");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso.");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
  };

  return (
    <Container>
      <div id="logo">
        <img src={logoMobile} alt="logo foodexplorer" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <header>Crie sua conta</header>
        <label htmlFor="nome">Seu nome</label>
        <Input
          id="nome"
          placeholder="Exemplo: João Felipe"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

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

        <Button title="Criar conta" onClick={handleSignUp} />
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
