import React from 'react';
import Favorites from './Favourites';
import FeedOfPosts from './FeedOfPosts';
import PopupWithFavorite from './PopupWithFavorite';

export default function Home({cards}) {
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
      <FeedOfPosts cards={cards} />
      <PopupWithFavorite card={selectedCard} onClose={closeAllPopups} onCloseOverlay={handleCloseOverlay} />
    </>
  );
}
