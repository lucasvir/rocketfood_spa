import { Container } from './styles';

import uploadIcon from '../../assets/icon/upload.svg';

export function InputFile({ ...rest }) {
  return (
    <Container>
      <img src={uploadIcon} alt='íconde de upload' />
      <p>Selecione a imagem</p>
      <input {...rest} type='file' />
    </Container>
  );
}
