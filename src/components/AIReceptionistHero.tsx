"use client";

import { motion } from "framer-motion";
import { Bot, Mic, Brain, MessageSquare } from "lucide-react";
import styles from "./AIReceptionistHero.module.css";

export default function AIReceptionistHero() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        AI Receptionist <br />
                        working 24/7 for <br />
                        <span className={styles.titleItalic}>your business</span>
                    </h1>
                    <p className={styles.description}>
                        Let our <strong>AI Receptionist</strong> handle every call, book appointments,
                        and keep your business running 24/7. No missed calls, no lost opportunities—just
                        seamless integration with <strong>your calendars</strong> and <strong>your phone</strong>—so
                        you stay focused on what matters most.
                    </p>
                    <button className={styles.button}>Get Started</button>
                </div>

                <div className={styles.diagramWrapper}>
                    <div className={styles.diagramLabel}>Components of an AI Receptionist</div>

                    <div className={styles.atomContainer}>
                        {/* Core */}
                        <motion.div
                            className={styles.core}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Bot size={40} color="white" strokeWidth={1.5} />
                        </motion.div>

                        {/* Orbits */}
                        <div className={`${styles.orbitPath} ${styles.orbit1}`} />
                        <div className={`${styles.orbitPath} ${styles.orbit2}`} />
                        <div className={`${styles.orbitPath} ${styles.orbit3}`} />

                        {/* Node 1: Speech Recognition */}
                        <motion.div
                            className={`${styles.nodeWrapper} ${styles.orbit1}`}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <div className={styles.node} style={{ transform: 'translateX(-140px) rotate(-180deg)' }}>
                                {/* Keep icon upright by counter-rotating if needed, or just let it spin. 
                                    Actually if the wrapper spins, the icon spins. 
                                    To keep icon upright we'd need a counter-spin. 
                                    For now simplified: let it orbit.
                                */}
                                <Mic size={20} />
                            </div>
                        </motion.div>
                        <div className={`${styles.nodeLabel} ${styles.labelSR}`}>
                            Speech <br /> Recognition
                        </div>

                        {/* Node 2: Natural Language Processing */}
                        <motion.div
                            className={`${styles.nodeWrapper} ${styles.orbit2}`}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                            <div className={styles.node} style={{ transform: 'translateX(140px)' }}>
                                <MessageSquare size={20} />
                            </div>
                        </motion.div>
                        <div className={`${styles.nodeLabel} ${styles.labelNLP}`}>
                            Natural Language <br /> Processing
                        </div>

                        {/* Node 3: Machine Learning */}
                        <motion.div
                            className={`${styles.nodeWrapper} ${styles.orbit3}`}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        >
                            <div className={styles.node} style={{ transform: 'translateX(-140px)' }}>
                                <Brain size={20} />
                            </div>
                        </motion.div>
                        <div className={`${styles.nodeLabel} ${styles.labelML}`}>
                            Machine <br /> Learning
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
