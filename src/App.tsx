import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import BackgroundCanvas from './components/Effects/BackgroundCanvas';
import CustomCursor from './components/Effects/CustomCursor';
import Header from './components/UI/Header';

// 힝
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