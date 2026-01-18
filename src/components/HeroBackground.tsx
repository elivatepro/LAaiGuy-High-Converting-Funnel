"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/Man with Electric Grass Cutter.jpg",
    "/Woman Doing Nails at Salon.jpg",
    "/Young Photographer Outdoors.jpg",
    "/Traditional Barbershop Utrecht.jpg"
];

export default function HeroBackground() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", zIndex: 0 }}>
            {/* Dark Overlay for text readability */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to bottom, rgba(5,5,10,0.7) 0%, rgba(5,5,10,0.85) 60%, rgba(5,5,10,1) 100%)",
                zIndex: 2
            }} />

            <AnimatePresence>
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url('${images[index]}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        zIndex: 1
                    }}
                />
            </AnimatePresence>
        </div>
    );
}
