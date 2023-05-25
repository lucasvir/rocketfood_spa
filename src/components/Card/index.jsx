import { Container } from "./styles";

import { Button } from "../Button";
import { CountBar } from "../CountBar";

export function Card({
  isAdmin,
  title,
  description,
  itemImg,
  price,
  onClick,
  children,
}) {
  return (
    <Container>
      <button>{children}</button>
      <img src={itemImg} alt="Imagem do prato" onClick={onClick} />
      <div>
        <p>{title}</p>
        {description && <p id="description_card">{description}</p>}
        {/* {isAdmin ? "" : description &&  <p id="description_card">{description}</p>} */}
        <span>R${price}</span>
        <div id="card_controls">
          {isAdmin ? "" : <CountBar />}
          {isAdmin ? "" : <Button id="add_button" title="incluir" />}
        </div>
      </div>
    </Container>
  );
}
