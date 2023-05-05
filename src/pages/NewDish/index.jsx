import { useState } from 'react';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

import { Header } from '../../components/Header';
import { Form } from '../../components/Form';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { TextArea } from '../../components/TextArea';
import { InputFile } from '../../components/InputFile';
import { IngredientsInput } from '../../components/IngredientsInput';
import { Footer } from '../../components/Footer';

import backIcon from '../../assets/icon/back.svg';

export function NewDish() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  function handleNewDish() {
    api
      .post('/dishs', {
        title,
        category,
        ingredients,
        price,
        description,
      })
      .then(alert('Prato criado com sucesso.'))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Não foi possível criar o prato.');
        }
      });
    return console.log({
      name,
      category,
      ingredients,
      price,
      description,
    });
  }

  return (
    <Container>
      <Header isDesktop />
      <main>
        <a href=''>
          <ButtonText
            id='back_button'
            title='voltar'
            icon={backIcon}
          />
        </a>
        <Form>
          <header>
            <h2>Novo prato</h2>
          </header>

          <div>
            <label htmlFor='img_dish'>Imagem do prato</label>
            <InputFile />
          </div>

          <div>
            <label htmlFor='name'>Nome</label>
            <Input
              id='name'
              placeholder='Ex: Salada Ceasar'
              type='text'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='category'>Categoria</label>
            <select
              name='categorys'
              id='category'
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='lunch'>Refeição</option>
              <option value='disert'>Sobremesa</option>
              <option value='dinner'>Bebida</option>
            </select>
          </div>

          <div>
            <label htmlFor='ingredients'>Ingredientes</label>
            <IngredientsInput />
          </div>

          <div>
            <label htmlFor='price'>Preço</label>
            <Input
              id='price'
              placeholder='R$00,00'
              type='text'
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='description'>Descrição</label>
            <TextArea
              id='description'
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Button title='Salvar alterações' onClick={handleNewDish} />
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
