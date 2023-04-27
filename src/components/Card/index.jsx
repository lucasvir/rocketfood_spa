import { Container } from "./styles";

import { Button } from "../Button";
import { CountBar } from "../CountBar";

import favoriteIcon from "../../assets/icon/heart.svg";
import editIcon from "../../assets/icon/edit.svg";

export function Card({ isAdmin, title, description, itemImg, price }) {
  return (
    <Container>
      <a href="#">
        {isAdmin ? (
          <img id="edit_icon" src={editIcon} alt="ícone para editar" />
        ) : (
          <img src={favoriteIcon} alt="ícone para favaritar" />
        )}
      </a>
      <img src={itemImg} alt="" />
      <div>
        <p>{title}</p>
        {description && <p id="description_card">{description}</p>}
        <span>R${price}</span>
        <div id="card_controls">
          {isAdmin ? "" : <CountBar />}
          {isAdmin ? "" : <Button id="add_button" title="incluir" />}
        </div>
      </div>
    </Container>
  );
}
