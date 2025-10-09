import React from 'react';
import useStarCanvas from '../../hooks/useStarCanvas';

const style = {
    starsCanvas: {
        position: "fixed" as const,
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        zIndex: - 2
    }
};

const BackgroundCanvas: React.FC = () => {
    const canvasRef = useStarCanvas();

    return (
        <canvas id="stars" ref={canvasRef} style={style.starsCanvas}></canvas>
    );
};

export default BackgroundCanvas;