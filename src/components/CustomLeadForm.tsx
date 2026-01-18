"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./CustomLeadForm.module.css";

export default function CustomLeadForm() {
    const [formData, setFormData] = useState({
        name: "",
        businessName: "",
        phone: "",
        email: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        alert("Thanks! We'll generate your AI receptionist demo shortly.");
        console.log("Form Data:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.logoWrapper}>
                <Image
                    src="/logo.webp"
                    alt="LAaiGUY Agency"
                    width={300}
                    height={80}
                    className={styles.logo}
                    priority
                />
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Full Name *</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        className={styles.input}
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Business Name *</label>
                    <input
                        type="text"
                        name="businessName"
                        placeholder="Name as Found on Google"
                        className={styles.input}
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Phone Number *</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className={styles.input}
                        required
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Email Address *</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className={styles.input}
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className={styles.submitButton}>
                    🔥 Generate My AI Receptionist
                </button>
            </form>
        </div>
    );
}
