import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

const Navbar = () => (
    <nav className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="/">Mon travail</Link>
        <Link to="/">A propos</Link>
        <Link to="/">Contact</Link>
    </nav>
)

export default Navbar