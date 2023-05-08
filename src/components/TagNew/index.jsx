import { Container } from './styles';

import addIcon from '../../assets/icon/plus.svg';

export function TagNew({ ...rest }) {
  return (
    <Container>
      <input type='text' placeholder='Adicionar' {...rest} />
      <a href='#'>
        <img src={addIcon} alt='ícone para fechar' />
      </a>
    </Container>
  );
}
