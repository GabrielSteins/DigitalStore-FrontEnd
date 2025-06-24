import React, { useState } from 'react';
import arrowright from '../Assets/arrowright.svg';
import arrowleft from '../Assets/arrowleft.svg';

interface GalleryProps {
  images: { src: string }[];
  width?: string;
  height?: string;
  radius?: string;
  showThumbs?: boolean;
  className?: string;
}

export default function Gallery({
  images,
  width = '100%',
  height = '500px',
  radius = '8px',
  showThumbs = false,
  className = '',
}: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`${className}`} style={{ width }}>
      
      <div
        className="relative overflow-hidden"
        style={{ width, height, borderRadius: radius }}
      >
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          style={{ borderRadius: radius }}
        />
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          }`}
        >
          <img src={arrowleft} alt="Anterior" />
        </button>
        <button
          onClick={goToNext}
          disabled={currentIndex === images.length - 1}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
            currentIndex === images.length - 1
              ? 'opacity-50 cursor-not-allowed'
              : 'opacity-100'
          }`}
        >
          <img src={arrowright} alt="Próximo" />
        </button>
      </div>

      {showThumbs && (
        <div className="flex gap-4 mt-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => selectImage(index)}
              className={`w-[117px] h-[95px] object-cover cursor-pointer ${
                index === currentIndex ? 'border-2 border-[#C92071]' : 'border'
              }`}
              style={{ borderRadius: radius }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
