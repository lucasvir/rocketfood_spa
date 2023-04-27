import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { TextArea } from "../../components/TextArea";
import { InputFile } from "../../components/InputFile";
import { IngredientsInput } from "../../components/IngredientsInput";
import { Footer } from "../../components/Footer";

import backIcon from "../../assets/icon/back.svg";

export function EditDish() {
  return (
    <Container>
      <Header />
      <main>
        <a href="">
          <ButtonText id="back_button" title="voltar" icon={backIcon} />
        </a>
        <Form>
          <header>
            <h2>Editar prato</h2>
          </header>

          <div>
            <label htmlFor="img_dish">Imagem do prato</label>
            <InputFile />
          </div>

          <div>
            <label htmlFor="name">Nome</label>
            <Input id="name" placeholder="Ex: Salada Ceasar" type="text" />
          </div>

          <div>
            <label htmlFor="category">Categoria</label>
            <select name="categorys" id="category">
              <option value="lunch">Refeição</option>
              <option value="disert">Sobremesa</option>
              <option value="dinner">Bebida</option>
            </select>
          </div>

          <div>
            <label htmlFor="ingredients">Ingredientes</label>
            <IngredientsInput />
          </div>

          <div>
            <label htmlFor="price">Preço</label>
            <Input id="price" placeholder="R$00,00" type="text" />
          </div>

          <div>
            <label htmlFor="description">Descrição</label>
            <TextArea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </div>
          <div id="button_wrapper">
            <Button title="Excluir prato" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
