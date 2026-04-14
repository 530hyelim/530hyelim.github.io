import { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageGallery.css';

interface ImageGalleryProps {
    images: { src: string; alt: string }[];
    showCaption?: boolean;
}

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, showCaption = false }) => {
    const isMobile = useRef(window.innerWidth <= 768).current;
    const mainImgRef = useRef<HTMLImageElement>(null);
    const captionRef = useRef<HTMLParagraphElement>(null);
    const thumbRefs = useRef<(HTMLImageElement | null)[]>([]);

    const handleSelect = (i: number) => {
        // DOM 직접 업데이트로 리렌더 최소화
        if (mainImgRef.current) {
            mainImgRef.current.src = images[i].src;
            mainImgRef.current.alt = images[i].alt;
        }
        if (captionRef.current) {
            captionRef.current.textContent = `↓ ${images[i].alt}`;
        }
        thumbRefs.current.forEach((el, idx) => {
            if (!el) return;
            el.classList.toggle('active', idx === i);
        });
    };

    useEffect(() => {
        // 초기 active 썸네일 설정
        thumbRefs.current[0]?.classList.add('active');
    }, []);

    if (!isMobile) {
        return (
            <Slider {...sliderSettings}>
                {images.map((img, i) => (
                    <div key={i}>
                        {showCaption && <p style={{ textAlign: 'center' }}>↓ {img.alt}</p>}
                        <div className="image-box">
                            <img src={img.src} alt={img.alt} className="img" />
                        </div>
                    </div>
                ))}
            </Slider>
        );
    }

    return (
        <div className="ig-container">
            {showCaption && (
                <p ref={captionRef} style={{ textAlign: 'center', fontSize: '0.85rem', color: '#a0a0a0' }}>
                    ↓ {images[0].alt}
                </p>
            )}
            <div className="ig-main image-box">
                <img ref={mainImgRef} src={images[0].src} alt={images[0].alt} className="img" />
            </div>
            {images.length > 1 && (
                <div className="ig-thumbs">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            ref={(el) => { thumbRefs.current[i] = el; }}
                            src={img.src}
                            alt={img.alt}
                            className={`ig-thumb ${i === 0 ? 'active' : ''}`}
                            onTouchEnd={(e) => { e.preventDefault(); handleSelect(i); }}
                            onClick={() => handleSelect(i)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
