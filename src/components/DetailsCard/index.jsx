import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { Container, TagsWrapper } from "./styles";

import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { CountBar } from "../../components/CountBar";

export function DetailsCard({
  isAdmin,
  title,
  price,
  itemImg,
  dishIngredients,
  children,
}) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(dishIngredients.split(", "));
  }, []);

  return (
    <Container>
      <img src={itemImg} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{children}</p>

        <TagsWrapper>
          {ingredients &&
            ingredients.map((ingredient, index) => (
              <Tag key={String(index)} title={ingredient} />
            ))}
        </TagsWrapper>

        <div id="controls">
          {isAdmin ? "" : <CountBar />}
          {isAdmin ? (
            <Button title="Editar prato" />
          ) : (
            <Button title={price} />
          )}
        </div>
      </div>
    </Container>
  );
}
