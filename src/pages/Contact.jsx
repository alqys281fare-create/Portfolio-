import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { Container } from 'react-bootstrap';
import Particle from '../components/Particle';

const Contact = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, selectedImage]);

  const importAll = (r) => {
    return r.keys().map((item, index) => {
      const pathParts = item.replace('./', '').split('/');
      const fileName = pathParts[pathParts.length - 1];
      const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
      
      const category = pathParts.length > 1 ? pathParts[0] : 'uncategorized';
      
      return {
        id: index,
        src: r(item),
        alt: nameWithoutExt,
        title: nameWithoutExt.replace(/-/g, ' ').replace(/_/g, ' '),
        category: category,
        fileName: fileName
      };
    });
  };

  const galleryImages = importAll(
    require.context('/src/assets/myGallery', true, /\.(png|jpe?g|svg|gif|webp|png)$/)
  );

  // Get unique categories

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  // Open lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Navigate through images
  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="gallery-title">My Gallery</h1>
        
        

        {/* Image Grid */}
        {filteredImages.length > 0 ? (
          <div className="gallery-grid">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openLightbox(image)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
        ) : (
          <p className="no-images">No images found in this category</p>
        )}

        {/* Enhanced Lightbox Modal */}
        {isLightboxOpen && selectedImage && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                <span>×</span>
              </button>
              
              <button 
                className="lightbox-nav lightbox-prev" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                disabled={filteredImages.length <= 1}
              >
                <span>‹</span>
              </button>
              
              <div className="lightbox-image-container">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="lightbox-image"
                />
              </div>
              
              <button 
                className="lightbox-nav lightbox-next" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                disabled={filteredImages.length <= 1}
              >
                <span>›</span>
              </button>
              
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>Category: {selectedImage.category}</p>
                <p className="image-counter">
                  {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Container>
  );
};

export default Contact;