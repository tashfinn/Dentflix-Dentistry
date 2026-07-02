import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.brand}>
                    <h2>Dentflix<span>.</span></h2>
                    <p>Creating beautiful smiles with expert care, advanced technology, and a personal touch.</p>
                </div>
                
                <div className={styles.links}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                
                <div className={styles.contact}>
                    <h3>Contact Us</h3>
                    <p>📍 79/1, West Vashantek</p>
                    <p>📞 +880 1234-567890</p>
                    <p>✉️ info@dentflix.com</p>
                </div>
            </div>
            
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} Dentflix Dentistry. All rights reserved.</p>
            </div>
        </footer>
    );
}
