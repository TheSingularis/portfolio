import React, { useState, useEffect } from 'react';
import { loadProjectImages } from '../utils/imageLoader';

const ImageCarousel = ({ project, className = '' }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      try {
        const projectImages = await loadProjectImages(project);
        setImages(projectImages);
      } catch (error) {
        console.error('Error loading project images:', error);
        setImages([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [project]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  if (isLoading) {
    return (
      <div className={`image-carousel loading ${className}`}>
        <div className="carousel-loading">Loading images...</div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className={`image-carousel empty ${className}`}>
        <div className="carousel-empty">No images available</div>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={`image-carousel single-image ${className}`}>
        <div className="carousel-main-image">
          <img 
            src={images[0]} 
            alt={`${project.title} screenshot`}
            className="carousel-image"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`image-carousel ${className}`}>
      <div className="carousel-main">
        <div className="carousel-main-image">
          <img 
            src={images[currentIndex]} 
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            className="carousel-image"
          />
          
          {/* Navigation arrows */}
          <button 
            className="carousel-nav carousel-nav-prev"
            onClick={prevImage}
            aria-label="Previous image"
          >
            &#8249;
          </button>
          <button 
            className="carousel-nav carousel-nav-next"
            onClick={nextImage}
            aria-label="Next image"
          >
            &#8250;
          </button>
          
          {/* Image counter */}
          <div className="carousel-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="carousel-thumbnails">
        {images.map((image, index) => (
          <button
            key={index}
            className={`carousel-thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
            aria-label={`Go to image ${index + 1}`}
          >
            <img 
              src={image} 
              alt={`${project.title} thumbnail ${index + 1}`}
              className="thumbnail-image"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
