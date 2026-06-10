import React, { useState } from "react";
import "./Projects.css";
import video1 from "../../images/video1.mp4";
import video2 from "../../images/video2.mp4";

import imageedt from "../../images/image_editor.jpg";
import portfolio from "../../images/portfolio.png";

import land1 from "../../images/landinp1.png";
import land2 from "../../images/landp2.png";
import land3 from "../../images/landing page.png";
import land4 from "../../images/landp3.png";

import cur1 from "../../images/onlinePl.jpg";
import cur2 from "../../images/onlinShop1.jpg";
import cur3 from "../../images/onlinShop2.jpg";

import seg from "../../images/customer_segmentation.png";
import flower from "../../images/flower_classification.png";
import house from "../../images/house_price.png";

import humainModel from "../../images/humanModel.png";
import nameDetect from "../../images/namedetect2.png";

import ragImg from "../../images/rag_chatbot.png";
import recSysImg from "../../images/recommendation_system.png";
import faceEmotionImg from "../../images/face_emotion.png";

import vipcourse from "../../images/vip course.png";
import cybercourse from "../../images/cybersecu.png";
import course  from "../../images/course.png";

import algogame from "../../images/algoquest.png";
import cybergame from "../../images/cybergame.png";

// ============================================================
// Front-End Projects — لم يتغير شيء
// ============================================================
const frontEndProjects = {
  bigReact: [
    { id: 1, title: "React Online Store", type: "video", src: video1, link: "#" },
    { id: 2, title: "React Educational Platform", type: "video", src: video2, link: "#" },
  ],
  htmlProjects: [
    { id: 6, title: "Image Editor", type: "image", src: imageedt, link: "https://souacihadil.github.io/image-effect/" },
    { id: 7, title: "Portfolio", type: "image", src: portfolio, link: "https://souacihadil.github.io/portfolio/" },
    { id: 8, title: "Landing Page", type: "image", src: land2, link: "https://souacihadil.github.io/Informational-website-for-a-car-agency/" },
    { id: 9, title: "Landing Page", type: "image", src: land3, link: "https://souacihadil.github.io/Girls-Tech-Club/" },
    { id: 10, title: "Landing Page", type: "image", src: land4, link: "https://souacihadil.github.io/universal-landing-page/" },
    { id: 11, title: "Landing Page", type: "image", src: land1, link: "https://souacihadil.github.io/landing-page/" },
  ],
  longScreenshots: [
    { id: 12, title: "Online Platforme", src: cur1 },
    { id: 13, title: "Online shop Store", src: cur2 },
    { id: 14, title: "Online shop Store", src: cur3 },
  ]
};

// ============================================================
// AI Projects
// ============================================================
const aiProjects = {
  deepLearning: [],

  machineLearning: [
    {
      id: 201,
      title: "Customer Segmentation",
      src: seg,
      tags: ["Scikit-learn", "KMeans"],
      link: "https://colab.research.google.com/drive/1EYaJpvjZzF-4hZbzl5wrQqfUuIxB05ef#scrollTo=CtZOLchZosD7"
    },
    {
      id: 202,
      title: "Flower Classification",
      src: flower,
      tags: ["SVM", "Iris"],
      link: "https://colab.research.google.com/drive/1yhYlKAaah4AQ1ynP9JA7VEkf_PGT50q3?usp=sharing"
    },
    {
      id: 203,
      title: "House Price Detection",
      src: house,
      tags: ["Regression", "Pandas"],
      link: "https://colab.research.google.com/drive/1-dJ34dMrMzRM06RM4OVybjQOrnMXX4_b?usp=sharing"
    },
  ],

  computerVision: [
    {
      id: 301,
      title: "Transfer 2D Image to 3D Model",
      src: humainModel,
      description: "Reconstructs a 3D point cloud from a single RGB image using depth prediction.",
      tags: ["Python", "OpenCV", "Depth Est."],
      demoLink: "https://vimeo.com/1187252840?share=copy&fl=sv&fe=ci",
    },
    {
      id: 302,
      title: "Face Emotion Detector",
      src: faceEmotionImg,
      description: "Real-time recognition across 7 classes using CNN with webcam and live confidence display.",
      tags: ["TensorFlow", "CNN", "Real-time"],
      demoLink: "https://vimeo.com/1187242143?share=copy&fl=sv&fe=ci",
    },
    {
      id: 303,
      title: "Image Name Detection",
      src: nameDetect,
      description: "Automatically detects and extracts names from images using pre-trained OCR and object detection.",
      tags: ["Python", "OCR", "OpenCV"],
      demoLink: "#",
    },
  ],

  nlpSystems: [
    {
      id: 401,
      title: "RAG Chatbot System",
      src: ragImg,
      description: "Upload a PDF and chat with it in real time using retrieval-augmented generation.",
      tags: ["LangChain", "FAISS", "RAG"],
      demoLink: "https://vimeo.com/1187240383?share=copy&fl=sv&fe=ci",
    },
    {
      id: 402,
      title: "Educational Recommendation System",
      src: recSysImg,
      description: "Personalized course recommender adapts to learner profile and performance history.",
      tags: ["Scikit-learn", "Collab. filtering"],
      demoLink: "https://vimeo.com/1187240983?share=copy&fl=sv&fe=ci",
    },
  ],
};

// ============================================================
// Teaching Projects — لم يتغير شيء
// ============================================================
const teachingProjects = {
  courses: [
    { id: 401, title: "VIP Courses", type: "image", src: vipcourse, description: "Exclusive VIP courses with personalized learning experience and direct mentorship" },
    { id: 402, title: "Kids' Courses", type: "image", src: cybercourse, description: "Fun and interactive programming courses designed specially for kids to learn coding through games and activities" },
    { id: 403, title: "Adult's Courses", type: "image", src: course, description: "Comprehensive programming courses for adults covering web development, Python and AI from beginner to advanced level" },
  ],
  kidsGames: [
    { id: 501, title: "Variables Game", type: "image", src: algogame, link: "https://algoquest-chi.vercel.app/" },
    { id: 502, title: "Loops Game", type: "image", src: cybergame, link: "https://cyber-game-lake.vercel.app/" },
  ],
};

// ============================================================
// ProjectsGrid — لم يتغير شيء
// ============================================================
const ProjectsGrid = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <div className="coming-soon-badge"> Coming Soon</div>
      </div>
    );
  }
  return (
    <div className="projects-grid html-grid">
      {projects.map((proj, index) => (
        <div key={proj.id} className="project-card glass-card" style={{ animationDelay: `${0.1 * index}s` }}>
          <div className="image-container">
            {proj.type === "video" ? (
              <video controls muted loop playsInline className="project-media">
                <source src={proj.src} type="video/mp4" />
              </video>
            ) : (
              <img src={proj.src} alt={proj.title} className="project-media" />
            )}
          </div>
          <div className="card-content">
            <h3 className="card-title white">{proj.title}</h3>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="view-button small">
              View
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

// ============================================================
// AICard — بطاقة مع صورة + play button + info
// ============================================================
const AICard = ({ project }) => (
  <div className="ai-card">
    <div className="ai-card-thumb">
      <img src={project.src} alt={project.title} className="ai-thumb-img" />
      <div className="ai-thumb-overlay">
        <div className="ai-play-btn">
          <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="ai-play-label">Vimeo demo</span>
      </div>
    </div>
    <div className="ai-card-info">
      <h3 className="ai-card-title">{project.title}</h3>
      <p className="ai-card-desc">{project.description}</p>
      <div className="ai-card-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="ai-tag">{tag}</span>
        ))}
      </div>
      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="ai-view-btn">
        View ↗
      </a>
    </div>
  </div>
);

// ============================================================
// MLCard — بطاقة Machine Learning مع صورة + tags + View
// ============================================================
const MLCard = ({ project }) => (
  <div className="ml-card">
    <div className="ml-card-thumb">
      <img src={project.src} alt={project.title} className="ml-thumb-img" />
    </div>
    <div className="ml-card-info">
      <h3 className="ml-card-title">{project.title}</h3>
      <div className="ai-card-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="ai-tag">{tag}</span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="ai-view-btn">
        View ↗
      </a>
    </div>
  </div>
);

// ============================================================
// Main Component
// ============================================================
const Projects = ({ id = "projects" }) => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div id={id} className="projects-page">
      <div className="max-w-7xl mx-auto">

        {/* Header — لم يتغير */}
        <div className="page-header">
          <div className="about-title">
            <h1 className="about-main">
              MY <span>PROJECTS</span>
            </h1>
            <div className="underline"></div>
          </div>
        </div>

        {/* Filter Tabs — لم يتغير */}
        <div className="filter-tabs-container">
          <button className={`filter-tab ${activeTab === "frontend" ? "active" : ""}`} onClick={() => setActiveTab("frontend")}>
            Front-End Projects
          </button>
          <button className={`filter-tab ${activeTab === "ai" ? "active" : ""}`} onClick={() => setActiveTab("ai")}>
            AI Projects
          </button>
          <button className={`filter-tab ${activeTab === "teaching" ? "active" : ""}`} onClick={() => setActiveTab("teaching")}>
            Teaching Projects
          </button>
        </div>

        <div className="projects-content">

          {/* ── Frontend — لم يتغير شيء ── */}
          {activeTab === "frontend" && (
            <div className="tab-content fade-in">
              <div className="section-container">
                <h2 className="section-title">
                  <span className="title-line"></span>
                  Big React Projects
                </h2>
                <div className="projects-grid big-grid">
                  {frontEndProjects.bigReact.map((proj, index) => (
                    <div key={proj.id} style={{ animationDelay: `${0.1 * index}s` }}>
                      {proj.type === "video" && (
                        <video controls muted loop playsInline className="project-media"
                          style={{ borderRadius: "16px", width: "100%", maxHeight: "400px", objectFit: "cover" }}>
                          <source src={proj.src} type="video/mp4" />
                        </video>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-container">
                <h2 className="section-title">
                  <span className="title-line purple"></span>
                  HTML / CSS / JS Projects
                </h2>
                <ProjectsGrid projects={frontEndProjects.htmlProjects} />
              </div>

              <div className="long-screenshots-grid">
                <div className="scrolling-wrapper">
                  {[...frontEndProjects.longScreenshots, ...frontEndProjects.longScreenshots].map((proj, i) => (
                    <div key={i} className="long-image-container">
                      <img src={proj.src} alt={proj.title} className="long-image" />
                      <div className="long-image-overlay">
                        <h3 className="overlay-title">{proj.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── AI Projects — التغييرات هنا فقط ── */}
          {activeTab === "ai" && (
            <div className="tab-content fade-in">

              {/* CATEGORY 01 — Computer Vision & 3D */}
              <div className="ai-category">
                <div className="ai-category-header">
                  <span className="ai-cat-label">CATEGORY 01</span>
                  <h2 className="ai-cat-title">Computer Vision & 3D</h2>
                </div>
                <div className="ai-cards-row">
                  {aiProjects.computerVision.map((proj) => (
                    <AICard key={proj.id} project={proj} />
                  ))}
                </div>
              </div>

              {/* CATEGORY 02 — NLP & AI Systems */}
              <div className="ai-category">
                <div className="ai-category-header">
                  <span className="ai-cat-label">CATEGORY 02</span>
                  <h2 className="ai-cat-title">NLP & AI Systems</h2>
                </div>
                <div className="ai-cards-row">
                  {aiProjects.nlpSystems.map((proj) => (
                    <AICard key={proj.id} project={proj} />
                  ))}
                </div>
              </div>

              {/* CATEGORY 03 — Machine Learning */}
              <div className="ai-category">
                <div className="ai-category-header">
                  <span className="ai-cat-label">CATEGORY 03</span>
                  <h2 className="ai-cat-title">Machine Learning</h2>
                </div>
                <div className="ml-cards-row">
                  {aiProjects.machineLearning.map((proj) => (
                    <MLCard key={proj.id} project={proj} />
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ── Teaching — لم يتغير شيء ── */}
          {activeTab === "teaching" && (
            <div className="tab-content fade-in">
              <div className="section-container">
                <h2 className="section-title">
                  <span className="title-line purple"></span>
                  Programming Courses
                </h2>
                <ProjectsGrid projects={teachingProjects.courses} />
              </div>
              <div className="section-container">
                <h2 className="section-title">
                  <span className="title-line"></span>
                  Kids Programming Games
                </h2>
                <ProjectsGrid projects={teachingProjects.kidsGames} />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Projects;