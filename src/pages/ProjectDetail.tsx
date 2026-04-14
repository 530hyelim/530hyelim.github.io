import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, type Variants } from "framer-motion";
import { projects } from '../data/ProjectData';
import ImageGallery from '../components/UI/ImageGallery';
import './ProjectDetail.css';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const isMobile = () => window.innerWidth <= 768;
const anim = () => isMobile() ? {} : fadeInUp;

const ProjectDetail: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const project = projects.find(p => p.id === Number(projectId));

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!project) return <div>프로젝트를 찾을 수 없습니다.</div>;

    const systemDiagrams = [
        { src: project.calendar, alt: "개발 일정" },
        { src: project.structure, alt: "시스템 구조도" },
        { src: project.ucDiagram, alt: "유스케이스 다이어그램" },
        { src: project.erDiagram, alt: "ER 다이어그램" },
    ];

    const wrapperVariants = isMobile()
        ? undefined
        : { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

    return (
        <motion.div className="project-detail-container" initial="hidden" animate="visible" variants={wrapperVariants}>
            <Link to="/" className="backtohome-link font-bold">← Back to Home</Link>

            <motion.header className="project-header" variants={anim()}>
                <h1>{project.title}</h1>
                <img src={project.img} alt={project.title} />
            </motion.header>

            <motion.section className="project-section" variants={anim()}>
                <h2>🧩 기술 스택</h2>
                <div className="tech-stack-table-wrapper tech-stack-desktop">
                    <table className="tech-stack-table">
                        <thead>
                            <tr>{Object.keys(project.techStack).map((key) => <th key={key}>{key.toUpperCase()}</th>)}</tr>
                        </thead>
                        <tbody>
                            <tr>
                                {Object.values(project.techStack).map((values, index) => (
                                    <td key={index}><ul>{values.map((v) => <li key={v}>{v}</li>)}</ul></td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="tech-stack-mobile">
                    {Object.entries(project.techStack).filter(([key]) => key !== 'os').map(([key, values]) => (
                        <div key={key} className="tech-stack-mobile-item">
                            <strong>{key.toUpperCase()}</strong>
                            <ul>{values.map((v) => <li key={v}>{v}</li>)}</ul>
                        </div>
                    ))}
                </div>
            </motion.section>

            <motion.section className="project-section" variants={anim()}>
                <h2>💡 기획 의도</h2>
                <ul>
                    {project.planning.map((plan, idx) => (
                        <div key={idx}>
                            <li>{plan.heading}</li>
                            {plan.items && <ul>{plan.items.map((item, i) => <li key={i}>{item}</li>)}</ul>}
                        </div>
                    ))}
                </ul>
            </motion.section>

            <motion.section className="project-section" variants={anim()}>
                <h2>🎯 개발 목표</h2>
                <ul>{project.goals.map((goal, i) => <li key={i}>{goal}</li>)}</ul>
            </motion.section>

            <motion.section className="project-section" variants={anim()}>
                <h2>🔍 레퍼런스 분석</h2>
                <div className="cards-grid">
                    {project.references.map((ref, idx) => (
                        <div key={idx} className="reference-block card">
                            <div className="reference-header">
                                <h4 style={{ textAlign: "center" }}>{ref.website.join(" / ")}</h4>
                            </div>
                            <ImageGallery images={ref.img.map((src, i) => ({ src, alt: ref.website[i] || 'Reference' }))} />
                            <div className="reference-details">
                                <div>
                                    <strong>👍 좋은 점</strong>
                                    <ul>{ref.goods.map((g, i) => <li key={i}>{g}</li>)}</ul>
                                </div>
                                <div>
                                    <strong>👎 아쉬운 점</strong>
                                    <ul>{ref.bads.map((b, i) => <li key={i}>{b}</li>)}</ul>
                                </div>
                                {ref.improvements && ref.improvements.length > 0 && (
                                    <div>
                                        <strong>✨ 개선 방향</strong>
                                        <ul>{ref.improvements.map((imp, i) => <li key={i}>{imp}</li>)}</ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            <motion.section className="project-section" variants={anim()}>
                <h2>🗂️ 시스템 설계</h2>
                <ImageGallery images={systemDiagrams} showCaption />
            </motion.section>

            <motion.section className="project-section" variants={anim()}>
                <h2>⚙️ 주요 기능</h2>
                <div className="cards-grid">
                    {project.features.map((f, i) => (
                        <div key={i} className="card">
                            <h4>{f.heading}</h4>
                            <ul>{f.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
                        </div>
                    ))}
                </div>
            </motion.section>

            {project.adminFeatures && (
                <motion.section className="project-section" variants={anim()}>
                    <h2>🛠 관리자 기능</h2>
                    <div className="cards-grid">
                        {project.adminFeatures.map((f, i) => (
                            <div key={i} className="card">
                                <h4>{f.heading}</h4>
                                <ul>{f.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
                            </div>
                        ))}
                    </div>
                </motion.section>
            )}

            <motion.section className="project-section" variants={anim()}>
                <h2>👩‍💻 담당 역할</h2>
                <ul>
                    {project.role.map((r, i) => (
                        <div key={i}>
                            <li>{r.heading}</li>
                            {r.items && <ul>{r.items.map((item, j) => <li key={j}>{item}</li>)}</ul>}
                        </div>
                    ))}
                </ul>
            </motion.section>

            <motion.section className="project-section" variants={anim()}>
                <h2>👩‍💻 상세 구현내용</h2>
                <div className="cards-block">
                    {project.detail.map((d: any, i: number) => (
                        <div key={i} className="card">
                            <h4 style={{ textAlign: "center" }}>{d.title}</h4>
                            <ImageGallery images={d.images.map((src: string) => ({ src, alt: d.title }))} />
                            <ol>
                                {d.description.map((item: any, j: number) => (
                                    <React.Fragment key={j}>
                                        <li>{item.heading}</li>
                                        <ul>{item.items.map((list: string, idx: number) => <li key={idx}>{list}</li>)}</ul>
                                    </React.Fragment>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
            </motion.section>

            <motion.section className="project-section" variants={anim()}>
                <h2>🏆 성과 및 배운점</h2>
                <ul>{project.learnings.map((learning, idx) => <li key={idx}>{learning}</li>)}</ul>
            </motion.section>

            <motion.section className="project-section" variants={anim()}>
                <h2>🙆‍♀️ 참여 소감</h2>
                {project.takeaway.map((line, idx) => <p key={idx} className="text-gray-700">{line}</p>)}
            </motion.section>

            {project.improvements && project.improvements.length > 0 && (
                <motion.section className="project-section" variants={anim()}>
                    <h2>🚀 향후 개선 방향</h2>
                    <ul>{project.improvements.map((imp, i) => <li key={i}>{imp}</li>)}</ul>
                </motion.section>
            )}

            <motion.div className="action-bar" variants={anim()}>
                {project.websiteUrl && (
                    <button className="action-button" onClick={() => window.open(project.websiteUrl, "_blank", "noopener,noreferrer")}>
                        홈페이지 이동
                    </button>
                )}
                <button onClick={handleScrollToTop} className="action-button">처음으로</button>
                {project.githubUrl && (
                    <button className="action-button" onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}>
                        코드 보러가기
                    </button>
                )}
            </motion.div>
        </motion.div>
    );
};

export default ProjectDetail;
