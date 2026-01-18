"use client";

import Link from "next/link";
import { Phone, Play, ArrowRight } from "lucide-react";
import { useModal } from "./ModalContext";
import styles from "../app/page.module.css";
import HeroBackground from "./HeroBackground";

export default function HeroSection() {
    const { openModal } = useModal();

    return (
        <section className={styles.hero} style={{ background: "transparent" }}>
            {/* Background Slideshow */}
            <HeroBackground />

            <div className={styles.heroContent} style={{ position: "relative", zIndex: 10 }}>
                <div className={styles.badge}>
                    Running 24/7 in Los Angeles
                </div>

                <h1 className={styles.title}>
                    The Receptionist <br />
                    That Never Sleeps
                </h1>

                <p className={styles.subtitle}>
                    Stop missing calls. Laaiguy answers every call, books appointments directly into your calendar, and sounds completely human.
                </p>

                <div className={styles.ctaGroup}>
                    {/* Primary CTA now opens Form Modal */}
                    <button onClick={() => openModal("form")} className="btn-primary">
                        <span>Request Your Own Setup</span>
                        <ArrowRight size={20} />
                    </button>

                    <button onClick={() => openModal("video")} className={styles.btnSecondary}>
                        <Play size={20} fill="currentColor" />
                        <span style={{ marginLeft: "8px" }}>Watch Demo</span>
                    </button>

                    {/* Secondary Link for immediate call moved to third or removed? 
                        User asked: "CTA to say, Request Your Own Setup ... link to a popup"
                        I will keep "Watch Demo" as secondary.
                        Maybe keep "Test Call" as a smaller tertiary link below later if needed.
                        For now replacing "Test Call" with "Request Setup".
                    */}
                </div>
            </div>
        </section>
    );
}
