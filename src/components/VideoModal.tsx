"use client";

import { X, ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useModal } from "./ModalContext";
import styles from "./VideoModal.module.css";
import { useEffect, useRef, useState } from "react";
import CustomLeadForm from "./CustomLeadForm";

export default function VideoModal() {
    const { isOpen, view, closeModal } = useModal();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showForm, setShowForm] = useState(false);
    const [isEnded, setIsEnded] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    // Only render/active if view is video
    const isVideoOpen = isOpen && view === "video";

    // Reset state when modal opens/closes
    useEffect(() => {
        if (!isOpen) {
            setShowForm(false);
            setIsEnded(false);
            setIsMuted(false);
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        } else if (isVideoOpen && videoRef.current) {
            // Attempt to play unmuted. If it fails, fallback to muted? 
            // Usually simpler to just try play.
            videoRef.current.muted = false;
            videoRef.current.play().catch((err) => {
                console.log("Autoplay blocked, falling back to muted", err);
                if (videoRef.current) {
                    videoRef.current.muted = true;
                    setIsMuted(true);
                    videoRef.current.play().catch(() => { });
                }
            });
        }
    }, [isOpen, isVideoOpen]);

    // Handle Escape Key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [closeModal]);

    const handleVideoEnd = () => {
        setShowForm(true);
        setIsEnded(true);
    };

    const handleCTAClick = () => {
        setShowForm(true);
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            const newMutedState = !isMuted;
            videoRef.current.muted = newMutedState;
            setIsMuted(newMutedState);
        }
    };

    if (!isVideoOpen) return null;

    return (
        <div className={`${styles.overlay} ${isVideoOpen ? styles.open : ""}`} onClick={closeModal}>
            <div
                className={`${styles.modalContainer} ${showForm ? styles.splitView : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.closeButton} onClick={closeModal}>
                    <X size={20} /> Close
                </button>

                {/* Left Side: Video Frame */}
                <div className={styles.frame}>
                    <div className={styles.videoWrapper}>
                        <video
                            ref={videoRef}
                            className={styles.video}
                            playsInline
                            src="/VSL.mp4"
                            onEnded={handleVideoEnd}
                            controls={false} // Disable controls per request
                        />

                        {/* Mute Control */}
                        <button className={styles.muteButton} onClick={toggleMute}>
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>

                        {/* End State Overlay */}
                        {isEnded && (
                            <div className={styles.endOverlay}>
                                <div className={styles.endMessage}>
                                    <h3>Ready to Transform Your Business?</h3>
                                    <p>Get your custom AI Receptionist setup today and never miss another lead.</p>
                                    <div className={styles.arrowContainer}>
                                        <ArrowRight size={32} className={styles.bounceArrow} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* CTA Button appears under video if form is NOT shown */}
                    {!showForm && (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button onClick={handleCTAClick} className={styles.ctaButton}>
                                <span>Request Your Own Setup</span>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    )}
                </div>

                {/* Right Side: Form Slide-out */}
                <div className={styles.formWrapper}>
                    <CustomLeadForm />
                </div>
            </div>
        </div>
    );
}
