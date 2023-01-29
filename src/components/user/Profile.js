import React from 'react';
import { Link } from 'react-router-dom';

import addButton from '../../img/add-btn.svg';
import defaultAvatar from '../../img/avatar.png';
import defaultPub from '../../img/img-for-add.jpg';

import Header from './Header';
import Nav from '../Nav';
import Setting from './Setting';

export default function Profile() {
  const [isOpenSetting, setIsOpenSetting] = React.useState(false);

  function handleOpenSetting() {
    console.log('adsf')
    setIsOpenSetting(true);
  }
  function closeAllPopups() {
    setIsOpenSetting(false);
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
              <p className="user__description-title">Любимые жанры:</p>
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

          <li className="elements__list-item">
            <article className="element">
              <img src={defaultPub} alt="публикация" className="element__img" />
              <button type="button" className="element__delete-btn"></button>
              <div className="element__caption">
                <p className="element__name">Дракула</p>
                <p className="element__author">Не Стивен Кинг</p>
              </div>
            </article>
          </li>

          <li className="elements__list-item">
            <article className="element">
              <img src={defaultPub} alt="публикация" className="element__img" />
              <button type="button" className="element__delete-btn"></button>
              <div className="element__caption">
                <p className="element__name">Дракула</p>
                <p className="element__author">Не Стивен Кинг</p>
              </div>
            </article>
          </li>
        </ul>
      </section>

      <Nav />

      <Setting isOpen={isOpenSetting} onCloseOverlay={closeAllPopups} />
    </>
  );
}
