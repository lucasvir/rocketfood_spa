import { Container } from "./styles";

import bannerImg from "../../assets/img/banner_desk.png";

export function Banner() {
  return (
    <Container>
      <img src={bannerImg} alt="imagem de macorrones voando" />

      <div>
        <h3>Sabores inigualáveis</h3>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </div>
    </Container>
  );
}
