import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'; 

export default function HomePage() {
const [currentImageIndex, setCurrentImageIndex ] = useState(0);
const images = ['kirin.jpg', 'skeleton.jpg', 'angel.JPG', 'prophet.jpg', ];
const location = useLocation();

console.log("Location:", location)

const handleNextImage = () => {
  setCurrentImageIndex((prevIndex)=> (prevIndex + 1) % images.length);
}

const handlePrevImage = () => {
  setCurrentImageIndex((prevIndex) =>(prevIndex - 1 + images.length) % images.length);
}

useEffect (() => {
    window.scrollTo(0, 0);
 }, [location.pathname]);

return (
  <div className="home-page">
  <div className='home-row'>
  <div className='home-container'>
  <div className="video-container">
    <video className="landingpage-image" autoPlay muted width="100%" height="100%" loop playsInline controls={false}>
      <source src='/videos/intro.mp4' type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div className="content">
    <h1 className="landingpage-title">SOLISPHERE</h1>
    <p className="tagline">Illuminating Shadows</p>
  </div>
  </div>
</div>
  <div className="featured-art-content">
    <div className="featured-art-container">
    <div className="featured-work-title">
    <h2 className="rotate-text">Featured Work</h2>
    </div>
    <div className="mini-gallery">
      <div className="mini-gallery-img">
      <img src = {`/images/${images[currentImageIndex]}`} alt= {`Artwork ${currentImageIndex + 1}`} />
      </div>
      <div className="featured-art-icon-row">
      <FontAwesomeIcon icon={faCircleChevronLeft} onClick={handlePrevImage} className="prev" />
      <FontAwesomeIcon icon={faCircleChevronRight} onClick={handleNextImage} className="next"/>
      </div>
    </div>
    </div>
    <div className="detailed-bio">
    <section className="rect-home-container">
            <section className="rect-1"></section>
            <section className="rect-2"></section>
            </section>
    <h2>THE VISION</h2>
    <p>Welcome to the realm of SOLISPHERE, curated and programmed by Daniel Nelson. Fusing software engineering, art, and design, I've crafted this space to showcase a diverse array of my creations, ranging from websites to paintings. Each piece delves into existential themes—absurdism, nihilism, and existentialism—inviting you to explore the intricate interplay of the human experience.   
 </p>
    <div className="home-button-row">
    <button className="home-about-button"> 
    <Link to="/about" className="home-about-link">Learn More</Link> 
    </button>
    <button className="explore-gallery-button"> 
      <Link to='/archive?page=1' className="explore-gallery-link">Explore Archive</Link>
    </button>
    </div>
    </div>
  </div>
</div>
  )
  
}
