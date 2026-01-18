"use client";

import { ArrowRight } from "lucide-react";
import styles from "./OptIn.module.css";

export default function OptIn() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Stop Losing Revenue Today</h2>
                <p className={styles.text}>
                    Get your free comprehensive guide on how AI receptionists are saving local businesses $2,000+ per month.
                </p>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className={styles.input}
                        required
                    />
                    <button type="submit" className={styles.submitBtn}>
                        Get the Free Guide
                    </button>
                </form>
            </div>
        </section>
    );
}
