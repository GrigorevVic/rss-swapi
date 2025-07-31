import { Link } from 'react-router-dom';
import './styles.css';

export function Header() {
  return (
    <header className="header">
      <Link to="/about">
        <h1 className="about">About Us</h1>
      </Link>

      <h1 className="title">Star Wars Сharacters</h1>
    </header>
  );
}
