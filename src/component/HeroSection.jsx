import React from 'react';
import "./hero.css";

function HeroSection() {
  return (
    <div className="hero">
      {/* Content Section */}
      <div className="hero-content">
        <h2>100 Thousand Songs, ad-free</h2>
        <h2>Over thousands podcast episodes</h2>
      </div>

      {/* Image Section */}
      <div className="hero-img">
        <img 
          src={require("../assets/vibrating-headphone.png")}
          alt="Hero Section" 
          className="responsive-img"
          width={"212px"}
          height={"212px"}
        />
      </div>
    </div>
  )
}

export default HeroSection