import { Link } from "react-router-dom";

interface HeaderProps {
    isMenuOpen: boolean;
    toggleMenu: (e?: React.MouseEvent) => void;
    closeMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu, closeMenu }) => {
    return (
        <header id="header" className={`header ${isMenuOpen ? 'menu-active' : ''}`}>
            <Link className="logog" data-cursor-pointer to={`/`}>HS</Link>

            <div
                id="toggle"
                className={`toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                data-cursor-pointer
            ></div>

            <nav id="navbar" className={isMenuOpen ? 'nav-visible' : 'nav-hidden'}>
                <ul className={`nav-list ${isMenuOpen ? 'mobile-nav active' : 'mobile-nav'}`}>
                    <li><a href="https://github.com/530hyelim" target="_blank" rel="noopener noreferrer" onClick={closeMenu} data-cursor-pointer>GitHub</a></li>
                    <li><a href="https://velog.io/@9oofy/posts" target="_blank" rel="noopener noreferrer" onClick={closeMenu} data-cursor-pointer>Velog</a></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;