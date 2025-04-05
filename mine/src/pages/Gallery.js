import React from 'react';
import './Gallery.css';
import animeGif from "../pics/anime.gif";
import speakeaseImg from "../pics/speakease.png";
import group from "../pics/gp1.png";

// Gallery images - using the available images
const galleryImages = [
  {
    id: 1,
    src: group,
    alt: "Design Work Sample 1"
  },
  {
    id: 2,
    src: speakeaseImg,
    alt: "Design Work Sample 2"
  },
  {
    id: 3,
    src: animeGif,
    alt: "Programming Project 1"
  },
  {
    id: 4,
    src: speakeaseImg,
    alt: "Programming Project 2"
  },
  {
    id: 5,
    src: animeGif,
    alt: "UI/UX Design Mockup"
  },
  {
    id: 6,
    src: speakeaseImg,
    alt: "Mobile App Wireframe"
  }
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <div className="container">
          <h1 className="gallery-title">My Work Gallery</h1>
          <p className="gallery-subtitle">A collection of my design work and programming projects</p>
        </div>
      </div>
      
      <div className="container">
        <div className="gallery-filter">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Design</button>
          <button className="filter-btn">Programming</button>
          <button className="filter-btn">UI/UX</button>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div className="gallery-item" key={image.id}>
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <p>{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;