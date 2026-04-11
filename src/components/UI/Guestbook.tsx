import { FaPaperPlane } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import CustomAlert from "./CustomAlert";
import "./Guestbook.css";

interface GuestEntry {
    id: string;
    name: string;
    message: string;
    createdAt: { seconds: number } | null;
}

const ITEMS_PER_PAGE = 2;

const Guestbook: React.FC = () => {
    const [entries, setEntries] = useState<GuestEntry[]>([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [alert, setAlert] = useState<{ type: "success" | "error", text: string } | null>(null);

    const totalPages = Math.ceil(entries.length / ITEMS_PER_PAGE);
    const paginated = entries.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    useEffect(() => {
        const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
        const unsub = onSnapshot(q, (snapshot) => {
            setEntries(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as GuestEntry)));
        });
        return () => unsub();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;
        setLoading(true);
        await addDoc(collection(db, "guestbook"), {
            name: name.trim(),
            message: message.trim(),
            createdAt: serverTimestamp(),
        });
        setName("");
        setMessage("");
        setLoading(false);
        setPage(1);
        setAlert({ type: "success", text: "방명록이 등록되었습니다 🎉" });
    };

    return (
        <>
        <div className="guestbook">
            <h2>📝 방명록을 남겨주세요!</h2>
            <ul className="guestbook-list">
                {paginated.map(entry => (
                    <li key={entry.id} className="guestbook-entry">
                        <div className="guestbook-meta">
                            <span className="guestbook-name">{entry.name}</span>
                            {entry.createdAt && (
                                <span className="guestbook-date">
                                    {new Date(entry.createdAt.seconds * 1000).toLocaleString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })}
                                </span>
                            )}
                        </div>
                        <p className="guestbook-message">{entry.message}</p>
                    </li>
                ))}
                {totalPages > 1 && (
                <div className="guestbook-pagination">
                    <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>‹</button>
                    <span>{page} / {totalPages}</span>
                    <button onClick={() => setPage(p => Math.min(p + 1, totalPages))} disabled={page === totalPages}>›</button>
                </div>
            )}
            </ul>
            <form className="guestbook-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="내용을 입력하세요 :)"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    <FaPaperPlane />
                </button>
            </form>
        </div>
        {alert && <CustomAlert type={alert.type} text={alert.text} onClose={() => setAlert(null)} />}
    </> 
    );
};

export default Guestbook;
