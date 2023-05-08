import { Container } from './styles';

import { TagNew } from '../TagNew';
import { TagAdded } from '../TagAdded';

export function IngredientsInput({ ...rest }) {
  return (
    <Container>
      <div>
        <TagAdded />
        <TagNew {...rest} />
      </div>
    </Container>
  );
}
