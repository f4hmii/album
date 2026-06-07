import React, { useState, useEffect } from 'react';
import Masonry from './Masonry';
import './MainAlbum.css';

const MEMORIES = [
  {
    id: 1,
    category: 'special-moments',
    categoryLabel: 'Momen Spesial',
    title: 'Senyuman Hangatmu',
    date: '12 Oktober 2024',
    image: '/images/869423_1774366778826.jpeg',
    note: 'Senyum yang selalu menjadi alasan utamaku untuk terus bersemangat menjalani hari-hari.',
    height: 700
  },
  {
    id: 2,
    category: 'first-meet',
    categoryLabel: 'Pertama Bertemu',
    title: 'Tatap Mata Teduh',
    date: '15 Oktober 2024',
    image: '/images/869423_1774366780395.jpeg',
    note: 'Di setiap tatapan matamu, aku menemukan kedamaian yang selama ini kucari.',
    height: 520
  },
  {
    id: 3,
    category: 'first-date',
    categoryLabel: 'Kencan Pertama',
    title: 'Bersanding Bersama',
    date: '28 Maret 2025',
    image: '/images/WhatsApp Image 2026-03-28 at 21.43.57.jpeg',
    note: 'Momen manis saat kita menikmati sore yang indah bersama sambil merencanakan masa depan.',
    height: 800
  },
  {
    id: 4,
    category: 'special-moments',
    categoryLabel: 'Momen Spesial',
    title: 'Tawa Lepas Kita',
    date: '29 Maret 2025',
    image: '/images/WhatsApp Image 2026-03-28 at 21.43.57 (1).jpeg',
    note: 'Canda gurau sederhana yang selalu terasa istimewa saat dihabiskan bersama dirimu.',
    height: 600
  },
  {
    id: 5,
    category: 'special-moments',
    categoryLabel: 'Momen Spesial',
    title: 'Genggaman Erat',
    date: '30 Maret 2025',
    image: '/images/WhatsApp Image 2026-03-28 at 21.43.57 (2).jpeg',
    note: 'Jemari kita yang saling menguatkan, membuktikan bahwa kita siap melalui segalanya bersama.',
    height: 750
  },
  {
    id: 6,
    category: 'first-date',
    categoryLabel: 'Kencan Pertama',
    title: 'Menyusuri Jalan Sunyi',
    date: '5 April 2025',
    image: '/images/WhatsApp Image 2026-03-28 at 21.44.26.jpeg',
    note: 'Setiap sudut jalan terasa penuh warna ketika aku melangkah berdampingan denganmu.',
    height: 580
  },
  {
    id: 7,
    category: 'special-moments',
    categoryLabel: 'Momen Spesial',
    title: 'Momen Indah Berdua',
    date: '12 April 2025',
    image: '/images/WhatsApp Image 2026-03-28 at 22.22.29.jpeg',
    note: 'Kenangan manis yang terukir indah, takkan pernah pudar oleh berjalannya waktu.',
    height: 920
  },
  {
    id: 8,
    category: 'special-moments',
    categoryLabel: 'Momen Spesial',
    title: 'Keindahan Alam Bersamamu',
    date: '20 Mei 2025',
    image: '/images/photo-1.jpg',
    note: 'Menikmati udara segar pegunungan dan panorama hijau yang menenangkan hati kita.',
    height: 680
  },
  {
    id: 9,
    category: 'first-date',
    categoryLabel: 'Kencan Pertama',
    title: 'Cahaya Sore Hari',
    date: '22 Mei 2025',
    image: '/images/photo-2.jpg',
    note: 'Sinar matahari senja menyinari wajahmu, membuat momen ini terasa begitu magis.',
    height: 820
  },
  {
    id: 10,
    category: 'special-moments',
    categoryLabel: 'Momen Spesial',
    title: 'Petualangan Baru',
    date: '25 Mei 2025',
    image: '/images/photo-3.jpg',
    note: 'Langkah demi langkah petualangan kita yang selalu dipenuhi dengan tawa gembira.',
    height: 540
  },
  {
    id: 11,
    category: 'special-moments',
    categoryLabel: 'Momen Spesial',
    title: 'Sesi Foto Favorit',
    date: '1 Juni 2025',
    image: '/images/couple_hero.png',
    note: 'Foto profil kenangan kita yang selalu menjadi favorit karena memancarkan kebahagiaan sejati.',
    height: 790
  },
  {
    id: 12,
    category: 'special-moments',
    categoryLabel: 'Momen Spesial',
    title: 'Latar Belakang Impian',
    date: '5 Juni 2025',
    image: '/images/landing_bg.png',
    note: 'Sebuah sudut estetik yang mengingatkan kita pada keindahan tempat kencan impian kita.',
    height: 630
  },
  {
    id: 13,
    category: 'first-meet',
    categoryLabel: 'Pertama Bertemu',
    title: 'Merenda Cerita Kita',
    date: '10 Juni 2025',
    image: '/images/WhatsApp Image 2026-03-28 at 21.43.57.jpeg',
    note: 'Bercerita tanpa henti tentang mimpi-mimpi masa kecil dan rencana masa depan kita.',
    height: 710
  },
  {
    id: 14,
    category: 'special-moments',
    categoryLabel: 'Momen Spesial',
    title: 'Senyuman Termisra',
    date: '15 Juni 2025',
    image: '/images/WhatsApp Image 2026-03-28 at 21.43.57 (1).jpeg',
    note: 'Setiap kali kamu tersenyum lepas seperti ini, seluruh duniaku ikut tersenyum.',
    height: 590
  },
  {
    id: 15,
    category: 'special-moments',
    categoryLabel: 'Momen Spesial',
    title: 'Menggenggam Harapan',
    date: '20 Juni 2025',
    image: '/images/WhatsApp Image 2026-03-28 at 21.43.57 (2).jpeg',
    note: 'Genggaman hangat yang meyakinkanku bahwa kamu adalah pelabuhan terakhir hatiku.',
    height: 880
  },
  {
    id: 16,
    category: 'first-date',
    categoryLabel: 'Kencan Pertama',
    title: 'Kencan Sore Hari',
    date: '25 Juni 2025',
    image: '/images/WhatsApp Image 2026-03-28 at 21.44.26.jpeg',
    note: 'Berjalan berdua menikmati sejuknya angin sore, mengukir memori indah baru.',
    height: 660
  },
  {
    id: 17,
    category: 'special-moments',
    categoryLabel: 'Momen Spesial',
    title: 'Detik-Detik Berharga',
    date: '30 Juni 2025',
    image: '/images/WhatsApp Image 2026-03-28 at 22.22.29.jpeg',
    note: 'Waktu seakan berhenti ketika kita menghabiskan waktu bersama tanpa peduli dunia sekitar.',
    height: 740
  },
  {
    id: 18,
    category: 'first-date',
    categoryLabel: 'Kencan Pertama',
    title: 'Piknik Santai Sore',
    date: '5 Juli 2025',
    image: '/images/photo-1.jpg',
    note: 'Piknik sederhana di taman yang hijau sembari menikmati bekal buatanmu yang lezat.',
    height: 800
  },
  {
    id: 19,
    category: 'first-date',
    categoryLabel: 'Kencan Pertama',
    title: 'Kilau Senja Romantis',
    date: '10 Juli 2025',
    image: '/images/photo-2.jpg',
    note: 'Langit sore yang merona merah jingga menjadi latar terindah bagi kisah cinta kita.',
    height: 570
  },
  {
    id: 20,
    category: 'special-moments',
    categoryLabel: 'Momen Spesial',
    title: 'Langkah Bersama',
    date: '15 Juli 2025',
    image: '/images/photo-3.jpg',
    note: 'Terus melangkah beriringan menuju hari esok yang penuh dengan harapan dan kebahagiaan.',
    height: 900
  }
];

export default function MainAlbum() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem('romantic-gallery-likes');
    if (saved) return JSON.parse(saved);
    const defaultLikes = {};
    for (let i = 1; i <= 20; i++) {
      defaultLikes[i] = 0;
    }
    return defaultLikes;
  });
  const [petals, setPetals] = useState([]);

  // Load rose petals on mount
  useEffect(() => {
    const generatedPetals = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 12 + 10}px`,
      delay: `${Math.random() * 12}s`,
      duration: `${Math.random() * 10 + 8}s`,
    }));
    setPetals(generatedPetals);
  }, []);

  const handleLike = (id, e) => {
    e.stopPropagation();
    const numericId = Number(id);
    const updated = {
      ...likes,
      [numericId]: (likes[numericId] || 0) + 1
    };
    setLikes(updated);
    localStorage.setItem('romantic-gallery-likes', JSON.stringify(updated));

    // Create a floating mini heart on click
    const heartPop = document.createElement('span');
    heartPop.className = 'click-heart-pop';
    heartPop.innerHTML = '❤️';
    heartPop.style.left = `${e.clientX}px`;
    heartPop.style.top = `${e.clientY}px`;
    document.body.appendChild(heartPop);
    setTimeout(() => heartPop.remove(), 1000);
  };

  // Map to the format needed by the Masonry component
  const masonryItems = MEMORIES.map(photo => ({
    id: String(photo.id),
    img: photo.image,
    url: '', // handled via onItemClick
    height: photo.height,
    ...photo
  }));

  return (
    <div className="album-container">
      {/* Aurora Mesh Background */}
      <div className="aurora-container">
        <div className="aurora-glow aurora-1"></div>
        <div className="aurora-glow aurora-2"></div>
        <div className="aurora-glow aurora-3"></div>
      </div>

      {/* Falling Rose Petals */}
      <div className="rose-petals-container">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="petal"
            style={{
              left: petal.left,
              width: petal.size,
              height: petal.size,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="album-hero animate-fade-in">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="album-pretitle">Kisah Perjalanan Kita</span>
          <h1 className="album-title">Album Kenangan Romantis</h1>
          <div className="header-divider">
            <svg className="divider-heart" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <p className="album-subtitle">
            Kumpulan momen-momen terindah perjalanan cinta kita. Dirajut bersama dalam untaian foto kenangan yang akan selalu abadi.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <main className="gallery-section animate-fade-in delay-2">
        <h2 className="gallery-section-title">Galeri Memori</h2>
        <div className="gallery-masonry-wrapper">
          {masonryItems.length > 0 ? (
            <Masonry
              items={masonryItems}
              onItemClick={(item) => setSelectedPhoto(item)}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          ) : (
            <div className="empty-memories">Tidak ada kenangan yang tersedia.</div>
          )}
        </div>
      </main>

      {/* Lightbox / Modal */}
      {selectedPhoto && (
        <section className="lightbox-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedPhoto(null)} aria-label="Tutup">
              &times;
            </button>
            <div className="lightbox-layout">
              <div className="lightbox-image-wrapper">
                <img src={selectedPhoto.image} alt={selectedPhoto.title} />
              </div>
              <div className="lightbox-details">
                <span className="lightbox-category">{selectedPhoto.categoryLabel}</span>
                <span className="lightbox-date">{selectedPhoto.date}</span>
                <h2 className="lightbox-title">{selectedPhoto.title}</h2>
                <div className="lightbox-divider"></div>
                <p className="lightbox-note">"{selectedPhoto.note}"</p>
                
                <div className="lightbox-actions">
                  <button 
                    className="bento-like-btn large-like" 
                    onClick={(e) => handleLike(selectedPhoto.id, e)}
                  >
                    <span>Kirim Cinta ❤️</span>
                    <span className="like-count">{likes[Number(selectedPhoto.id)] || 0}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
