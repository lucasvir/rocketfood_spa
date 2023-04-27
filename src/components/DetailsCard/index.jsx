import { Container, TagsWrapper } from "./styles";

import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { CountBar } from "../../components/CountBar";

export function DetailsCard({ isAdmin, title, price, itemImg, children }) {
  return (
    <Container>
      <img src={itemImg} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{children}</p>

        <TagsWrapper>
          <Tag title="alface" />
          <Tag title="rabanete" />
          <Tag title="cebola" />
          <Tag title="milho" />
          <Tag title="tomate" />
          <Tag title="tomilho" />
        </TagsWrapper>

        <div id="controls">
          {isAdmin ? "" : <CountBar />}
          {isAdmin ? <Button title="Editar prato" /> : <Button title={price} />}
        </div>
      </div>
    </Container>
  );
}
