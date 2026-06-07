import React, { useState, useRef } from 'react';
import LandingPage from './components/LandingPage';
import MainAlbum from './components/MainAlbum';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' | 'album'
  const [isPlaying, setIsPlaying] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  
  const audioRef = useRef(null);

  // Triggers audio playback immediately when envelope stamp is clicked
  const handleOpenEnvelope = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay ditolak browser, musik akan dimainkan setelah interaksi lanjutan: ", err);
        });
    }
  };

  // Triggers visual page transition (fade out wrapper) to enter main album
  const handleEnterAlbum = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage('album');
      setTransitioning(false);
    }, 800); // matches the CSS transition delay
  };

  const handleAudioError = () => {
    console.warn("Berkas audio lokal '/Pamungkas.mp3' tidak ditemukan. Menggunakan musik instrumental alternatif sebagai cadangan...");
    if (audioRef.current) {
      audioRef.current.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';
      audioRef.current.load();
      if (isPlaying || currentPage === 'album') {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.log("Gagal memutar musik cadangan:", err));
      }
    }
  };

  return (
    <div className={`app-wrapper ${transitioning ? 'page-transitioning' : ''}`}>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="/Pamungkas.mp3"
        loop
        onError={handleAudioError}
        style={{ display: 'none' }}
      />

      {currentPage === 'landing' ? (
        <LandingPage onEnter={handleEnterAlbum} onOpenEnvelope={handleOpenEnvelope} />
      ) : (
        <>
          <MainAlbum />
          <MusicPlayer 
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying} 
            audioRef={audioRef} 
          />
        </>
      )}
    </div>
  );
}
