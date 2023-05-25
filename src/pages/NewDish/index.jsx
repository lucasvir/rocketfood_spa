import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { TextArea } from "../../components/TextArea";
import { InputFile } from "../../components/InputFile";
import { IngredientsInput } from "../../components/IngredientsInput";
import { TagNew } from "../../components/TagNew";
import { Footer } from "../../components/Footer";

import backIcon from "../../assets/icon/back.svg";

export function NewDish() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [dishImg, setDishImg] = useState(null);
  const [userAdmin, setUserAdmin] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredients(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  function handleDishImg(event) {
    const file = event.target.files[0];
    setDishImg(file);
  }

  async function handleNewDish() {
    if (!title) {
      return alert("Digite o nome do prato.");
    }

    if (!category) {
      return alert("Selecione uma categoria para o seu prato.");
    }

    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente para adicionar no campo. Clique no icone do campo para adiconar."
      );
    }

    if (!price) {
      return alert("Adicione o valor do prato.");
    }

    const dish_id = await api
      .post("/dishs", {
        title,
        category,
        ingredients,
        price,
        description,
        dish_img: dishImg,
      })
      .then(alert("Prato criado com sucesso."))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível criar o prato.");
        }
      });

    if (dishImg) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("image", dishImg);

      await api.patch(`/dishs/image/${dish_id.data}`, fileUploadForm);
    }

    return navigate("/");
  }

  useEffect(() => {
    async function userIsAdmin() {
      const { is_admin } = JSON.parse(
        window.localStorage.getItem("@rocketfood:user")
      );

      setUserAdmin(is_admin);
    }

    userIsAdmin();
  }, []);

  return (
    <Container>
      {userAdmin ? (
        <Header isDesktop isAdmin />
      ) : (
        <Header isDesktop />
      )}
      <main>
        <ButtonText
          id="back_button"
          title="voltar"
          icon={backIcon}
          onClick={handleBack}
        />
        <Form>
          <header>
            <h2>Novo prato</h2>
          </header>

          <div>
            <label htmlFor="img_dish">Imagem do prato</label>
            <InputFile
              id="image_dish"
              type="file"
              onChange={handleDishImg}
            />
          </div>

          <div>
            <label htmlFor="name">Nome</label>
            <Input
              id="name"
              placeholder="Ex: Salada Ceasar"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="category">Categoria</label>
            <select
              name="categorys"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="lunch">Selecione uma categoria</option>
              <option value="lunch">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebida</option>
            </select>
          </div>

          <div>
            <label htmlFor="ingredients">Ingredientes</label>
            <IngredientsInput>
              {ingredients.map((ingredient, index) => (
                <TagNew
                  key={String(index)}
                  value={ingredient}
                  onClick={() => {
                    handleRemoveIngredients(ingredient);
                  }}
                />
              ))}
              <TagNew
                isNew
                placeholder="Adicionar"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredients}
              />
            </IngredientsInput>
          </div>

          <div>
            <label htmlFor="price">Preço</label>
            <Input
              id="price"
              placeholder="R$00,00"
              type="text"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div id="description-input">
            <label htmlFor="description">Descrição</label>
            <TextArea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Button title="Salvar Prato" onClick={handleNewDish} />
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
