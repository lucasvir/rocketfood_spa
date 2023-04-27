import { Container } from "./styles";

import { TagNew } from "../TagNew";
import { TagAdded } from "../TagAdded";

export function IngredientsInput() {
  return (
    <Container>
      <div>
        <TagAdded />
        <TagNew />
      </div>
    </Container>
  );
}
