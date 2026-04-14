import React from 'react';
import HoverLink from '../components/UI/HoverLink';
import About from '../components/Section/About';
import Project from '../components/Section/Project';
import Skills from '../components/Section/Skills';
import Contact from '../components/Section/Contact';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="app-container">
      <main className="main-content">

        <section id="hero-section" className="hero-section">
          <div className="content-wrapper" style={{ width: '100%' }}>
            <div className="land">

              <div className="left">
                <div className="case1">
                  <h2 className="state">
                    System.out.println("안녕하세요!");
                  </h2>
                  <h2 className="hi font-black text-white">
                    한국어보다 Java가 편한<br />
                    개발자 서혜림 입니다 😎
                  </h2>
                  <h2 className="state">
                  </h2>
                </div>
              </div>

              <div className="right right-links space-y-8">
                <HoverLink href="#about" text="About" className="font-bold" />
                <HoverLink href="#skills" text="Skills" className="font-bold" />
                <HoverLink href="#project" text="Project" className="font-bold" />
                <HoverLink href="#contact" text="Contact" className="font-bold" />
              </div>
            </div>
          </div>
        </section>

        <About />
        <Skills />
        <Project />
        <Contact />
      </main>

      <nav className="mobile-bottom-nav">
        {[
          { href: '#about', text: 'About' },
          { href: '#skills', text: 'Skills' },
          { href: '#project', text: 'Project' },
          { href: '#contact', text: 'Contact' },
        ].map(({ href, text }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(href.replace('#', ''));
              if (el) {
                window.scrollTo({
                  top: el.getBoundingClientRect().top + window.scrollY - 80,
                  behavior: 'smooth',
                });
              }
            }}
          >
            {text}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default HomePage;