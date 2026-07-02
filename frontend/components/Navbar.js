"use client";
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import styles from './Navbar.module.css';

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.brand}>
                Dentflix<span>.</span>
            </Link>
            
            <div className={styles.navLinks}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/contact">Contact</Link>
                
                {user ? (
                    <>
                        <Link href={user.role === 'admin' ? '/admin' : '/patient'}>Dashboard</Link>
                        <button onClick={logout} className={styles.logoutBtn}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link href="/login">Login</Link>
                        <Link href="/register" className="btn-primary" style={{ padding: '0.5rem 1rem' }}>Book Now</Link>
                    </>
                )}
            </div>
        </nav>
    );
}
