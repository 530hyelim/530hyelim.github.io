import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import CustomAlert from "../UI/CustomAlert";
import BubbleGallery from "../UI/BubbleGallery";
import Guestbook from "../UI/Guestbook";
import "./Contact.css";
import { motion, useAnimation, useInView } from "framer-motion";

const Contact: React.FC = () => {
    const [alert, setAlert] = useState<{ type: "success" | "error", text: string } | null>(null);
    const [loading, setLoading] = useState(false);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);

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
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <section id="contact" ref={ref}>
            <h1 className="work-section-title">☎ Contacts</h1>

            <motion.div className="contact-section" initial="hidden"
                animate={controls}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.7,
                        },
                    },
                }}>
                <motion.div className="contact-container" initial={{ opacity: 0, y: 40 }}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}>
                    <div className="contact-left"><BubbleGallery /></div>
                </motion.div>

                <motion.div className="contact-container guestbook-container" initial={{ opacity: 0, y: 40 }}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}>
                    <Guestbook />
                </motion.div>

                <motion.form className="contact-form contact-container" onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 40 }}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}>
                    <h2><FaEnvelope /> 이메일을 보내주세요!</h2>
                    <input ref={nameRef} type="text" placeholder="이름" required />
                    <input ref={emailRef} type="email" placeholder="이메일 주소" required />
                    <textarea ref={messageRef} placeholder="" rows={3} required />
                    <button type="submit" className="send-btn" disabled={loading}><FaPaperPlane /> {loading ? "전송 중..." : "전송"}</button>
                </motion.form>
            </motion.div>

            {
                alert && (
                    <CustomAlert type={alert.type} text={alert.text} onClose={() => setAlert(null)} />
                )
            }
        </section >
    );
};

export default Contact;
