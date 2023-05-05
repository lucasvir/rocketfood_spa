import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container } from './styles';

import iconSearch from '../../assets/icon/search.svg';

export function Search({ ...rest }) {
  // const [searchInput, setSearchInput] = useState('');

  // function handleSearch() {
  //   api
  //     .get('/dishs', { searchInput })
  //     .then(() => {
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         alert(error.response.data.message);
  //       } else {
  //         alert('Não existe ingredients/pratos com essas informações.');
  //       }
  //     });
  // }

  return (
    <Container>
      <img src={iconSearch} alt='ícone de busca' />
      <input
        type='text'
        {...rest}
        // onChange={(e) => setSearchInput(e.target.value)}
      />
    </Container>
  );
}
