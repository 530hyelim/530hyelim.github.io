interface HeaderProps {
    isMenuOpen: boolean;
    toggleMenu: (e?: React.MouseEvent) => void;
    closeMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu, closeMenu }) => {
    return (
        <header id="header" className={`header ${isMenuOpen ? 'menu-active' : ''}`}>
            <a href="#" className="logog" data-cursor-pointer>
                HS
            </a>
            
            <div 
                id="toggle" 
                className={`toggle ${isMenuOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
                data-cursor-pointer
            ></div>
            
            <nav id="navbar" className={isMenuOpen ? 'nav-visible' : 'nav-hidden'}> 
                <ul className={`nav-list ${isMenuOpen ? 'mobile-nav active' : 'mobile-nav'}`}>
                    <li><a href="#work1" onClick={closeMenu} data-cursor-pointer>Work</a></li>
                    <li><a href="#about-section" onClick={closeMenu} data-cursor-pointer>About</a></li>
                    <li><a href="" target="_blank" rel="noopener noreferrer" onClick={closeMenu} data-cursor-pointer>Resume</a></li>
                    <li><a href="#footer-section" onClick={closeMenu} data-cursor-pointer>Etc.</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;