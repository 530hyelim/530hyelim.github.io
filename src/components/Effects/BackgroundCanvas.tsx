import React from 'react';
import useStarCanvas from '../../hooks/useStarCanvas';

const BackgroundCanvas: React.FC = () => {
    const canvasRef = useStarCanvas();
    
    return (
        <>
            <canvas id="stars" ref={canvasRef} className="stars-canvas"></canvas>
            <div className="bgnoise"></div>
        </>
    );
};

export default BackgroundCanvas;