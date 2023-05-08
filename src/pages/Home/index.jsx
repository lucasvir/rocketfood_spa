import { useState } from 'react';

import { Container } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { CardBelt } from '../../components/CardBelt';
import { Banner } from '../../components/Banner';
import { Footer } from '../../components/Footer';

import saladaRav from '../../assets/img/ravanello.png';
import shrimpSpa from '../../assets/img/shrimp_large.png';
import prugnaPie from '../../assets/img/prune.png';
import breadPastrie from '../../assets/img/molla.png';

export function Home() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [itemImg, setItemImg] = useState('');

  return (
    <Container>
      <Header isDesktop />
      <main>
        <Banner />

        <Section title='Refeições'>
          <CardBelt>
            <Card
              isAdmin
              title='Salada Ravanello'
              price='20,00'
              itemImg={saladaRav}
            />
            <Card
              title='Salada Ravanello'
              price='20,00'
              itemImg={shrimpSpa}
              description='Massa fresca com camarões e pesto.'
            />
            <Card
              title='Salada Ravanello'
              price='20,00'
              itemImg={saladaRav}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
            />
            <Card
              title='Salada Ravanello'
              price='20,00'
              itemImg={prugnaPie}
            />
            <Card
              title='Salada Ravanello'
              price='20,00'
              itemImg={breadPastrie}
            />
            <Card
              title='Salada Ravanello'
              price='20,00'
              itemImg={saladaRav}
            />
            <Card
              title='Salada Ravanello'
              price='20,00'
              itemImg={saladaRav}
            />
          </CardBelt>
        </Section>
        <Section title='Pratos principais'>
          <CardBelt>
            <Card
              title='Prugna Pie'
              price='79,70'
              itemImg={prugnaPie}
            />
            <Card
              title='Prugna Pie'
              price='12,30'
              itemImg={breadPastrie}
            />
            <Card
              title='Prugna Pie'
              price='56,00'
              itemImg={saladaRav}
            />
          </CardBelt>
        </Section>
        <Section title='Bebidas'>
          <CardBelt>
            <Card
              title='Espresso'
              price='06,00'
              itemImg={prugnaPie}
            />
            <Card
              title='Suco de maracujá'
              price='10,00'
              itemImg={breadPastrie}
            />
            <Card
              title='Chá Verde'
              price='06,70'
              itemImg={saladaRav}
            />
          </CardBelt>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}
