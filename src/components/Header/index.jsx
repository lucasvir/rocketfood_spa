import { Container } from "./styles";

import { Button } from "../Button";
import { Search } from "../Search";

import logoHeader from "../../assets/icon/logo_mob.svg";
import iconMenu from "../../assets/icon/menu.svg";
import iconReceipt from "../../assets/icon/receipt.svg";
import iconSignout from "../../assets/icon/signout.svg";
import iconButton from "../../assets/icon/receipt.svg";

export function Header({ isAdmin, isDesktop, ...rest }) {
  return (
    <Container {...rest}>
      {isDesktop ? "" : <img src={iconMenu} alt="ícone do menu" />}
      <div id="logo_header">
        <img src={logoHeader} alt="logo foodexplorer" />
        <span id="logo_text">food explorer</span>
        {isAdmin ? <span>admin</span> : ""}
      </div>
      {isDesktop ? (
        <Search placeholder="Busque por pratos ou ingredientes" />
      ) : (
        ""
      )}

      {isDesktop ? <Button icon={iconButton} title="Pedidos (0)" /> : ""}

      {isDesktop ? (
        <img src={iconSignout} alt="ícone de signout" />
      ) : (
        <img src={iconReceipt} alt="ícone do carrinho de compras" />
      )}
    </Container>
  );
}
