interface HoverLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string;
    className?: string;
}

const HoverLink: React.FC<HoverLinkProps> = ({ text, className = "", ...props }) => {
    return (
        <a className={`c ${className}`} {...props} data-cursor-pointer>
            <div className='no-select'>{text}</div>
            <div className='no-select'>{text}</div>
            <div className='no-select'>{text}</div>
        </a>
    );
};

export default HoverLink;