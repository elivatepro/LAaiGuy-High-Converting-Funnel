"use client";

import { Check } from "lucide-react";
import Script from "next/script";
import styles from "./FormSection.module.css";
import CustomLeadForm from "./CustomLeadForm";

export default function FormSection() {
    return (
        <section className={styles.section} id="get-started">
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>
                        Ready to <span className="text-gradient">Automate?</span>
                    </h2>
                    <p className={styles.description}>
                        Stop letting missed calls cost you money. Get your custom AI receptionist setup today and watch your revenue grow.
                    </p>

                    <div className={styles.list}>
                        <div className={styles.listItem}>
                            <Check className={styles.checkIcon} size={20} />
                            <span>Zero technical skills required</span>
                        </div>
                        <div className={styles.listItem}>
                            <Check className={styles.checkIcon} size={20} />
                            <span>Works with your existing phone number</span>
                        </div>
                        <div className={styles.listItem}>
                            <Check className={styles.checkIcon} size={20} />
                            <span>30-Day Money-Back Guarantee</span>
                        </div>
                    </div>
                </div>

                {/* Replaced iframe with CustomLeadForm (already styled with its own container) */}
                <CustomLeadForm />
            </div>
        </section>
    );
}
