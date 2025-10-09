import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { icon } from "../../assets/Images";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaDocker, FaAws,
    FaGitAlt, FaSlack, FaFigma, FaGithub, FaDatabase, FaProjectDiagram, FaSitemap
} from "react-icons/fa";
import {
    SiSpringboot, SiTypescript, SiJenkins, SiTerraform,
    SiGrafana, SiSwagger, SiPostman, SiPrometheus, SiFastapi,
    SiApachemaven, SiSonarqube, SiSourcetree, SiOracle, SiOpenai
} from "react-icons/si";
import './Skills.css';

const Skills: React.FC = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <section id="skills" className="about-section" ref={ref}>
            <h1 className="work-section-title">🛠 Tech Skills</h1>
            <motion.div
                className="expertise-3col"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.7,
                        },
                    },
                }}>
                <motion.div
                    className="expertise-col"
                    initial={{ opacity: 0, y: 40 }}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    <h3>Expert</h3>
                    <div className="icon-grid">
                        <div className="icon-item">
                            <FaHtml5 color="#e44d26" />
                            <span>HTML5</span>
                        </div>
                        <div className="icon-item">
                            <FaCss3Alt color="#264de4" />
                            <span>CSS3</span>
                        </div>
                        <div className="icon-item">
                            <FaJs color="#f7df1e" />
                            <span>JavaScript</span>
                        </div>
                        <div className="icon-item">
                            <SiTypescript color="#3178c6" />
                            <span>TypeScript</span>
                        </div>
                        <div className="icon-item">
                            <FaReact color="#61dafb" />
                            <span>React</span>
                        </div>
                        <div className="icon-item">
                            <FaJava color="#f89820" />
                            <span>Java</span>
                        </div>
                        <div className="icon-item">
                            <SiSpringboot color="#6db33f" />
                            <span>Spring Boot</span>
                        </div>
                        <div className="icon-item">
                            <SiOracle color="#F80000" />
                            <span>Oracle</span>
                        </div>
                        <div className="icon-item">
                            <img src={icon.mybatis} alt="LangSmith" />
                            <span>MyBatis</span>
                        </div>
                        <div className="icon-item">
                            <img src={icon.lombok} alt="LangSmith" />
                            <span>Lombok</span>
                        </div>
                        <div className="icon-item">
                            <img src={icon.jsp} alt="LangSmith" />
                            <span>JSP</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="expertise-col"
                    initial={{ opacity: 0, y: 40 }}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    <h3>Intermediate</h3>
                    <div className="icon-grid">
                        <div className="icon-item">
                            <SiApachemaven color="#C71A36" />
                            <span>Maven</span>
                        </div>
                        <div className="icon-item">
                            <FaDatabase color="#4db6ac" />
                            <span>JDBC</span>
                        </div>
                        <div className="icon-item">
                            <SiSwagger color="#85ea2d" />
                            <span>Swagger</span>
                        </div>
                        <div className="icon-item">
                            <SiPostman color="#ff6c37" />
                            <span>Postman</span>
                        </div>
                        <div className="icon-item">
                            <FaSlack color="#4a154b" />
                            <span>Slack</span>
                        </div>
                        <div className="icon-item">
                            <SiSourcetree color="#0052CC" />
                            <span>SourceTree</span>
                        </div>
                        <div className="icon-item">
                            <FaGithub color="#181717" />
                            <span>GitHub</span>
                        </div>
                        <div className="icon-item">
                            <FaGitAlt color="#f05032" />
                            <span>Git</span>
                        </div>
                        <div className="icon-item">
                            <FaFigma color="#a259ff" />
                            <span>Figma</span>
                        </div>
                        <div className="icon-item">
                            <FaProjectDiagram color="#FF9F00" />
                            <span>Draw.io</span>
                        </div>
                        <div className="icon-item">
                            <FaSitemap color="#4A90E2" />
                            <span>ERD Cloud</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="expertise-col"
                    initial={{ opacity: 0, y: 40 }}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    <h3>Basic</h3>
                    <div className="icon-grid">
                        <div className="icon-item">
                            <FaPython color="#3776ab" />
                            <span>Python</span>
                        </div>
                        <div className="icon-item">
                            <SiOpenai color="#74AA9C" />
                            <span>OpenAI</span>
                        </div>
                        <div className="icon-item">
                            <SiFastapi color="#009688" />
                            <span>FastAPI</span>
                        </div>
                        <div className="icon-item">
                            <img src={icon.langsmith} alt="LangSmith" />
                            <span>LangSmith</span>
                        </div>
                        <div className="icon-item">
                            <FaDocker color="#2496ed" />
                            <span>Docker</span>
                        </div>
                        <div className="icon-item">
                            <SiJenkins color="#d33833" />
                            <span>Jenkins</span>
                        </div>
                        <div className="icon-item">
                            <SiSonarqube color="#4E9BCD" />
                            <span>SonarQube</span>
                        </div>
                        <div className="icon-item">
                            <FaAws color="#ff9900" />
                            <span>AWS</span>
                        </div>
                        <div className="icon-item">
                            <SiTerraform color="#844fba" />
                            <span>Terraform</span>
                        </div>
                        <div className="icon-item">
                            <SiGrafana color="#f46800" />
                            <span>Grafana</span>
                        </div>
                        <div className="icon-item">
                            <SiPrometheus color="#e6522c" />
                            <span>Prometheus</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Skills