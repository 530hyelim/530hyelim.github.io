import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gallery } from "../../assets/Images";
import "./BubbleGallery.css";

const BubbleGallery: React.FC = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="bubble-gallery">
            <AnimatePresence mode="wait">
                <motion.img
                    key={active}
                    src={gallery[active]}
                    alt="gallery-main"
                    className="bubble-main"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.25 }}
                />
            </AnimatePresence>

            <div className="bubble-thumbs">
                {gallery.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`thumb-${i}`}
                        className={`bubble-thumb${active === i ? " active" : ""}`}
                        onMouseEnter={() => setActive(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default BubbleGallery;
