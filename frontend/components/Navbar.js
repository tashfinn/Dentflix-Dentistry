"use client";
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const { user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>🦷</span>
                    <span className={styles.logoText}>Dentflix <span className="gradient-text">Dentistry</span></span>
                </Link>
                
                <button className={styles.mobileMenuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/services" className={styles.navLink}>Services</Link>
                    <Link href="/gallery" className={styles.navLink}>Gallery</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                    
                    {user ? (
                        <div className={styles.authLinks}>
                            <Link href={user.role === 'admin' ? '/admin' : '/patient'} className={styles.dashboardLink}>
                                Dashboard
                            </Link>
                            <button onClick={logout} className="btn-outline">Logout</button>
                        </div>
                    ) : (
                        <div className={styles.authLinks}>
                            <Link href="/login" className={styles.loginLink}>Login</Link>
                            <Link href="/book-appointment" className="btn-primary">Book Appointment</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}
