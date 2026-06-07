import React, { useState } from 'react';
import './LandingPage.css';

export default function LandingPage({ onEnter, onOpenEnvelope }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isReadyToTransition, setIsReadyToTransition] = useState(false);

  const handleOpenEnvelope = (e) => {
    e.stopPropagation(); // Prevent triggering background click-anywhere immediately
    if (isOpen) return;
    setIsOpen(true);
    
    // Play the music Pamungkas immediately
    if (onOpenEnvelope) {
      onOpenEnvelope();
    }

    // Set transition state to true after flap & letter slide animations are fully finished
    setTimeout(() => {
      setIsReadyToTransition(true);
    }, 1500); // 1.5s matches letter slide-up duration
  };

  const handleScreenClick = () => {
    if (isReadyToTransition) {
      onEnter();
    }
  };

  return (
    <div 
      className={`landing-container ${isReadyToTransition ? 'cursor-pointer-all' : ''}`}
      onClick={handleScreenClick}
    >
      {/* Envelope Wrapper (Fills 100% of the screen) */}
      <div className={`envelope-wrapper ${isOpen ? 'envelope-opened' : ''}`}>
        <div className="envelope">
          {/* 1. Top Flap */}
          <div className="envelope-flap"></div>

          {/* 2. Letter inside (Slides up to fill 100% screen) */}
          <div className="envelope-letter">
            <div className="letter-inner">
              <h2 className="letter-title">Jurnal Kisah Kita</h2>
              <div className="letter-divider"></div>
              <p className="letter-text">
                "Ada melodi indah yang terukir di setiap langkah yang kita lalui bersama. 
                Mari merayakan kebersamaan ini dalam jurnal kecil kenangan manis kita."
              </p>
              <span className="letter-signature">Dari Aku Untukmu, 🌹</span>
            </div>
          </div>

          {/* 3. Front pocket cover */}
          <div className="envelope-front"></div>

          {/* 4. Wax Seal Stamp (Flower Vector) */}
          <div className="wax-seal-container" onClick={handleOpenEnvelope}>
            <div className="wax-seal">
              <svg className="wax-seal-flower" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 10h-1a4 4 0 1 1 4-4v.534" />
                <path d="M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31" />
                <path d="M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2" />
                <path d="M9.77 12C4 15 2 22 2 22" />
                <circle cx="17" cy="8" r="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bouncing Prompt to click anywhere */}
      {isReadyToTransition && (
        <div className="transition-prompt-banner">
          Ketuk di mana saja untuk masuk ke Galeri Memori... 💌
        </div>
      )}
    </div>
  );
}
