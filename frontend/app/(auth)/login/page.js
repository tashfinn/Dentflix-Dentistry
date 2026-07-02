"use client";
import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import styles from './login.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const res = await login(email, password);
        if (!res.success) {
            setError(res.message);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Welcome Back</h2>
                <p>Log in to your Dentflix patient portal</p>
                {error && <div className={styles.error}>{error}</div>}
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}
