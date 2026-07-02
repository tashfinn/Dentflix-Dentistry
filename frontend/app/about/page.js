"use client";
import styles from './about.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.container}>
      <section className={`${styles.hero} animate-fade-in`}>
        <h1>About Dentflix Dentistry</h1>
        <p>Creating beautiful smiles with expert care, advanced technology, and a personal touch.</p>
      </section>

      <section className={styles.mission}>
        <div className={styles.missionContent}>
          <h2>Our Mission</h2>
          <p>At Dentflix Dentistry, our mission is to provide world-class dental care in a relaxing and welcoming environment. We believe that a healthy smile is the foundation of overall well-being. Our team of experienced professionals is dedicated to utilizing the latest dental technologies to deliver pain-free, exceptional results for every patient.</p>
        </div>
        <div className={styles.missionImage}>
          <div className={styles.imagePlaceholder}>Clinic Interior</div>
        </div>
      </section>

      <section className={styles.doctors}>
        <h2>Meet Our Experts</h2>
        <div className={styles.doctorGrid}>
          <div className={styles.doctorCard}>
            <div className={styles.doctorImg}>👨‍⚕️</div>
            <h3>Dr. John Doe</h3>
            <p className={styles.specialty}>Chief Orthodontist</p>
            <p>15+ years of experience in creating perfect smiles using advanced braces and clear aligners.</p>
          </div>
          <div className={styles.doctorCard}>
            <div className={styles.doctorImg}>👩‍⚕️</div>
            <h3>Dr. Jane Smith</h3>
            <p className={styles.specialty}>Cosmetic Dentist</p>
            <p>Specializes in veneers, teeth whitening, and complete smile makeovers.</p>
          </div>
          <div className={styles.doctorCard}>
            <div className={styles.doctorImg}>👨‍⚕️</div>
            <h3>Dr. Alan Wake</h3>
            <p className={styles.specialty}>Oral Surgeon</p>
            <p>Expert in painless extractions, dental implants, and complex surgical procedures.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
