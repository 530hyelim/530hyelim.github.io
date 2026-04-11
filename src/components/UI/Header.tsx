import { SiVelog } from "react-icons/si";
import { FaGithub, FaInstagram, FaSms } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './Header.css';

interface HeaderProps {
    isMenuOpen: boolean;
    toggleMenu: (e?: React.MouseEvent) => void;
    closeMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu, closeMenu }) => {
    const navigate = useNavigate();

    const handleGoTop = () => {
        navigate("/");
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 50);
        closeMenu();
    };

    return (
        <header id="header" className={`header ${isMenuOpen ? 'menu-active' : ''}`}>
            <div
                className="logog"
                data-cursor-pointer
                onClick={handleGoTop}
            >
                HyelimSeo
            </div>

            <div
                id="toggle"
                className={`toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                data-cursor-pointer
            ></div>

            <nav id="navbar" className={isMenuOpen ? 'nav-visible' : 'nav-hidden'}>
                <ul className={`nav-list ${isMenuOpen ? 'mobile-nav active' : 'mobile-nav'}`}>
                    <li><a href="https://github.com/530hyelim" target="_blank" rel="noopener noreferrer" onClick={closeMenu} data-cursor-pointer><FaGithub /></a></li>
                    <li><a href="https://velog.io/@9oofy/posts" target="_blank" rel="noopener noreferrer" onClick={closeMenu} data-cursor-pointer><SiVelog /></a></li>
                    <li><a href="https://www.instagram.com/90_ofy" target="_blank" rel="noopener noreferrer" onClick={closeMenu} data-cursor-pointer><FaInstagram /></a></li>
                    <li><a href="sms:01098392336?body=" data-cursor-pointer><FaSms /></a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;