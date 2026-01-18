"use client";

import { motion } from "framer-motion";
import { Bot, Calendar, Phone, CheckCircle2, User, Sparkles } from "lucide-react";
import styles from "./FeaturesGridNew.module.css";

export default function FeaturesGridNew() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.subtitle}>
                        <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
                        Bringing AI to your small business
                    </div>
                    <h2 className={styles.title}>LAAIGUY features at a glance</h2>
                </div>

                <div className={styles.grid}>
                    {/* Card 1 */}
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Never Miss a Call<br />Not Ever</h3>
                            <p className={styles.cardDescription}>
                                Handles every call, every time. Stop worrying about missed calls—LAAIGUY answers every ring, captures every lead, and greets every customer.
                            </p>
                        </div>
                        <div className={styles.visualArea}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                                <motion.div
                                    className={`${styles.chatBubble} ${styles.chatUser}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <User size={16} color="#64748b" />
                                    <span>Are you open tomorrow?</span>
                                </motion.div>
                                <motion.div
                                    className={`${styles.chatBubble} ${styles.chatAgent}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <Bot size={16} color="#3b82f6" />
                                    <span>Yes, would you like to book a spot?</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Bookings, Reschedules & Reminders</h3>
                            <p className={styles.cardDescription}>
                                Books new appointments, reschedules as needed, and automatically sends reminders to keep clients on track.
                            </p>
                        </div>
                        <div className={styles.visualArea}>
                            <div className={styles.notificationStack}>
                                <div className={`${styles.notificationCard} ${styles.notifBack}`}></div>
                                <div className={`${styles.notificationCard} ${styles.notifFront}`}>
                                    <div className={styles.notifTitle}>New Job Estimate Booked</div>
                                    <div className={styles.notifTime}>Wednesday, Jan 23, 1:00-1:15pm</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Personalized for Your Business</h3>
                            <p className={styles.cardDescription}>
                                LAAIGUY is trained on your services, pricing, and FAQs, so callers always get accurate info (and you never have to repeat yourself).
                            </p>
                        </div>
                        <div className={styles.visualArea}>
                            <div className={styles.visualArea}>
                                <div className={styles.profileVisual}>
                                    {/* Eddy's Call (Background Card) */}
                                    <div className={styles.callCard}>
                                        <div className={styles.avatar} style={{ background: '#bfdbfe' }} />
                                        <div className={styles.messageContent}>
                                            <h4>Eddy D.</h4>
                                            <p>How much is a shave and a haircut?</p>
                                        </div>
                                        <Phone size={16} color="#94a3b8" style={{ marginLeft: 'auto', opacity: 0.5 }} />
                                    </div>

                                    {/* Agent Response (Foreground Toast) */}
                                    <motion.div
                                        className={styles.agentToast}
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5, type: 'spring' }}
                                    >
                                        <div className={styles.iconCircle}>
                                            <Bot size={20} color="white" />
                                        </div>
                                        <div className={styles.toastContent}>
                                            <h4>AI Agent</h4>
                                            <p>Checking prices for you...</p>
                                        </div>
                                        <div className={styles.statusDot} />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Grid */}
                <div className={styles.secondaryGrid}>
                    <div className={styles.secondaryCard}>
                        <h3 className={styles.secondaryTitle}>Calendar & Appointments</h3>
                        <p className={styles.cardDescription}>
                            Keeps you in the loop. Instantly notifies you of every new booking, change, or cancellation—so you're always up to speed.
                        </p>
                        {/* Visual placeholder could go here if needed, but simple text is fine for simplified layout */}
                    </div>
                    <div className={styles.secondaryCard}>
                        <h3 className={styles.secondaryTitle}>No Tech Headaches</h3>
                        <p className={styles.cardDescription}>
                            Works with your current phone and calendar. No complicated setups or new apps—just plug LAAIGUY into your existing workflow.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
