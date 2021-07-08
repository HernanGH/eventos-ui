import React from 'react';
import Slider from '../../components/Slider';
import List from '../../components/List';

const products = [
  {
    id: 0,
    title: 'Evento 1',
    description: 'Evento 1, Fecha: 14/04/2000, Lugar: asdad a342, AC, USA',
    img: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68'
  },
  {
    id: 1,
    title: 'Evento 2',
    description: 'Evento 2, Fecha: 14/04/2000, Lugar: asdad a342, AC, USA',
    img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620'
  },
  {
    id: 2,
    title: 'Evento 3',
    description: 'Evento 3, Fecha: 14/04/2000, Lugar: asdad a342, AC, USA',
    img: 'https://images.unsplash.com/photo-1624465991603-ea7793b4fc7d'
  }
]

const Home = () => {
  return (
    <>
      <Slider />
      <div className="list"> 
        <List products={products}/>
      </div>
    </>
  );
};

export default Home;