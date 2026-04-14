import { useState, useRef } from 'react';
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
    const [active, setActive] = useState(0);

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
                <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#a0a0a0' }}>
                    ↓ {images[active].alt}
                </p>
            )}
            <img
                    src={images[active].src}
                    alt={images[active].alt}
                    className="ig-main-img img"
                />
            {images.length > 1 && (
                <div className="ig-thumbs">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            className={`ig-thumb ${i === active ? 'active' : ''}`}
                            onMouseEnter={() => setActive(i)}
                            onClick={() => setActive(i)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
