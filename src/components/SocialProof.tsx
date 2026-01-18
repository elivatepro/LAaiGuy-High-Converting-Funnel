import { Briefcase, Building2, Stethoscope, Wrench, Scissors, Utensils } from "lucide-react";
import styles from "./SocialProof.module.css";

const industries = [
    { icon: Stethoscope, label: "Dental Clinics" },
    { icon: Briefcase, label: "Law Firms" },
    { icon: Wrench, label: "HVAC Services" },
    { icon: Scissors, label: "Salons & Spas" },
    { icon: Building2, label: "Real Estate" },
    { icon: Utensils, label: "Restaurants" },
    { icon: Stethoscope, label: "Medical Practices" },
    { icon: Briefcase, label: "Financial Advisors" },
];

export default function SocialProof() {
    return (
        <section className={styles.section}>
            <h3 className={styles.heading}>Trusted by businesses across Los Angeles</h3>

            <div className={styles.marqueeContainer}>
                {/* Double the content for seamless loop */}
                <div className={styles.track}>
                    {[...industries, ...industries, ...industries].map((item, index) => (
                        <div key={index} className={styles.item}>
                            <item.icon size={20} />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
