import React, { useEffect } from 'react';

const Lightbox = ({ isOpen, onClose, currentImage, onNext, onPrev }) => {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            switch (e.key) {
                case 'Escape': onClose(); break;
                case 'ArrowRight': onNext(); break;
                case 'ArrowLeft': onPrev(); break;
                default: break;
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose, onNext, onPrev]);

    if (!isOpen || !currentImage) return null;

    return (
        <div className="lightbox active" id="lightbox" onClick={(e) => {
            if (e.target.id === 'lightbox') onClose();
        }}>
            <button className="lightbox-close" aria-label="Cerrar" onClick={onClose}>&times;</button>
            <button className="lightbox-prev" aria-label="Anterior" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6" />
                </svg>
            </button>
            <button className="lightbox-next" aria-label="Siguiente" onClick={(e) => { e.stopPropagation(); onNext(); }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6" />
                </svg>
            </button>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <img src={currentImage.src} alt={currentImage.alt} className="lightbox-image" />
                <p className="lightbox-caption">{currentImage.caption}</p>
            </div>
        </div>
    );
};

export default Lightbox;
