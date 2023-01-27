import addButton from '../../img/add-btn.svg';
import defaultAvatar from '../../img/avatar.png'
import defaultPub from '../../img/img-for-add.jpg'
export default function Main() {
  return (
    <>
      <section className="user">
        <div className="user__avatar-btn">
          <img src={defaultAvatar} alt="аватарка" className="user__avatar" />
        </div>
        <div className="user__text">
          <div>
            <h1 className="user__name">Кариночкаaaaaaaaaaaaaaa</h1>
            <button type="button" className="user__edit-btn"></button>
          </div>
          <ul className="user__description">
            <li><p className="user__description-title">Любимые жанры:</p></li>
          </ul>
        </div>
      </section>
      <section className="elements">
        <ul className="elements__list">
          <li className="elements__list-item">
            <article className="element element_add">
              <img
                src={addButton}
                alt="кнопка добавления публикации"
                className="element__img-add"
              />
              <p className="element__text-add">Добавить книгу</p>
            </article>
          </li>
          

          <li className="elements__list-item">
            <article className="element">
              <img
                src={defaultPub}
                alt="публикация"
                className="element__img"
              />
              <button type="button" className="element__delete-btn"></button>
              <div className="element__caption">
                <p className="element__name">Дракула</p>
                <p className="element__author">Стивен Кинг</p>
              </div>
            </article>
          </li>

        </ul>
      </section>
    </>
  );
}
