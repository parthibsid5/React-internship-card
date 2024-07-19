import React from 'react';
import ReactDOM from 'react-dom';
import BasketballPlayerCard from './BasketballPlayerCard';

const player = {
  name: "Amjyot Singh",
  image: "images.jpeg",
  position: "Forward",
  stats: {
    pointsPerGame: 25.4,
    assistsPerGame: 7.1,
    reboundsPerGame: 10.5,
  }
};

ReactDOM.render(
  <BasketballPlayerCard
    name={player.name}
    image={player.image}
    position={player.position}
    stats={player.stats}
  />,
  document.getElementById('root')
);
