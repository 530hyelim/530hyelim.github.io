import React, { useState, useEffect, useCallback } from 'react';
import BackgroundCanvas from './components/Effects/BackgroundCanvas';
import CustomCursor from './components/Effects/CustomCursor';
import Header from './components/UI/Header';
import HoverLink from './components/UI/HoverLink';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('#header')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen, closeMenu]);

  const appStyles = `
        /* Variables */
        :root {
            --bg-color: #121212;
            --accent-color: #00ff80;
            --text-light: #ffffff;
            --text-gray: #a0a0a0;
            --font-inter: 'Inter', sans-serif;
        }

        /* Base Styles */
        body {
            background-color: var(--bg-color);
            color: var(--text-light);
            font-family: var(--font-inter);
            cursor: none; 
            scroll-behavior: smooth;
            margin: 0;
            padding: 0;
            min-height: 100vh;
        }

        /* Utility Classes */
        .font-black { font-weight: 900; }
        .font-bold { font-weight: 700; }
        .font-mono { font-family: monospace; }
        .text-white { color: var(--text-light); }
        .text-gray-400 { color: #9ca3af; } /* Tailwind gray-400 equivalent */
        .text-green-400 { color: #4ade80; } /* Tailwind green-400 equivalent */
        .no-select { user-select: none; }
        .no-underline { text-decoration: none; }
        .transition-colors { transition: color 0.3s; }
        
        /* Background Elements */
        .stars-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -2; 
        }

        /* Custom Cursor */
        .cursor {
            position: fixed;
            width: 20px; 
            height: 20px;
            border-radius: 50%;
            background-color: var(--accent-color);
            pointer-events: none;
            mix-blend-mode: difference;
            z-index: 9999; 
            transform: translate(-50%, -50%);
            transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            will-change: transform;
        }
    
        .cursor.active {
            width: 60px;
            height: 60px;
            opacity: 0.5;
        }

        /* Header */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 40px; /* Base padding */
            z-index: 50;
            backdrop-filter: blur(5px);
            background-color: rgba(0, 0, 0, 0.1);
        }

        .logog {
            font-size: 2rem;
            font-weight: 800;
            color: var(--text-light);
            text-decoration: none;
            letter-spacing: 0.2rem;
            transition: color 0.3s;
        }
        .logog:hover { color: #a0a0a0; }

        /* Mobile Toggle Button */
        .toggle {
            display: none;
            width: 24px;
            height: 2px;
            background-color: var(--text-light);
            position: relative;
            transition: transform 0.3s;
            cursor: pointer;
            z-index: 1000;
        }

        .toggle::before, .toggle::after {
            content: '';
            position: absolute;
            width: 24px;
            height: 2px;
            background-color: var(--text-light);
            transition: transform 0.3s, top 0.3s;
        }

        .toggle::before { top: -8px; }
        .toggle::after { top: 8px; }

        .toggle.active { background-color: transparent; }
        .toggle.active::before { transform: rotate(45deg); top: 0; }
        .toggle.active::after { transform: rotate(-45deg); top: 0; }

        /* Navigation List - Base */
        .nav-list {
            display: flex;
            flex-direction: row;
            list-style: none;
            padding: 0;
            margin: 0;
            gap: 24px;
        }
        .nav-list a {
            font-size: 1.125rem;
            font-weight: 500;
            color: var(--text-light);
            text-decoration: none;
            transition: color 0.3s;
        }
        .nav-list a:hover { color: var(--accent-color); }


        /* Navigation - Mobile Overrides */
        @media (max-width: 768px) {
            .header { padding: 20px 20px; }
            .toggle { display: block; }
            .nav-hidden { display: none; }
            .nav-visible { display: block; }

            .nav-list {
                position: fixed;
                top: 0;
                right: -100%;
                width: 70%;
                max-width: 300px;
                height: 100%;
                background-color: #1a1a1a;
                padding: 100px 30px;
                transition: right 0.3s ease-in-out;
                z-index: 999;
                flex-direction: column;
                gap: 30px;
            }
            
            .nav-list.active { right: 0; }
            .nav-list a { font-size: 1.5rem; }
        }


        /* Main Content Container & Layout */
        .main-content {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
            padding-left: 40px;
            padding-right: 40px;
            z-index: 10;
            padding-top: 100px; /* Space for fixed Header */
        }
        
        @media (max-width: 768px) {
            .main-content {
                padding-left: 20px;
                padding-right: 20px;
                padding-top: 80px; /* Smaller space for mobile header */
            }
        }

        /* Hero Section */
        .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding-top: 100px; /* Additional top spacing */
            padding-bottom: 80px;
        }
        
        .land {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
            width: 100%;
        }
        
        @media (min-width: 1024px) {
            .land {
                grid-template-columns: 2fr 1fr; /* lg:grid-cols-3 ratio */
            }
            .right-links {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: flex-start;
                padding-top: 40px;
                space-y: 32px; /* Add space-y equivalent */
            }
        }
        
        .space-y-8 > *:not(:last-child) {
            margin-bottom: 32px;
        }


        .hi {
            font-size: 4.1rem;
            line-height: 1.1;
            margin-top: 1rem;
            margin-bottom: 1.5rem;
        }
        .state {
            font-size: 1.125rem;
            color: #a0a0a0;
            line-height: 1.5;
            max-width: 768px;
        }

        @media (min-width: 768px) {
            .state { font-size: 1.25rem; }
        }

        .linkedin-icon {
            margin-top: 80px;
        }

        .linkedin-icon a {
            font-size: 1.5rem;
            color: var(--text-light);
            transition: color 0.3s;
        }
        .linkedin-icon a:hover { color: #3b82f6; } /* Blue hover */

        /* Hover Link Effect (.c) */
        .c {
            position: relative;
            overflow: hidden;
            display: block;
            line-height: 1.2;
            text-decoration: none;
            width: fit-content; /* Ensure container only wraps content */
        }

        .c > div {
            transform: translateY(0);
            transition: transform 0.3s ease-out;
            color: var(--text-light);
            font-size: 1.875rem; /* text-3xl */
            font-weight: 700;
            padding-right: 5px; 
            line-height: 1.2;
        }

        .c:hover > div:nth-child(1) { transform: translateY(-100%); }
        .c:hover > div:nth-child(2) { transform: translateY(-100%); }
        .c:hover > div:nth-child(3) { transform: translateY(-100%); }
        
        .c > div:nth-child(2) { color: var(--accent-color); position: absolute; top: 100%; left: 0;}
        .c > div:nth-child(3) { color: var(--accent-color); position: absolute; top: 200%; left: 0; }
        
        /* Work Section */
        .work-section-title {
            font-size: 3rem; /* text-5xl */
            font-weight: 900;
            color: var(--text-light);
            margin-top: 80px;
            margin-bottom: 80px;
        }
        @media (min-width: 768px) {
            .work-section-title { font-size: 3.75rem; margin-top: 160px; } /* md:text-6xl */
        }


        .project-item {
            padding-top: 64px;
            padding-bottom: 64px;
            border-top: 1px solid #333;
        }
        @media (min-width: 768px) {
            .project-item { padding-top: 96px; padding-bottom: 96px; }
        }

        .project-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
            align-items: center;
        }
        @media (min-width: 1024px) {
            .project-grid {
                grid-template-columns: 1fr 1fr;
                gap: 80px;
            }
        }
        
        /* Project Alternating Layout (lg) */
        .order-1 { order: 1; }
        .order-2 { order: 2; }
        .lg-order-1 { order: 1; }
        .lg-order-2 { order: 2; }

        /* Project Image Placeholders */
        .divimg {
            background-color: #222;
            border-radius: 0.5rem;
            height: 300px;
            background-size: cover;
            background-position: center;
        }
        .aimg { background-image: url('https://placehold.co/600x400/333333/ffffff?text=Project+01'); }
        .bimg { background-image: url('https://placehold.co/600x400/444444/ffffff?text=Project+02'); }
        .cimg { background-image: url('https://placehold.co/600x400/555555/ffffff?text=Project+03'); }
        .dimg { background-image: url('https://placehold.co/600x400/666666/ffffff?text=Project+04'); }

        /* Project Text */
        .project-num {
            font-size: 1.25rem;
            color: #a0a0a0;
            margin-bottom: 8px;
            font-family: monospace;
        }
        .project-title {
            font-size: 2.25rem; /* text-4xl */
            font-weight: 900;
            color: var(--text-light);
            margin-bottom: 12px;
        }
        @media (min-width: 768px) {
            .project-title { font-size: 3rem; } /* md:text-5xl */
        }

        .project-subtitle {
            font-size: 1.125rem;
            color: #a0a0a0;
            margin-bottom: 32px;
        }

        .project-link {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent-color);
            text-decoration: none;
        }
        .project-link:hover { text-decoration: underline; }

        /* Footer */
        .footer-section {
            padding-top: 128px;
            padding-bottom: 40px;
        }
        .footer-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
            border-top: 1px solid #333;
            padding-top: 40px;
        }
        @media (min-width: 768px) {
            .footer-grid { grid-template-columns: 1fr 1fr; }
        }

        .footer-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-light);
            margin-bottom: 16px;
            line-height: 1.2;
        }
        .footer-col ul { list-style: none; padding: 0; }
        .footer-col a { 
            color: #a0a0a0; 
            text-decoration: none;
            transition: color 0.3s;
        }
        .footer-col a:hover { color: var(--text-light); }
        
        .social-links {
            display: flex;
            gap: 24px;
            font-size: 1.5rem;
        }
        @media (min-width: 768px) {
            .social-alignment {
                display: flex;
                justify-content: flex-end;
            }
        }

        /* Font Awesome is required for social icons */
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
    `;


  return (
    <div className="app-container">
      <style dangerouslySetInnerHTML={{ __html: appStyles }} />

      <BackgroundCanvas />
      <CustomCursor />

      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />

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
                    신입 개발자 서혜림 입니다 ;)
                  </h2>
                  <h2 className="state">
                    # 풀스택 # 태권소녀
                  </h2>
                </div>
              </div>

              <div className="right right-links space-y-8">
                <HoverLink href="#work1" text="Work" className="font-bold" />
                <HoverLink href="#about-section" text="About" className="font-bold" />
                <HoverLink
                  href=""
                  text="Resume"
                  target="_blank"
                  className="font-bold"
                />
                <HoverLink href="#footer-section" text="Etc." className="font-bold" />
              </div>
            </div>

            {/* <div className="linkedin-icon">
              <a href="" target="_blank" rel="noopener noreferrer" data-cursor-pointer>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </div>
        </section>

        <section id="work1">
          <h1 className="work-section-title">Selected Work</h1>

          {
            [
              { id: 1, title: '요리 PICK! 조리 PICK!', subtitle: '레시피 맞춤 추천 플랫폼', link: './', imgClass: 'aimg' },
              { id: 2, title: 'new Learn();', subtitle: '온라인 학습 플랫폼', link: './', imgClass: 'bimg' },
            ].map((project, index) => (
              <div key={project.id} className="project-item">
                <div className="project-grid">
                  <div className={`ldiv order-2 ${index % 2 === 0 ? 'lg-order-1' : 'lg-order-2'}`}>
                    <div className={`divimg ${project.imgClass}`}></div>
                  </div>
                  <div className={`rdiv order-1 ${index % 2 === 0 ? 'lg-order-2' : 'lg-order-1'}`}>
                    <h1 className="project-num font-mono">#{project.id.toString().padStart(2, '0')}</h1>
                    <h1 className="project-title font-black text-white">{project.title}</h1>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <a className="project-link font-bold" href={project.link} data-cursor-pointer>
                      View case study →
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </section>

        <div id="footer-section" className="footer-section">
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
              {/* <div className="footer-col social-alignment">
                <div className="social-links">
                  <a href="" target="_blank" rel="noopener noreferrer" data-cursor-pointer><i className="fab fa-linkedin-in"></i></a>
                  <a href="" target="_blank" rel="noopener noreferrer" data-cursor-pointer><i className="fab fa-instagram"></i></a>
                </div>
              </div> */}
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;