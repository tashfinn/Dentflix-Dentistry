"use client";
import { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        checkUserLoggedIn();
    }, []);

    const checkUserLoggedIn = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/auth/me');
            if (res.ok) {
                const data = await res.json();
                setUser(data);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error('Error fetching user', error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        const res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        const data = await res.json();
        
        if (res.ok) {
            setUser(data);
            router.push(data.role === 'admin' ? '/admin' : '/patient');
            return { success: true };
        } else {
            return { success: false, message: data.message };
        }
    };

    const register = async (name, email, password, phone) => {
        const res = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, phone })
        });
        
        const data = await res.json();
        
        if (res.ok) {
            setUser(data);
            router.push('/patient');
            return { success: true };
        } else {
            return { success: false, message: data.message };
        }
    };

    const logout = async () => {
        await fetch('http://localhost:5000/api/auth/logout', { method: 'POST' });
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, checkUserLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
