import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header__inner">
                <nav className='nav'>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link">Home</NavLink>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">Skills</a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">Projects</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">Contacts</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header