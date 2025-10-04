import { useEffect, useRef, useCallback } from 'react';

interface StarData {
    x: number;
    y: number;
    z: number;
    move: (width: number) => void;
    show: (ctx: CanvasRenderingContext2D, screen: ScreenData) => void;
}

interface ScreenData {
    w: number;
    h: number;
    c: [number, number];
}

const starsParams = { speed: 0.4, number: 400, extinction: 2 };

class Star implements StarData {
    x: number;
    y: number;
    z: number;
    
    constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * width;
    }

    move = (width: number) => {
        this.z -= starsParams.speed;
        if (this.z <= 0) {
            this.z = width;
        }
    };

    show = (ctx: CanvasRenderingContext2D, screen: ScreenData) => {
        const { w, c } = screen;
        let x, y, rad, opacity;

        x = (this.x - c[0]) * (w / this.z) + c[0];
        y = (this.y - c[1]) * (w / this.z) + c[1];
        rad = w / this.z;
        
        opacity = (rad > starsParams.extinction) ? 0.5 * (2 - rad / starsParams.extinction) : 1;
        rad = Math.max(0.5, rad); 

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fill();
    };
}

const useStarCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number | null>(null); 

    const setupAndAnimate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let screen: ScreenData;
        let starsElements: StarData[];

        const setupStars = () => {
            screen = {
                w: window.innerWidth,
                h: window.innerHeight,
                c: [window.innerWidth * 0.5, window.innerHeight * 0.5]
            };
            
            canvas.width = screen.w;
            canvas.height = screen.h;
            starsElements = [];
            for (let i = 0; i < starsParams.number; i++) {
                starsElements.push(new Star(screen.w, screen.h));
            }
        };
        
        const updateStars = () => {
            ctx.fillStyle = "#121212"; 
            ctx.fillRect(0, 0, screen.w, screen.h);
            
            starsElements.forEach(s => {
                s.show(ctx, screen);
                s.move(screen.w); 
            });
            
            animationFrameRef.current = window.requestAnimationFrame(updateStars);
        };

        setupStars();
        
        if (animationFrameRef.current) {
            window.cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = window.requestAnimationFrame(updateStars);

        return () => {
            if (animationFrameRef.current) {
                window.cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const cleanUp = setupAndAnimate(); 

        const handleResize = () => {
            setupAndAnimate(); 
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cleanUp?.(); 
        };
    }, [setupAndAnimate]);

    return canvasRef;
};

export default useStarCanvas;