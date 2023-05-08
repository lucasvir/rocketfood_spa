import { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const [dishImg, setDishImg] = useState(null);

  async function handleNewDish() {
    api
      .post('/dishs', {
        title,
        category,
        ingredients: [ingredients],
        price,
        description,
        dish_img: dishImg,
      })
      .then(alert('Prato criado com sucesso.'))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Não foi possível criar o prato.');
        }
      });

    // const fileUploadForm = new FormData();
    // fileUploadForm.append('image', dishImg);

    // await api.patch('/dishs/image', fileUploadForm);

    return console.log({
      title,
      category,
      ingredients,
      price,
      description,
      dish_img: dishImg,
    });
  }

  function handleDishImg(event) {
    const file = event.target.files[0];
    setDishImg(file);

    console.log(file);
  }

  return (
    <Container>
      <Header isDesktop />
      <main>
        <Link to={'/'}>
          <ButtonText
            id='back_button'
            title='voltar'
            icon={backIcon}
          />
        </Link>
        <Form>
          <header>
            <h2>Novo prato</h2>
          </header>

          <div>
            <label htmlFor='img_dish'>Imagem do prato</label>
            <InputFile
              id='image_dish'
              type='file'
              onChange={handleDishImg}
            />
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
            <IngredientsInput
              onChange={(e) => setIngredients(e.target.value)}
            />
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
