"use client";

import styles from "./VSLPlayer.module.css";

export default function VSLPlayer() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    See How <span className="text-gradient">AI Scale</span> Works
                </h2>
                <div className={styles.videoWrapper}>
                    <video
                        className={styles.video}
                        controls
                        poster="/hero_ai_network.png" // Fallback poster
                        playsInline
                    >
                        <source src="/VSL.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}
