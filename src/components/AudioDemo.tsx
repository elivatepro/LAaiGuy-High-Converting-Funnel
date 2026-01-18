"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import styles from "./AudioDemo.module.css";

export default function AudioDemo() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className={styles.section} id="demo">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Sounds Like a Human, <br /><span className="text-gradient">Works Like a Machine.</span></h2>
                    <p>Listen to how Laaiguy handles a real booking conversation. No robotic pauses, just smooth, natural interaction.</p>
                </div>

                <div className={styles.playerCard}>
                    <button
                        className={styles.playButton}
                        onClick={togglePlay}
                        aria-label={isPlaying ? "Pause Demo" : "Play Demo"}
                    >
                        {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" style={{ marginLeft: "4px" }} />}
                    </button>

                    <div className={styles.trackInfo}>
                        <div className={styles.trackName}>Booking Demo • Alex</div>
                        <div className={`${styles.trackStatus} ${isPlaying ? styles.playing : ""}`}>
                            {isPlaying ? (
                                <div className={styles.visualizer}>
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className={styles.bar} style={{
                                            height: `${Math.random() * 100}%`,
                                            animationDelay: `-${Math.random()}s`
                                        }} />
                                    ))}
                                </div>
                            ) : (
                                <span>Click play to listen</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Real audio element */}
            <audio ref={audioRef} src="/AI Reception Agent US.mp3" onEnded={() => setIsPlaying(false)} />
        </section>
    );
}
