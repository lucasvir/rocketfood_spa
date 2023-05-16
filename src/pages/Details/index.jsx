import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { DetailsCard } from "../../components/DetailsCard";
import { Footer } from "../../components/Footer";

import backIcon from "../../assets/icon/back.svg";
import saladImg from "../../assets/img/ravanello_large.png";

export function Details() {
  return (
    <Container>
      <Header isDesktop />
      <main>
        <a href="#">
          <ButtonText title="voltar" icon={backIcon} />
        </a>
        <DetailsCard
          title="Salada Ravannelo"
          price="pedir - R$25,00"
          itemImg={saladImg}
        >
          Rabanetes, folhas verdes e molho agridoce salpicados com
          gergelim.
        </DetailsCard>
      </main>

      <Footer />
    </Container>
  );
}
