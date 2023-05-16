import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { CardBelt } from "../../components/CardBelt";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";

export function Home() {
  const [dishs, setDishs] = useState([]);

  useEffect(() => {
    async function fetchDishs() {
      const response = await api.get("/dishs");
      setDishs(response.data);
    }

    fetchDishs();
  }, []);

  return (
    <Container>
      <Header isDesktop />
      <main>
        <Banner />

        <Section title="Refeições">
          <CardBelt>
            {dishs &&
              dishs.map((dish) => (
                <Card
                  key={String(dish.id)}
                  title={dish.title}
                  price={dish.price}
                  description={dish.description}
                  itemImg={`${api.defaults.baseURL}/files/${dish.dish_image}`}
                />
              ))}
          </CardBelt>
        </Section>
        <Section title="Pratos principais">
          <CardBelt>
            {dishs &&
              dishs.map((dish) => (
                <Card
                  key={String(dish.id)}
                  title={dish.title}
                  price={dish.price}
                  description={dish.description}
                  itemImg={`${api.defaults.baseURL}/files/${dish.dish_image}`}
                />
              ))}
          </CardBelt>
        </Section>
        <Section title="Bebidas">
          <CardBelt>
            {dishs &&
              dishs.map((dish) => (
                <Card
                  key={String(dish.id)}
                  title={dish.title}
                  price={dish.price}
                  description={dish.description}
                  itemImg={`${api.defaults.baseURL}/files/${dish.dish_image}`}
                />
              ))}
          </CardBelt>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}
