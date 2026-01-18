"use client";

import { X } from "lucide-react";
import { useModal } from "./ModalContext";
import styles from "./FormModal.module.css";
import CustomLeadForm from "./CustomLeadForm";
import { useEffect } from "react";

export default function FormModal() {
    const { isOpen, view, closeModal } = useModal();

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [closeModal]);

    if (!isOpen || view !== "form") return null;

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`} onClick={closeModal}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={closeModal} aria-label="Close modal">
                    <X size={20} /> Close
                </button>
                {/* 
                   CustomLeadForm handles its own padding/layout.
                   It might need tweaks to fit perfectly in a modal, 
                   but the modal container provides max-width/height.
                */}
                <CustomLeadForm />
            </div>
        </div>
    );
}
