import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.about}>
                        <h3>Dentflix Dentistry</h3>
                        <p>Best Dental Clinic | Expert Dentist Care in Dhaka. Professional & Ethical Dental Treatment.</p>
                        <div className={styles.socials}>
                            <a href="https://www.facebook.com/profile.php?id=61586870545915" target="_blank" rel="noreferrer">📘 Facebook</a>
                            <a href="https://www.instagram.com/dentflix.dentistry/" target="_blank" rel="noreferrer">📸 Instagram</a>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <h4>Quick Links</h4>
                        <Link href="/about">About Us</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/gallery">Gallery</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className={styles.contact}>
                        <h4>Contact Info</h4>
                        <p>📍 79/1, West Vashantek (Mozumder Bari - Ground Floor), Dhaka Cantonment, Dhaka 1206</p>
                        <p>📞 +8801537-249999</p>
                        <p>✉️ dentflixdentistry@gmail.com</p>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Dentflix Dentistry. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
