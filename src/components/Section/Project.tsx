import { projects } from "../../data/ProjectData";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import './Project.css';

const Project: React.FC = () => {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    return (
        <section id="project" className="project-container">
            <h1 className="work-section-title">🚀 Projects</h1>
            {projects.map((project, index) => (
                <motion.div key={project.id} className="project-item" variants={fadeInUp} initial="hidden" 
                    whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                    <div className="project-grid">
                        <div className={`ldiv order-2 ${index % 2 === 0 ? 'lg-order-1' : 'lg-order-2'}`}>
                            <img src={project.img} alt={project.title} className={`divimg`} />
                        </div>
                        <div className={`rdiv order-1 ${index % 2 === 0 ? 'lg-order-2' : 'lg-order-1'}`}>
                            <h1 className="project-num font-mono">#{project.id.toString().padStart(2, '0')}</h1>
                            <h1 className="project-title font-black text-white">{project.title}</h1>
                            <p className="project-subtitle">{project.subtitle}</p>
                            <Link
                                className="project-link font-bold"
                                to={`/projects/${project.id}`}
                            >
                                View case study →
                            </Link>
                        </div>
                    </div>
                </motion.div>
            ))}
        </section>
    );
};

export default Project;