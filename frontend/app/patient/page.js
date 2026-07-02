"use client";
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './patient.module.css';

export default function PatientDashboard() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            router.push('/login');
            return;
        }
        
        if (user.role === 'admin') {
            router.push('/admin');
            return;
        }

        fetchAppointments();
    }, [user]);

    const fetchAppointments = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/appointments/my-appointments');
            if (res.ok) {
                const data = await res.json();
                setAppointments(data);
            }
        } catch (error) {
            console.error('Failed to fetch appointments', error);
        } finally {
            setLoading(false);
        }
    };

    if (!user || loading) return <div className={styles.loading}>Loading dashboard...</div>;

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.profileInfo}>
                    <div className={styles.avatar}>👤</div>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
                <nav className={styles.nav}>
                    <button className={styles.active}>Appointments</button>
                    <button>Treatment Records</button>
                    <button>Profile Settings</button>
                    <button onClick={logout} className={styles.logoutBtn}>Logout</button>
                </nav>
            </div>
            
            <div className={styles.mainContent}>
                <div className={styles.header}>
                    <h2>My Appointments</h2>
                    <button onClick={() => router.push('/book-appointment')} className="btn-primary">Book New</button>
                </div>

                <div className={styles.appointmentsList}>
                    {appointments.length === 0 ? (
                        <div className={styles.emptyState}>
                            <p>You have no appointments yet.</p>
                        </div>
                    ) : (
                        appointments.map(apt => (
                            <div key={apt._id} className={styles.appointmentCard}>
                                <div className={styles.aptHeader}>
                                    <span className={`${styles.status} ${styles[apt.status]}`}>{apt.status}</span>
                                    <span className={styles.date}>{new Date(apt.date).toLocaleDateString()} at {apt.timeSlot}</span>
                                </div>
                                <div className={styles.aptBody}>
                                    <p><strong>Problem:</strong> {apt.problemDescription || 'N/A'}</p>
                                    <p><strong>Payment:</strong> {apt.paymentStatus} ({apt.paymentMethod})</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
