/* eslint-disable */

"use client";


import React from "react";

interface HomePageProps {
  onContactClick: () => void;
}

export default function HomePage({ onContactClick }: HomePageProps) {
  return (
    <>
      <header className="hero-overlay">
        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://cdn.prod.website-files.com/6137ced70371b3cf7b45167d/6144beedeba1971e7ed26787_OCT-Cell-Motion-1-poster-00001.jpg"
          >
            <source
              src="https://cdn.prod.website-files.com/6137ced70371b3cf7b45167d/6144beedeba1971e7ed26787_OCT-Cell-Motion-1-transcode.mp4"
              type="video/mp4"
            />
            <source
              src="https://cdn.prod.website-files.com/6137ced70371b3cf7b45167d/6144beedeba1971e7ed26787_OCT-Cell-Motion-1-transcode.webm"
              type="video/webm"
            />
          </video>
        </div>
        <div className="content">
          <div className="home-hero-h2 h2">
            <h1>Transform Your Business with Cutting-Edge IT Solutions</h1>
          </div>
          <span className="heading_caps-lg new-universe">
            Varenya Inc provides expert IT consulting, AI-driven solutions, cloud transformations, and cybersecurity services to accelerate your business growth.
          </span>
        </div>
      </header>

      <style jsx>{`
                .hero-overlay {
                  position: relative;
                  height: 800px; /* Increased height from 500px to 700px */
                  overflow: hidden;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: var(--royal-blue);
                }
                .video-container {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  z-index: 1;
                }
                .video-container video {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
                .content {
                  position: relative;
                  z-index: 2;
                  text-align: center;
                  color: #fff;
                }
                .home-hero-h2 {
                  letter-spacing: .25em;
                }
                .heading_caps-lg.new-universe {
                  letter-spacing: .004em;
                }
                .h2 {
                  text-transform: uppercase;
                  margin-top: 20px;
                  margin-bottom: 20px;
                  font-family: Overpass, sans-serif;
                  font-size: 47px;
                  font-weight: 700;
                  line-height: 51px;
                }
            `}</style>
    </>
  );
}
