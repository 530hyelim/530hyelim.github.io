import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { SiVelog } from "react-icons/si";
import { FaGithub, FaFileAlt, FaSms, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import profileImg from "../../assets/서혜림5-5미국비자.jpg";
import resume from '../../assets/이력서_서혜림.pdf';
import CustomAlert from "../UI/CustomAlert";
import "./Contact.css";

const Contact: React.FC = () => {
    const [alert, setAlert] = useState<{ type: "success" | "error", text: string } | null>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: nameRef.current?.value || "",
                email: emailRef.current?.value || "",
                message: messageRef.current?.value || "",
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                if (nameRef.current) nameRef.current.value = "";
                if (emailRef.current) emailRef.current.value = "";
                if (messageRef.current) messageRef.current.value = "";
                setAlert({ type: "success", text: "메일이 성공적으로 전송되었습니다 🎉" });
            })
            .catch(() => {
                setAlert({ type: "error", text: "메일 전송 중 오류가 발생했습니다 😢" });
            });
    };

    return (
        <section id="contact">
            <h1 className="work-section-title">☎ Contacts</h1>

            <div className="contact-section">
                <div className="contact-container">
                    <div className="contact-left">
                        <img src={profileImg} alt="Hyelim Seo" className="contact-profile" />
                    </div>

                    <div className="contact-right">
                        <h2>서혜림</h2>
                        <p>📆 1999. 06. 24</p>
                        <p>📞 010 - 9839 - 2336</p>
                        <p>📧 530hyelim@gmail.com</p>
                        <p>📍 서울시 중랑구 면목로85길 48-8</p>

                        <div className="contact-links">
                            <a href="https://github.com/530hyelim" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://velog.io/@9oofy/posts" target="_blank" rel="noopener noreferrer">
                                <SiVelog />
                            </a>
                            <a href={resume} target="_blank" rel="noopener noreferrer">
                                <FaFileAlt />
                            </a>
                            <a href="sms:01098392336?body=안녕하세요%20서혜림님!" data-cursor-pointer>
                                <FaSms />
                            </a>
                        </div>
                    </div>
                </div>

                <form className="contact-form contact-container" onSubmit={handleSubmit}>
                    <h2><FaEnvelope /> Send me an email</h2>
                    <input
                        ref={nameRef}
                        type="text"
                        placeholder="이름"
                        required
                    />
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="이메일"
                        required
                    />
                    <textarea
                        ref={messageRef}
                        placeholder="메시지를 입력하세요"
                        rows={5}
                        required
                    />
                    <button type="submit" className="send-btn">
                        <FaPaperPlane /> Send
                    </button>
                </form>
            </div>

            {alert && (
                <CustomAlert type={alert.type} text={alert.text} onClose={() => setAlert(null)} />
            )}
        </section>
    );
};

export default Contact;
