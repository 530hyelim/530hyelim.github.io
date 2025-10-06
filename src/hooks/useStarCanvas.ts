import { useEffect, useRef } from 'react';

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

const starsParams = { baseSpeed: 0.3, number: 300, extinction: 2 };

class Star implements StarData {
    x: number;
    y: number;
    z: number;

    constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * width;
    }

    move(width: number) {
        this.z -= starsParams.baseSpeed;
        if (this.z <= 0) this.z = width;
    }

    show(ctx: CanvasRenderingContext2D, screen: ScreenData) {
        const { w, c } = screen;
        let x = (this.x - c[0]) * (w / this.z) + c[0];
        let y = (this.y - c[1]) * (w / this.z) + c[1];
        let rad = w / this.z;
        rad = Math.max(0.5, rad);

        const opacity = Math.max(0.1, Math.min(1, 1.2 - rad / starsParams.extinction));

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fill();
    }
}

const useStarCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number | null>(null);
    const starsRef = useRef<Star[]>([]);
    const screenRef = useRef<ScreenData | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const setup = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;

            screenRef.current = {
                w,
                h,
                c: [w * 0.5, h * 0.5],
            };

            canvas.width = w;
            canvas.height = h;

            const numStars = Math.floor((w * h) / 6000);
            starsRef.current = Array.from({ length: numStars }, () => new Star(w, h));
        };

        const render = () => {
            const screen = screenRef.current!;
            ctx.fillStyle = '#121212';
            ctx.fillRect(0, 0, screen.w, screen.h);

            starsRef.current.forEach((s) => {
                s.show(ctx, screen);
                s.move(screen.w);
            });

            animationFrameRef.current = requestAnimationFrame(render);
        };

        setup();
        render();

        const handleResize = () => {
            cancelAnimationFrame(animationFrameRef.current!);
            setup();
            render();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameRef.current!);
        };
    }, []);

    return canvasRef;
};

export default useStarCanvas;
