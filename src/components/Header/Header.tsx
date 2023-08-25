import { FC, useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header:FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    return (
        <header className="header">
            <div className="container header__inner">
                <nav className='nav'>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link">Home</Link>
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
                            <a href="#contacts" className="nav__link">Contacts</a>
                        </li>
                    </ul>
                </nav>
                <button 
                    className={mobileMenuOpen ? 'burger burger--active' : 'burger'}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                    <span className='burger__item'></span>
                    <span className='burger__item'></span>
                    <span className='burger__item'></span>
                </button>
                <div className={mobileMenuOpen ? "mobile-menu mobile-menu--active" : 'mobile-menu'}>
                    <nav className='nav-mobile'>
                        <ul className="mobile-menu__list">
                            <li className="mobile-menu__item">
                                <Link to="/" className="nav__link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                            </li>
                            <li className="mobile-menu__item">
                                <a href="#about" className="nav__link" onClick={() => setMobileMenuOpen(false)}>About</a>
                            </li>
                            <li className="mobile-menu__item">
                                <a href="#skills" className="nav__link" onClick={() => setMobileMenuOpen(false)}>Skills</a>
                            </li>
                            <li className="mobile-menu__item">
                                <a href="#projects" className="nav__link" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                            </li>
                            <li className="mobile-menu__item">
                                <a href="#contacts" className="nav__link" onClick={() => setMobileMenuOpen(false)}>Contacts</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header