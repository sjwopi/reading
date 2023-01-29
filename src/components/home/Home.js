import React from 'react';
import Favorites from './Favourites';
import PopupWithFavorite from './PopupWithFavorite';

export default function Home() {
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleOpenFavorite(card) {
    console.log(card)
    setSelectedCard(card)
  }

  return (
    <>
      <Favorites onCardOpen={handleOpenFavorite} />
      <PopupWithFavorite card={selectedCard} />
    </>
  );
}
