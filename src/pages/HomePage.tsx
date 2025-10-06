import React from 'react';
import HoverLink from '../components/UI/HoverLink';
import resume from '../assets/이력서_서혜림.pdf';
import About from '../components/Section/About';
import Project from '../components/Section/Project';

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
                    신입 개발자 서혜림 입니다 😎
                  </h2>
                  <h2 className="state">
                    # 풀스택 # 태권소녀
                  </h2>
                </div>
              </div>

              <div className="right right-links space-y-8">
                <HoverLink href="#about" text="About" className="font-bold" />
                <HoverLink href="#project" text="Project" className="font-bold" />
                <HoverLink href={resume} text="Resume" target="_blank" className="font-bold" />
              </div>
            </div>
          </div>
        </section>

        <About />
        <Project />

        <div className="footer-section">
          <footer className="footer-base">
            <div className="footer-grid">
              <div className="footer-col">
                <h4 className="footer-title"> Built By <br /> Hyelim Seo</h4>
                <ul>
                  <li>
                    <a href="mailto:530hyelim@gmail.com" target="_blank" data-cursor-pointer>Reach out to me </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default HomePage;