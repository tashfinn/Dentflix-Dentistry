import styles from './contact.module.css';

export default function Contact() {
    return (
        <div className="section">
            <div className={styles.header}>
                <h1 className="gradient-text">Contact Us</h1>
                <p>We are here to answer any questions you may have about your dental health.</p>
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2>Clinic Information</h2>
                    <div className={styles.item}>
                        <span className={styles.icon}>📍</span>
                        <div>
                            <strong>Address</strong>
                            <p>79/1, West Vashantek (Mozumder Bari - Ground Floor), Dhaka Cantonment, Dhaka 1206.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.icon}>📞</span>
                        <div>
                            <strong>Phone</strong>
                            <p>+8801537-249999</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.icon}>✉️</span>
                        <div>
                            <strong>Email</strong>
                            <p>dentflixdentistry@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <h2>Send a Message</h2>
                    <form className={styles.form}>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
