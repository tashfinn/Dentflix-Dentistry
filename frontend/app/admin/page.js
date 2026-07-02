"use client";
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './admin.module.css';

export default function AdminDashboard() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [stats, setStats] = useState({ totalPatients: 0, totalAppointments: 0, pendingAppointments: 0 });
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        if (!user) {
            router.push('/login');
            return;
        }
        
        if (user.role !== 'admin') {
            router.push('/patient');
            return;
        }

        fetchData();
    }, [user]);

    const fetchData = async () => {
        try {
            const statsRes = await fetch('http://localhost:5000/api/admin/stats');
            const aptRes = await fetch('http://localhost:5000/api/admin/appointments');
            
            if (statsRes.ok && aptRes.ok) {
                setStats(await statsRes.json());
                setAppointments(await aptRes.json());
            }
        } catch (error) {
            console.error('Failed to fetch admin data', error);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id, status) => {
        try {
            const res = await fetch(`http://localhost:5000/api/admin/appointments/${id}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status })
            });
            
            if (res.ok) {
                fetchData(); // refresh data
            }
        } catch (error) {
            console.error('Failed to update status', error);
        }
    };

    if (!user || loading) return <div className={styles.loading}>Loading admin dashboard...</div>;

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.profileInfo}>
                    <div className={styles.avatar}>🛡️</div>
                    <h3>Admin Panel</h3>
                    <p>{user.name}</p>
                </div>
                <nav className={styles.nav}>
                    <button className={activeTab === 'overview' ? styles.active : ''} onClick={() => setActiveTab('overview')}>Overview</button>
                    <button className={activeTab === 'appointments' ? styles.active : ''} onClick={() => setActiveTab('appointments')}>Appointments</button>
                    <button className={activeTab === 'patients' ? styles.active : ''} onClick={() => setActiveTab('patients')}>Patients</button>
                    <button onClick={logout} className={styles.logoutBtn}>Logout</button>
                </nav>
            </div>
            
            <div className={styles.mainContent}>
                {activeTab === 'overview' && (
                    <>
                        <div className={styles.header}>
                            <h2>Dashboard Overview</h2>
                        </div>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <h3>Total Patients</h3>
                                <div className={styles.statValue}>{stats.totalPatients}</div>
                            </div>
                            <div className={styles.statCard}>
                                <h3>Total Appointments</h3>
                                <div className={styles.statValue}>{stats.totalAppointments}</div>
                            </div>
                            <div className={styles.statCard}>
                                <h3>Pending Appointments</h3>
                                <div className={styles.statValue}>{stats.pendingAppointments}</div>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'appointments' && (
                    <>
                        <div className={styles.header}>
                            <h2>All Appointments</h2>
                        </div>
                        <div className={styles.tableContainer}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Date & Time</th>
                                        <th>Patient</th>
                                        <th>Problem</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.map(apt => (
                                        <tr key={apt._id}>
                                            <td>{new Date(apt.date).toLocaleDateString()} {apt.timeSlot}</td>
                                            <td>{apt.patient?.name}<br/><small>{apt.patient?.phone}</small></td>
                                            <td>{apt.problemDescription || '-'}</td>
                                            <td><span className={`${styles.statusBadge} ${styles[apt.status]}`}>{apt.status}</span></td>
                                            <td>
                                                {apt.status === 'pending' && (
                                                    <div className={styles.actionBtns}>
                                                        <button onClick={() => updateStatus(apt._id, 'approved')} className={styles.approveBtn}>Approve</button>
                                                        <button onClick={() => updateStatus(apt._id, 'cancelled')} className={styles.cancelBtn}>Cancel</button>
                                                    </div>
                                                )}
                                                {apt.status === 'approved' && (
                                                    <button onClick={() => updateStatus(apt._id, 'completed')} className={styles.completeBtn}>Mark Completed</button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
