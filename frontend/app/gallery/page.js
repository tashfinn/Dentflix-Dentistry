"use client";
import styles from './gallery.module.css';

export default function Gallery() {
  const items = [
    { id: 1, type: "Before/After", label: "Smile Makeover" },
    { id: 2, type: "Clinic", label: "Reception Area" },
    { id: 3, type: "Clinic", label: "Treatment Room 1" },
    { id: 4, type: "Before/After", label: "Teeth Whitening" },
    { id: 5, type: "Technology", label: "3D X-Ray Scanner" },
    { id: 6, type: "Before/After", label: "Orthodontics" },
    { id: 7, type: "Clinic", label: "Waiting Lounge" },
    { id: 8, type: "Technology", label: "Laser Equipment" },
  ];

  return (
    <div className={styles.container}>
      <section className={`${styles.header} animate-fade-in`}>
        <h1>Our Gallery</h1>
        <p>Take a tour of our modern clinic and see the amazing transformations.</p>
      </section>

      <section className={styles.galleryGrid}>
        {items.map(item => (
          <div key={item.id} className={styles.galleryItem}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.icon}>📷</span>
            </div>
            <div className={styles.overlay}>
              <span className={styles.tag}>{item.type}</span>
              <h3>{item.label}</h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
