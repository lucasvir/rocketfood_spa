import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

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

export function EditDish() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [oldIngredients, setOldIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [dishImg, setDishImg] = useState(null);
  const [dish, setDish] = useState([]);
  const [userAdmin, setUserAdmin] = useState("");

  const navigate = useNavigate();

  let { id } = useParams();

  function handleDishImg(event) {
    const file = event.target.files[0];
    setDishImg(file);
  }

  async function handleUpdatedDish() {
    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente para adicionar no campo. Clique no icone do campo para adiconar."
      );
    }

    const dish_id = await api
      .put(`/dishs/${id}`, {
        title,
        category,
        ingredients: oldIngredients,
        price,
        description,
        dish_img: dishImg,
      })
      .then(alert("Prato editado com sucesso."))
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

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredients(deleted) {
    setOldIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja remover o prato?");

    if (confirm) {
      await api.delete(`/dishs/${id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishs/${id}`);
      const [dish] = response.data;
      setDish(dish);
    }

    fetchDish();
  }, []);

  useEffect(() => {
    async function fetchIngredients() {
      const response = await api.get(`/dishs/${id}`);
      const [dish] = response.data;
      const dishIngredients = dish.ingredients;
      setOldIngredients(dishIngredients.split(", "));
    }

    fetchIngredients();
  }, []);

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
        <Link to={"/"}>
          <ButtonText
            id="back_button"
            title="voltar"
            icon={backIcon}
          />
        </Link>
        <Form>
          <header>
            <h2>Editar prato</h2>
          </header>

          <div>
            <label htmlFor="img_dish">Imagem do prato</label>
            <InputFile type="file" onChange={handleDishImg} />
          </div>

          <div>
            <label htmlFor="name">Nome</label>
            <Input
              id="name"
              type="text"
              placeholder={dish.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="category">Categoria</label>
            <select
              value={dish.category}
              name="categorys"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="lunch">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="dinner">Bebida</option>
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
              {oldIngredients &&
                oldIngredients.map((oldIngredient, index) => (
                  <TagNew
                    key={String(index)}
                    value={oldIngredient}
                    onClick={() => {
                      handleRemoveIngredients(oldIngredient);
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
              placeholder={`R$${dish.price}`}
              type="text"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="description">Descrição</label>
            <TextArea
              id="description"
              placeholder={dish.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div id="button_wrapper">
            <Button title="Excluir prato" onClick={handleRemove} />
            <Button
              title="Salvar alterações"
              setOldIngredients
              onClick={handleUpdatedDish}
            />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
