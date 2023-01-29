import React from 'react';
import Favorites from './Favourites';
import PopupWithFavorite from './PopupWithFavorite';

export default function Home() {
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleOpenFavorite(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setSelectedCard(null);
  }
  function handleCloseOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closeAllPopups();
    }
  }
  return (
    <>
      <Favorites onCardOpen={handleOpenFavorite} />
      <PopupWithFavorite card={selectedCard} onClose={closeAllPopups} onCloseOverlay={handleCloseOverlay} />
    </>
  );
}
