"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import styles from "./AudioSamples.module.css";

const tracks = [
    {
        id: "reception",
        title: "Medical Receptionist",
        subtitle: "Dr. Smith's Office • Booking Appt",
        src: "/AI Reception Agent US.mp3"
    },
    {
        id: "sales",
        title: "Outbound Sales",
        subtitle: "Real Estate • Lead Qualification",
        src: "/AI Sales Caller AU.mp3"
    },
    {
        id: "finance",
        title: "Financial Services",
        subtitle: "Account Inquiry • Secure Verification",
        src: "/AI Finance Agent US.mp3"
    }
];

export default function AudioSamples() {
    const [currentTrack, setCurrentTrack] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlay = (id: string, src: string) => {
        if (currentTrack === id) {
            // Toggle play/pause
            if (isPlaying) {
                audioRef.current?.pause();
                setIsPlaying(false);
            } else {
                audioRef.current?.play();
                setIsPlaying(true);
            }
        } else {
            // New track
            if (audioRef.current) {
                audioRef.current.src = src;
                audioRef.current.play();
                setCurrentTrack(id);
                setIsPlaying(true);
            }
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
    };

    return (
        <section className={styles.section} id="samples">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Listen to the Difference</h2>
                    <p className={styles.description}>
                        Real conversations, real speed. Experience the quality of Laaiguy AI.
                    </p>
                </div>

                <div className={styles.trackList}>
                    {tracks.map((track) => {
                        const active = currentTrack === track.id;
                        return (
                            <div
                                key={track.id}
                                className={`${styles.track} ${active ? styles.active : ""}`}
                                onClick={() => handlePlay(track.id, track.src)}
                            >
                                <div className={styles.buttonWrapper}>
                                    {active && isPlaying ? (
                                        <Pause size={20} fill="currentColor" />
                                    ) : (
                                        <Play size={20} fill="currentColor" style={{ marginLeft: "3px" }} />
                                    )}
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.trackTitle}>{track.title}</div>
                                    <div className={styles.trackMeta}>
                                        {track.subtitle}
                                    </div>
                                </div>
                                <div className={styles.waveform}>
                                    {/* Simulated waveform visualization */}
                                    {[...Array(12)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={styles.bar}
                                            style={{
                                                height: active && isPlaying ? `${Math.random() * 80 + 20}%` : '20%',
                                                animationDelay: active && isPlaying ? `-${Math.random()}s` : '0s'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Hidden Audio Element */}
                <audio ref={audioRef} onEnded={handleEnded} />
            </div>
        </section>
    );
}
