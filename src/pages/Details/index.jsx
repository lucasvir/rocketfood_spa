import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { api } from "../../services/api";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { DetailsCard } from "../../components/DetailsCard";
import { Footer } from "../../components/Footer";

import backIcon from "../../assets/icon/back.svg";

export function Details() {
  const [dish, setDish] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const parsedUrl = new URL(window.location.href);
  const dish_id = parsedUrl.searchParams.get("id");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get("/dishs");
      const selectedDish = response.data.filter(
        (dish) => dish.id == dish_id
      );
      setDish(selectedDish);
    }
    fetchDish();
  }, []);

  return (
    <Container>
      <Header isDesktop />
      <main>
        <ButtonText
          title="voltar"
          icon={backIcon}
          onClick={handleBack}
        />

        {dish &&
          dish.map((dish) => (
            <DetailsCard
              key={String(dish.id)}
              title={dish.title}
              price={`incluir - R$${dish.price}`}
              itemImg={`${api.defaults.baseURL}/files/${dish.dish_image}`}
              dishIngredients={dish.ingredients}
            >
              {dish.description}
            </DetailsCard>
          ))}
      </main>

      <Footer />
    </Container>
  );
}
