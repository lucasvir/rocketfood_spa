import { useState } from "react";

import { Container } from "./styles";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { Search } from "../Search";

export function Menu({ open, isAdmin, onChange }) {
  const { signOut } = useAuth();

  return (
    <Container open={open}>
      <Search placeholder="Busque por pratos" onChange={onChange} />
      {isAdmin ? (
        <Link to={"/newdish"}>
          <span role="img" aria-label="new dish">
            Novo Prato
          </span>
        </Link>
      ) : (
        ""
      )}

      <Link onClick={signOut}>
        <span role="img" aria-label="price">
          Sair
        </span>
      </Link>
    </Container>
  );
}
