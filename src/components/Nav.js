import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/home" className="nav__link nav__link_home" />
      <Link to="/messenger" className="nav__link nav__link_messenger" />
      <Link to="/" className="nav__link nav__link_profile" />
    </nav>
  );
}
