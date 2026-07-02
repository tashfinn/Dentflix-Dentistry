"use client";
import styles from './services.module.css';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: "🦷",
      title: "Root Canal Treatment",
      description: "Save severely infected teeth with our painless root canal therapy, using advanced rotary endodontics."
    },
    {
      id: 2,
      icon: "✨",
      title: "Teeth Whitening",
      description: "Brighten your smile instantly with our professional, safe, and effective laser teeth whitening solutions."
    },
    {
      id: 3,
      icon: "🪥",
      title: "Scaling & Polishing",
      description: "Keep your gums healthy and teeth spotless with our deep cleaning scaling and polishing services."
    },
    {
      id: 4,
      icon: "🔩",
      title: "Dental Implants",
      description: "Replace missing teeth permanently with high-quality titanium implants that look and feel completely natural."
    },
    {
      id: 5,
      icon: "😁",
      title: "Orthodontics (Braces)",
      description: "Straighten your teeth and correct your bite with traditional metal braces or invisible aligners."
    },
    {
      id: 6,
      icon: "🛡️",
      title: "Crowns & Bridges",
      description: "Restore damaged or missing teeth with custom-crafted, durable ceramic crowns and bridges."
    }
  ];

  return (
    <div className={styles.container}>
      <section className={`${styles.header} animate-fade-in`}>
        <h1>Our Dental Services</h1>
        <p>Comprehensive, high-quality dental care tailored to your unique needs.</p>
      </section>

      <section className={styles.servicesGrid}>
        {services.map(service => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.icon}>{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section className={styles.cta}>
        <h2>Ready for a Healthier Smile?</h2>
        <p>Book an appointment with our experts today and experience premium dental care.</p>
        <Link href="/book-appointment" className="btn-primary">
          Book Appointment Now
        </Link>
      </section>
    </div>
  );
}
