import { projects } from "../../data/ProjectData";
import { Link } from "react-router-dom";
import './Project.css';

const Project: React.FC = () => {
    return (
        <section id="project" className="project-container">
            <h1 className="work-section-title">🚀 Projects</h1>
            {projects.map((project, index) => (
                <div key={project.id} className="project-item">
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
                </div>
            ))}
        </section>
    );
};

export default Project;