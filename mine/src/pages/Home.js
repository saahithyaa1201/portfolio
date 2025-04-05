import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import animeGif from "../pics/anime.gif";
import speakeaseImg from "../pics/speakease.png";
import ticket from "../pics/ticket.jpg";
import education from "../pics/edu.jpg";
import volunteer from "../pics/volunteer.jpeg";
import wave from "../pics/wave.jpg";
import organic from "../pics/organic.jpeg";
import group from "../pics/gp1.png";
import minion from "../pics/minion.png";
import backgroundVideo from "../pics/blue.mp4"; 
import eyes from "../pics/eyes.png";
import purple from "../pics/purple.png";



// Image imports for gallery carousels
import iit1 from "../pics/gp1.png";
import iit2 from "../pics/gall2.png";
import iit3 from "../pics/gall5.png";
import iit4 from "../pics/gall3.png";

import stage1 from "../pics/sc.png";
import stage2 from "../pics/sc2.png";
import stage3 from "../pics/sc3.png";
import stage4 from "../pics/sc4.png";

import hlc1 from "../pics/hc1.png";
import hlc2 from "../pics/hc2.png";
import hlc3 from "../pics/hc3.png";
import hlc4 from "../pics/hc4.png";

import vol1 from "../pics/vol1.png";
import vol2 from "../pics/vol2.png";
import vol3 from "../pics/vol3.png";
import vol4 from "../pics/vol4.png";

// Skills data
const skills = [
  { name: "Java", percentage: 90 },
  { name: "Python", percentage: 80 },
  { name: "JavaScript", percentage: 85 },
  { name: "React", percentage: 75 },
  { name: "React Native", percentage: 70 },
  { name: "MySQL", percentage: 80 }
];

// Featured projects data
const featuredProjects = [
  {
    id: 1,
    title: "Speakease",
    description: "SpeakEase is a smart speaking practice app designed to help users, especially IELTS students, improve their English fluency with instant feedback, daily goals, and progress tracking.",
    image: speakeaseImg,
    link: "/projects/portfolio"
  },
  {
    id: 2,
    title: "Ticket-eta",
    description: " Pioneered a full-stack ticket booking system utilizing Java OOP, enabling real-time user interaction and CLI operations",
    image: ticket,
    link: "/projects/ecommerce"
  },
  {
    id: 3,
    title: "Edu-Track",
    description: "Designed a Java-based system to manage student records efficiently, allowing for adding, updating, and searching student data",
    image: education,
    link: "/projects/weather"
  }, 
  {
    id: 4,
    title: "Uprise",
    description: " Created a social impact platform that enables users to share medical needs, donate, and track contributions.",
    image: volunteer,
    link: "/projects/weather"
  },
  {
    id: 5,
    title: "OrganicCart",
    description: "Developed a responsive e-commerce platform for seamless health product purchases.",
    image: organic,
    link: "/projects/weather"
  },
  {
    id: 6,
    title: "Study Wave",
    description: "Designed a Figma-based mobile app prototype to help students stay motivated and connected.",
    image: wave,
    link: "/projects/weather"
  }
];

// Gallery categories with their images
const galleryCategories = [
  {
    id: 1,
    title: "IIT Foundation",
    images: [group, iit1, iit2, iit3, iit4]
  },
  {
    id: 2,
    title: "Stage Craft",
    images: [stage1, stage2, stage3, stage4]
  },
  {
    id: 3,
    title: "Hindu Ladies College",
    images: [hlc1, hlc2, hlc3, hlc4]
  },
  {
    id: 4,
    title: "Volunteerings",
    images: [volunteer, vol1, vol2, vol3, vol4]
  }
];

// Image Carousel Component
const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    // Set up the interval to change images every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div className="gallery-carousel">
      <img src={images[currentIndex]} alt={`${title} image ${currentIndex + 1}`} />
      <div className="gallery-overlay">
        <p>{title}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const [headerText, setHeaderText] = useState("");
  const [subText, setSubText] = useState("");
  const [isHeaderDone, setIsHeaderDone] = useState(false);
  const fullHeaderText = "Hello, I'm Saahithyaa";
  const fullSubText = "I'm seeking an internship, and I am an undergraduate student.";

  useEffect(() => {
    if (!isHeaderDone) {
      if (headerText.length < fullHeaderText.length) {
        const timeout = setTimeout(() => {
          setHeaderText(fullHeaderText.slice(0, headerText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsHeaderDone(true);
      }
    } else {
      if (subText.length < fullSubText.length) {
        const timeout = setTimeout(() => {
          setSubText(fullSubText.slice(0, subText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      }
    }
  }, [headerText, subText, isHeaderDone]);

  return (
    <div className="home-page">
      {/* Global Background Video that applies to the entire page */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container home-container">
          <div className="text-content">
            <h1 className="bold-text">
              {headerText}
              {headerText.length < fullHeaderText.length && (
                <span className="typing-cursor"></span>
              )}
            </h1>
            <p className="simple-text">
              {subText}
              {isHeaderDone && subText.length < fullSubText.length && (
                <span className="typing-cursor"></span>
              )}
            </p>
            <div className="cta-buttons">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
            </div>
          </div>
          <div className="image-container">
            <img src={animeGif} alt="Anime Character" className="anime-gif" />
          </div>
        </div>
      </div>
      // Modified About Section in Home component
<section className="about-section">
  <div className="container">
    <div className="about-background">
      <img src={eyes} alt="Background eyes" className="eyes-background" />
      <div className="about-content">
        <div className="about-image">
          <img src={minion} alt="Saahithyaa" className="profile-img" />
        </div>
        <div className="about-text">
          <h2 className="section-title" style={{ color: "#fff" }}>About Me</h2>
          <h3 style={{ color: "#fff" }}>Who am I?</h3>
          <p style={{ color: "#fff" }}>
            I'm Saahithyaa, an undergraduate student passionate about technology 
            and innovation. I specialize in web development, mobile app development, 
            and software engineering. I'm currently seeking internship opportunities 
            to apply my skills in a professional environment.
          </p>
          <p style={{ color: "#fff" }}>
            My journey in tech began with learning Java, and I've since expanded 
            my knowledge to include various programming languages and frameworks. 
            I enjoy solving complex problems and creating user-friendly applications.
          </p>
          <div className="about-buttons">
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <a href="#" className="btn btn-secondary">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section className="skills-section  purple-background">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            {skills.map(skill => (
              <div key={skill.name} className="skill-card">
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <p>{skill.percentage}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="projects-section purple-background">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-container">
            {featuredProjects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={project.link} className="project-link">View Project</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="projects-cta">
            <Link to="/projects" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="gallery-preview-section  purple-background">
        <div className="container">
          <h2 className="section-title">Gallery Highlights</h2>
          <div className="gallery-grid">
            {galleryCategories.map(category => (
              <div className="gallery-item" key={category.id}>
                <ImageCarousel 
                  images={category.images} 
                  title={category.title} 
                />
              </div>
            ))}
          </div>
          <div className="gallery-cta">
            <Link to="/gallery" className="btn btn-primary">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-content">
            <h2>Ready to work together?</h2>
            <p>Feel free to reach out if you're interested in working with me or have any questions.</p>
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;