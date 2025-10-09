import React, { useEffect, useState } from "react";
import "./CustomAlert.css";

interface AlertProps {
    type: "success" | "error";
    text: string;
    duration?: number;
    onClose?: () => void;
}

const CustomAlert: React.FC<AlertProps> = ({ type, text, duration = 3000, onClose }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(() => onClose && onClose(), 400);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={`custom-alert ${type} ${visible ? "active" : ""}`}>
            {text}
        </div>
    );
};

export default CustomAlert;
