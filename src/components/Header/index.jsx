import { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import { Button } from "../Button";
import { Search } from "../Search";
import { Burger } from "../Burger";
import { Menu } from "../Menu";

import { useAuth } from "../../hooks/auth";

import logoHeader from "../../assets/icon/logo_mob.svg";
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
      <div id="burger-menu">
        <Burger open={open} setOpen={setOpen} />
        {isAdmin ? <Menu  isAdmin open={open} setOpen={setOpen} onChange={onChange} /> : <Menu   open={open} setOpen={setOpen}  onChange={onChange}/> }
      </div>

      <div id="logo_header">
        <img src={logoHeader} alt="logo foodexplorer" />
        <span id="logo_text">food explorer</span>
        {isAdmin ? <span>admin</span> : ""}
      </div>

      <Search
        id="search"
        onChange={onChange}
        placeholder="Busque por pratos ou ingredientes"
      />

      {isAdmin ? (
        <Button
          id="new-dish"
          title="Novo Prato"
          onClick={handleNewDish}
        />
      ) : (
        <Button
          id="dish-order"
          icon={iconButton}
          title="Pedidos (0)"
        />
      )}

      <Link id="sign-out" to={"/"}>
        <img
          src={iconSignout}
          alt="ícone de signout"
          onClick={signOut}
        />
      </Link>

      <img
        id="mobile-cart"
        src={iconReceipt}
        alt="ícone do carrinho de compras"
      />
    </Container>
  );
}
