import React from 'react';
import { Link } from 'react-router-dom';

export default function PopupWithSetting({isOpen, onCloseOverlay}) {
  return (
    <div
      className={`popup ` + (isOpen && 'popup_opened')}
      onClick={onCloseOverlay}
    >
      <div className={`popup__container-setting ` + (isOpen && 'popup__container-setting_opened')}>
        <Link to='/sign-in' className="popup__title">Выйти</Link>
      </div>
    </div>
  );
}
