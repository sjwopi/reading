import React from 'react';
import headerLogo from '../../img/logo.png';

export default function Header() {
  return (
    <header className="header header_profile">
      <img src={headerLogo} alt="лого" className="header__logo" />
      <a href="кнопка настроек" className="header__button"></a>
    </header>
  );
}
