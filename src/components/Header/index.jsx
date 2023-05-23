import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import { Button } from "../Button";
import { Search } from "../Search";
import { Burger } from "../Burger";
import { Menu } from "../Menu";

import { useAuth } from "../../hooks/auth";

import logoHeader from "../../assets/icon/logo_mob.svg";
import iconMenu from "../../assets/icon/menu.svg";
import iconReceipt from "../../assets/icon/receipt.svg";
import iconSignout from "../../assets/icon/signout.svg";
import iconButton from "../../assets/icon/receipt.svg";

export function Header({ isAdmin, isDesktop, onChange, ...rest }) {
  const { signOut } = useAuth();

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  function handleNewDish() {
    navigate("/newdish");
  }

  return (
    <Container {...rest}>
      {isDesktop ? (
        ""
      ) : (
        <div id="burger-menu">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      )}
      <div id="logo_header">
        <img src={logoHeader} alt="logo foodexplorer" />
        <span id="logo_text">food explorer</span>
        {isAdmin ? <span>admin</span> : ""}
      </div>
      {isDesktop ? (
        <Search
          onChange={onChange}
          placeholder="Busque por pratos ou ingredientes"
        />
      ) : (
        ""
      )}

      {isDesktop && !isAdmin ? (
        <Button icon={iconButton} title="Pedidos (0)" />
      ) : (
        ""
      )}

      {isAdmin ? (
        <Button title="Novo Prato" onClick={handleNewDish} />
      ) : (
        ""
      )}

      {isDesktop ? (
        <a href="/">
          <img
            src={iconSignout}
            alt="ícone de signout"
            onClick={signOut}
          />
        </a>
      ) : (
        <img src={iconReceipt} alt="ícone do carrinho de compras" />
      )}
    </Container>
  );
}
