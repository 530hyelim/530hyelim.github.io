import { useCallback, useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
            
            const target = e.target as HTMLElement;
            const isPointer = target.closest('[data-cursor-pointer]') || target.tagName === 'A' || target.tagName === 'BUTTON';

            if (isPointer) {
                cursorRef.current.classList.add('active');
            } else {
                cursorRef.current.classList.remove('active');
            }
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    return <div ref={cursorRef} className="cursor"></div>;
};

export default CustomCursor;