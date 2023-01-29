import headerLogo from '../../img/logo.png';

export default function Header({onClick}) {
  return (
    <header className="header header_profile">
      <img src={headerLogo} alt="лого" className="header__logo" />
      <button
        href="кнопка настроек"
        className="header__button"
        onClick={onClick}
      ></button>
    </header>
  );
}
