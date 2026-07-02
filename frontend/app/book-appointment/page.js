"use client";
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './booking.module.css';

export default function BookAppointment() {
    const { user } = useAuth();
    const router = useRouter();
    const [date, setDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [problemDescription, setProblemDescription] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('clinic');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const availableSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            router.push('/login');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const res = await fetch('http://localhost:5000/api/appointments/book', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                // In a real app we'd pass auth token or rely on cookie if set up for cross-origin properly
                // Since this is a demo, assuming cookie works
                body: JSON.stringify({ date, timeSlot, problemDescription, paymentMethod })
            });

            if (res.ok) {
                router.push('/patient');
            } else {
                const data = await res.json();
                setError(data.message || 'Failed to book appointment');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return (
            <div className={styles.container}>
                <div className={styles.card}>
                    <h2>Login Required</h2>
                    <p>Please log in or register to book an appointment.</p>
                    <button onClick={() => router.push('/login')} className="btn-primary">Go to Login</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Book an Appointment</h2>
                <p>Select your preferred date and time.</p>
                {error && <div className={styles.error}>{error}</div>}
                
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label>Date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required min={new Date().toISOString().split('T')[0]} />
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label>Time Slot</label>
                        <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} required>
                            <option value="">Select a time</option>
                            {availableSlots.map(slot => (
                                <option key={slot} value={slot}>{slot}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Briefly describe your problem (Optional)</label>
                        <textarea 
                            value={problemDescription} 
                            onChange={(e) => setProblemDescription(e.target.value)} 
                            rows="3" 
                            placeholder="E.g., Toothache, regular checkup..."
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Payment Method</label>
                        <div className={styles.paymentOptions}>
                            <label className={styles.radioLabel}>
                                <input type="radio" name="payment" value="clinic" checked={paymentMethod === 'clinic'} onChange={() => setPaymentMethod('clinic')} />
                                Pay at Clinic
                            </label>
                            <label className={styles.radioLabel}>
                                <input type="radio" name="payment" value="online" checked={paymentMethod === 'online'} onChange={() => setPaymentMethod('online')} />
                                Pay Online (bKash/Card) 
                            </label>
                        </div>
                        {paymentMethod === 'online' && (
                            <div className={styles.dummyPaymentIcons}>
                                <span>📱 bKash</span>
                                <span>💳 Visa/Mastercard</span>
                                <span>📱 Nagad</span>
                            </div>
                        )}
                    </div>

                    <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        {loading ? 'Booking...' : 'Confirm Appointment'}
                    </button>
                </form>
            </div>
        </div>
    );
}
