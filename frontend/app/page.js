import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className="fade-in-up">Your Perfect Smile <br/> Starts Here</h1>
          <p className="fade-in-up">Experience world-class dental care at Dentflix Dentistry. We combine advanced technology with compassionate care to give you the smile you deserve.</p>
          <div className={`${styles.ctaGroup} fade-in-up`}>
            <Link href="/book-appointment" className="btn-primary">Book Appointment</Link>
            <Link href="/services" className="btn-outline">Our Services</Link>
          </div>
        </div>
        <div className={`${styles.heroImage} fade-in-up`}>
          {/* We'll use a placeholder for the hero image that looks premium */}
          <div className={styles.imagePlaceholder}>
            <span className={styles.toothIcon}>🦷</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
        <div className={styles.sectionHeader}>
          <h2 className="gradient-text">Our Dental Services</h2>
          <p>Comprehensive care for all your dental needs.</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {[
            { title: 'Root Canal Treatment', icon: '⚡', desc: 'Painless RCT using modern endodontic technology.' },
            { title: 'Teeth Scaling', icon: '✨', desc: 'Professional cleaning for healthy gums and teeth.' },
            { title: 'Dental Fillings', icon: '💎', desc: 'Tooth-colored composite fillings for a natural look.' },
            { title: 'Smile Care', icon: '😁', desc: 'Cosmetic dentistry to enhance your perfect smile.' }
          ].map((service, idx) => (
            <div key={idx} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className={styles.sectionHeader}>
          <h2 className="gradient-text">Why Choose Dentflix?</h2>
          <p>Professional & Ethical Dental Treatment.</p>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>👨‍⚕️</div>
            <h4>Expert Dentists</h4>
            <p>Highly qualified and experienced dental professionals.</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>🏥</div>
            <h4>Modern Equipment</h4>
            <p>State-of-the-art technology for precise treatments.</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>🛡️</div>
            <h4>Ethical Care</h4>
            <p>We believe in transparent, patient-first ethical treatment.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
