"use client";
import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import styles from './register.module.css';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const { register } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const res = await register(name, email, password, phone);
        if (!res.success) {
            setError(res.message);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Join Dentflix</h2>
                <p>Create your patient portal account</p>
                {error && <div className={styles.error}>{error}</div>}
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        minLength={6}
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}
