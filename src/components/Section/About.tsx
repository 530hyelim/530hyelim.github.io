import { motion, useAnimation, useInView } from "framer-motion";
import { positions, timelineData } from "../../data/BioData";
import { useRef } from "react";
import './About.css'

const About: React.FC = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();

    if (inView) controls.start("visible");

    return (
        <section id="about" className="about-section" ref={ref}>
            <h1 className="work-section-title">👀 About Me</h1>
            <div className="timeline-horizontal-container">
                <motion.svg className="timeline-horizontal-svg" viewBox="0 0 1200 600" preserveAspectRatio="none">
                    <motion.path
                        d="
                        M 50 50
                        L 1150 50
                        L 1150 300
                        L 50 300
                        L 50 550
                        L 1150 550
                        "
                        fill="none"
                        stroke="url(#zigGradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={controls}
                        variants={{
                            visible: {
                                pathLength: 1,
                                transition: { duration: 4, ease: "easeInOut" },
                            },
                        }}
                    />
                    <defs>
                        <linearGradient id="zigGradient" gradientTransform="rotate(0)">
                            <stop offset="0%" stopColor="#00c3ff" />
                            <stop offset="100%" stopColor="#ffff1c" />
                        </linearGradient>
                    </defs>
                </motion.svg>

                {timelineData.map((item, i) => (
                    <motion.div
                        key={i}
                        className={`timeline-horizontal-item ${i % 2 === 0 ? "top" : "bottom"}`}
                        style={window.innerWidth > 1290 ? {
                            left: positions[i].left,
                            top: positions[i].top,
                        } : undefined}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={controls}
                        variants={{
                            visible: {
                                opacity: [0, 1],
                                scale: [0.8, 1],
                                y: [20, 0],
                                transition: {
                                    delay: 0.3 + i * 0.3,
                                    duration: 0.6,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>{item.year}</h3>
                            <p>{item.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default About;