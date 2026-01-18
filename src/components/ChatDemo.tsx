"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Phone } from "lucide-react";
import styles from "./ChatDemo.module.css";
// import Image from "next/image"; // Assuming we might use Next Image if we had a real asset, using placeholder for now

export default function ChatDemo() {
    const [step, setStep] = useState(0);

    // Sequence of animation
    useEffect(() => {
        const timer1 = setTimeout(() => setStep(1), 1000); // Show User Msg
        const timer2 = setTimeout(() => setStep(2), 2500); // Show Typing
        const timer3 = setTimeout(() => setStep(3), 4000); // Show Agent Msg

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        }
    }, []);

    // Replay logic if desired? Or just play once. Let's make it loop for effect after long delay.
    useEffect(() => {
        if (step === 3) {
            const reset = setTimeout(() => {
                setStep(0);
                setTimeout(() => setStep(1), 500);
                setTimeout(() => setStep(2), 2000);
                setTimeout(() => setStep(3), 3500);
            }, 8000);
            return () => clearTimeout(reset);
        }
    }, [step]);


    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.tagline}>
                        <Phone size={16} />
                        AI Receptionist
                    </div>
                    <h2 className={styles.title}>
                        Never miss a call.<br /> Not ever.
                    </h2>
                    <p className={styles.description}>
                        LAAIGUY keeps your schedule full, handles the routine questions, and gives your business a professional edge—anytime, day or night, 24/7, 365 days a year. Your business is always ready.
                    </p>
                </div>

                <div className={styles.visualWrapper}>
                    {/* Decorative bg elements */}
                    <div className={styles.decorSquare} style={{ top: '10%', right: '10%', transform: 'rotate(15deg)' }} />
                    <div className={styles.decorSquare} style={{ bottom: '10%', left: '10%', transform: 'rotate(-10deg)', width: '40px', height: '40px' }} />

                    <div className={styles.chatContainer}>
                        {/* Message 1: User */}
                        <AnimatePresence>
                            {step >= 1 && (
                                <motion.div
                                    className={styles.messageRow}
                                    initial={{ opacity: 0, y: 20, x: -20 }}
                                    animate={{ opacity: 1, y: 0, x: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className={styles.avatar}>
                                        {/* Placeholder for Sophia M / Jane W from screenshot */}
                                        <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Jane" alt="User" />
                                    </div>
                                    <div className={styles.bubble}>
                                        <div className={styles.senderName}>Jane W.</div>
                                        <div className={styles.messageText}>Hello, do you have a spot today after 1pm?</div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Message 2: Agent */}
                        <AnimatePresence>
                            {step >= 2 && (
                                <motion.div
                                    className={`${styles.messageRow} ${styles.agentRow}`}
                                    initial={{ opacity: 0, y: 20, x: 20 }}
                                    animate={{ opacity: 1, y: 0, x: 0 }}
                                >
                                    <div className={styles.avatar} style={{ background: '#3b82f6' }}>
                                        <Bot size={28} color="white" />
                                    </div>
                                    <div className={`${styles.bubble} ${styles.agentBubble}`}>
                                        <div className={styles.senderName}>AI Agent</div>
                                        {step === 2 ? (
                                            <div className={styles.typingIndicator}>
                                                <div className={styles.dot} />
                                                <div className={styles.dot} />
                                                <div className={styles.dot} />
                                            </div>
                                        ) : (
                                            <div className={styles.messageText}>
                                                Yes, we have 2pm or 3:30pm, which one would you prefer?
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
