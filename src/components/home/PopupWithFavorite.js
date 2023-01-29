function PopupWithFavorite({ card, onClose, onCloseOverlay }) {
  return (
    <div className={`popup ` + (card !== null && ' popup-favorite_opened')} onClick={onCloseOverlay}>
      <div className="popup-favorite__container">
        <p className="popup-favorite__name">{card !== null ? card.name : '#'}</p>
        <p className="popup-favorite__author">{card !== null ? card.author : '#'}</p>
        <img
          src={card !== null ? card.img : '#'}
          alt={card !== null ? card.name : '#'}
          className="popup-favorite__img"
        />
        <button className="popup-favorite__save">Прочтено</button>
        <button className="popup__close-btn popup__close-btn_favorite"></button>
      </div>
    </div>
  );
}
export default PopupWithFavorite;
