import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { CardBelt } from "../../components/CardBelt";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";

import favoriteIcon from "../../assets/icon/heart.svg";
import editIcon from "../../assets/icon/edit.svg";

export function Home() {
  const [dishs, setDishs] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState("");
  const [userAdmin, setUserAdmin] = useState("");

  const navigate = useNavigate();

  const { user } = useAuth();

  function userIsAdmin() {
    const { is_admin } = user;

    setUserAdmin(is_admin);
  }

  function handleEditDish(id) {
    navigate(`/editdish/${id}`);
  }

  async function handleDishDetails(id) {
    navigate(`/details/?id=${id}`);
  }

  useEffect(() => {
    userIsAdmin();
  }, []);

  useEffect(() => {
    async function fetchLunch() {
      const response = await api.get(`/dishs?title=${search}`);
      const lunchDishs = response.data.filter(
        (lunch) => lunch.category == "lunch"
      );
      setDishs(lunchDishs);
    }

    async function fetchDesserts() {
      const response = await api.get(`/dishs?title=${search}`);
      const dessertDishs = response.data.filter(
        (dish) => dish.category == "dessert"
      );
      setDesserts(dessertDishs);
    }

    async function fetchDrinks() {
      const response = await api.get(`/dishs?title=${search}`);
      const drinkDishs = response.data.filter(
        (dish) => dish.category == "drink"
      );
      setDrinks(drinkDishs);
    }

    fetchLunch();
    fetchDesserts();
    fetchDrinks();
  }, [search]);

  return (
    <Container>
      <Header
        isAdmin={userAdmin}
        onChange={(e) => setSearch(e.target.value)}
      />
      <main>
        <Banner />

         <Section title="Refeições">
          <CardBelt>
            {dishs &&
              dishs.map((dish) => (
                <Card
                  key={dish.id}
                  title={dish.title}
                  price={dish.price}
                  description={dish.description}
                  itemImg={`${api.defaults.baseURL}/files/${dish.dish_image}`}
                  isAdmin={userAdmin}
                  onClick={() => handleDishDetails(dish.id)}
                >
                  {userAdmin ? (
                    <img
                      id="edit_icon"
                      src={editIcon}
                      alt="ícone para editar"
                      onClick={() => handleEditDish(dish.id)}
                    />
                  ) : (
                    <img
                      src={favoriteIcon}
                      alt="ícone para favaritar"
                      /*onClick={() => handleFavorited(dish.id)}*/
                    />
                  )}
                </Card>
              ))}
          </CardBelt>
        </Section>
        <Section title="Sobremesas">
          <CardBelt>
            {desserts &&
              desserts.map((dessert) => (
                <Card
                  key={dessert.id}
                  title={dessert.title}
                  price={dessert.price}
                  description={dessert.description}
                  itemImg={`${api.defaults.baseURL}/files/${dessert.dish_image}`}
                  isAdmin={userAdmin}
                  onClick={() => handleDishDetails(dessert.id)}
                >
                  {userAdmin ? (
                    <img
                      id="edit_icon"
                      src={editIcon}
                      alt="ícone para editar"
                      onClick={() => handleEditDish(dessert.id)}
                    />
                  ) : (
                    <img
                      src={favoriteIcon}
                      alt="ícone para favaritar"
                      /*onClick={() => handleFavorited(dessert.id)}*/
                    />
                  )}
                </Card>
              ))}
          </CardBelt>
        </Section>
        <Section title="Bebidas">
          <CardBelt>
            {drinks &&
              drinks.map((drink) => (
                <Card
                  key={drink.id}
                  title={drink.title}
                  price={drink.price}
                  description={drink.description}
                  itemImg={`${api.defaults.baseURL}/files/${drink.dish_image}`}
                  isAdmin={userAdmin}
                  onClick={() => handleDishDetails(drink.id)}
                >
                  {userAdmin ? (
                    <img
                      id="edit_icon"
                      src={editIcon}
                      alt="ícone para editar"
                      onClick={() => handleEditDish(drink.id)}
                    />
                  ) : (
                    <img
                      src={favoriteIcon}
                      alt="ícone para favaritar"
                      /*onClick={() => handleFavorited(drink.id)}*/
                    />
                  )}
                </Card>
              ))}
          </CardBelt>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}
