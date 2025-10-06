import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import BackgroundCanvas from './components/Effects/BackgroundCanvas';
import CustomCursor from './components/Effects/CustomCursor';
import Header from './components/UI/Header';

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
        :root {
            --bg-color: #121212;
            --accent-color: #00ff80;
            --text-light: #ffffff;
            --text-gray: #a0a0a0;
            --font-inter: 'Inter', sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-light);
            font-family: var(--font-inter);
            scroll-behavior: smooth;
            margin: 0;
            padding: 0;
            min-height: 100vh;
        }

        body, body * {
            cursor: none;
        }

        .font-black { font-weight: 900; }
        .font-bold { font-weight: 700; }
        .font-mono { font-family: monospace; }
        .text-white { color: var(--text-light); }
        .text-gray-400 { color: #9ca3af; }
        .text-green-400 { color: #4ade80; }
        .no-select { user-select: none; }
        .no-underline { text-decoration: none; }
        .transition-colors { transition: color 0.3s; }
        
        .stars-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -2; 
        }

        .cursor {
            position: fixed;
            width: 20px; 
            height: 20px;
            border-radius: 50%;
            background-color: var(--accent-color);
            pointer-events: none;
            mix-blend-mode: difference;
            z-index: 9999; 
            transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            will-change: transform;
        }
    
        .cursor.active {
            width: 60px;
            height: 60px;
        }

        .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 40px;
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

        .main-content {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
            padding-left: 40px;
            padding-right: 40px;
            z-index: 10;
            padding-top: 100px;
        }
        
        @media (max-width: 768px) {
            .main-content {
                padding-left: 20px;
                padding-right: 20px;
                padding-top: 80px;
            }
        }

        .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding-top: 100px;
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
                grid-template-columns: 2fr 1fr;
            }
            .right-links {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: flex-start;
                padding-top: 40px;
                space-y: 32px;
            }
        }
        
        .space-y-8 > *:not(:last-child) {
            margin-bottom: 32px;
        }

        .hi {
            font-size: 3.8rem;
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
        .linkedin-icon a:hover { color: #3b82f6; }

        .c {
            position: relative;
            overflow: hidden;
            display: block;
            line-height: 1.2;
            text-decoration: none;
            width: fit-content;
        }

        .c > div {
            transform: translateY(0);
            transition: transform 0.3s ease-out;
            color: var(--text-light);
            font-size: 1.875rem;
            font-weight: 700;
            padding-right: 5px; 
            line-height: 1.2;
        }

        .c:hover > div:nth-child(1) { transform: translateY(-100%); }
        .c:hover > div:nth-child(2) { transform: translateY(-100%); }
        .c:hover > div:nth-child(3) { transform: translateY(-100%); }
        
        .c > div:nth-child(2) { color: var(--accent-color); position: absolute; top: 100%; left: 0;}
        .c > div:nth-child(3) { color: var(--accent-color); position: absolute; top: 200%; left: 0; }
        
        .work-section-title {
            font-size: 3rem;
            font-weight: 900;
            color: var(--text-light);
            margin-top: 80px;
            margin-bottom: 80px;
        }
        @media (min-width: 768px) {
            .work-section-title { font-size: 3.75rem; margin-top: 160px; }
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
        
        .order-1 { order: 1; }
        .order-2 { order: 2; }
        .lg-order-1 { order: 1; }
        .lg-order-2 { order: 2; }

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

        .project-num {
            font-size: 1.25rem;
            color: #a0a0a0;
            margin-bottom: 8px;
            font-family: monospace;
        }
        .project-title {
            font-size: 2.25rem;
            font-weight: 900;
            color: var(--text-light);
            margin-bottom: 12px;
        }
        @media (min-width: 768px) {
            .project-title { font-size: 3rem; }
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

        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
    `;

    return (
        <Router>
            <style dangerouslySetInnerHTML={{ __html: appStyles }} />
            <BackgroundCanvas />
            <CustomCursor />
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/:projectId" element={<ProjectDetail />} />
            </Routes>
        </Router>
    );
};

export default App;