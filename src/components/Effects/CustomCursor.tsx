import { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const targetX = useRef(0);
    const targetY = useRef(0);
    const currentX = useRef(0);
    const currentY = useRef(0);
    const rafRef = useRef<number | null>(null);
    const isPointer = useRef(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        if (window.matchMedia("(pointer: coarse)").matches) {
            cursor.style.display = "none";
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            targetX.current = e.clientX;
            targetY.current = e.clientY;

            const target = e.target as HTMLElement;
            isPointer.current =
                !!target.closest("[data-cursor-pointer]") ||
                target.tagName === "A" ||
                target.tagName === "BUTTON";
        };

        const animate = () => {
            currentX.current += (targetX.current - currentX.current) * 1;
            currentY.current += (targetY.current - currentY.current) * 1;

            if (cursor) {
                cursor.style.transform = `translate3d(${currentX.current - 10}px, ${currentY.current - 10}px, 0)`;
                cursor.classList.toggle("active", isPointer.current);
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        document.addEventListener("mousemove", handleMouseMove);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafRef.current!);
        };
    }, []);

    return <div ref={cursorRef} className="cursor"></div>;
};

export default CustomCursor;
