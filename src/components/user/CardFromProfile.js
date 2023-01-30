export default function CardFromProfile({ card, onCardOpen }) {
  function handleCardClick() {
    onCardOpen(card);
  }
  return (
    <li className="elements__list-item">
      <article className="element" onClick={handleCardClick}>
        <img src={card.img[0]} alt="публикация" className="element__img" />
        <div className="element__caption">
          <p className="element__name">{card.name}</p>
          <p className="element__author">{card.author}</p>
        </div>
      </article>
    </li>
  );
}
