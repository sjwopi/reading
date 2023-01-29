import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import PopupWithSetting from './PopupWithSetting';
import CardFromProfile from './CardFromProfile';

import addButton from '../../img/add-btn.svg';
import defaultAvatar from '../../img/avatar.png';

import { cards } from '../../utils/cards';
import user from '../../utils/user';

export default function Profile({onCardOpen}) {
  const [isOpenSetting, setIsOpenSetting] = React.useState(false);

  function handleOpenSetting() {
    setIsOpenSetting(true);
  }

  function closeAllPopups() {
    setIsOpenSetting(false);
  }
  function handleCloseOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closeAllPopups();
    }
  }
  return (
    <>
      <Header onClick={handleOpenSetting} />
      <section className="user">
        <div className="user__avatar-btn">
          <img src={defaultAvatar} alt="аватарка" className="user__avatar" />
        </div>
        <div className="user__text">
          <div>
            <h1 className="user__name">Кариночка</h1>
            <button type="button" className="user__edit-btn"></button>
          </div>
          <ul className="user__description">
            <li>
              <p className="user__description-title">Прочитанных книг: <span className='user__description-title_info'>{user.countBook}</span></p>
              <p className="user__description-title">Любимый автор: <span className='user__description-title_info'>{user.favoriteAuthor}</span></p>
              <p className="user__description-title">Любимая книга: <span className='user__description-title_info'>{user.favoriteBook}</span></p>
            </li>
          </ul>
        </div>
      </section>
      <section className="elements">
        <ul className="elements__list">
          <li className="elements__list-item">
            <Link to="/" className="element element_add">
              <img
                src={addButton}
                alt="кнопка добавления публикации"
                className="element__img-add"
              />
              <p className="element__text-add">Добавить книгу</p>
            </Link>
          </li>
          
          {cards.map((card) => (
            <CardFromProfile
             key={card._id}
             card={card}
             onCardOpen={onCardOpen}
            />
          ))}
        </ul>
      </section>
      <PopupWithSetting isOpen={isOpenSetting} onCloseOverlay={handleCloseOverlay} />
    </>
  );
}
