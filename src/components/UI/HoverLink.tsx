import './HoverLink.css';

interface HoverLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    text: string;
    className?: string;
    offset?: number;
};

const HoverLink: React.FC<HoverLinkProps> = ({ href, text, className, offset = 80 }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset; // 헤더 높이만큼 보정
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`hover-link ${className || ''}`}
            data-cursor-pointer
        >
            <div>{text}</div>
            <div>{text}</div>
            <div>{text}</div>
        </a>
    );
};

export default HoverLink;
