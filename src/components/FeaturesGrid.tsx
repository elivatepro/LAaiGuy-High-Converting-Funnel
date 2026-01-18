import { Clock, CalendarCheck, Users, Database, ShieldCheck } from "lucide-react";
import { Mic, Zap, MessageSquare } from "lucide-react";
import styles from "./FeaturesGrid.module.css";

const features = [
    {
        icon: Clock,
        title: "24/7 Availability",
        description: "Never miss a lead. Your AI receptionist answers calls day and night, ensuring every opportunity is captured."
    },
    {
        icon: CalendarCheck,
        title: "Instant Booking",
        description: "Seamlessly integrates with your calendar to book appointments in real-time while you sleep."
    },
    {
        icon: Mic,
        title: "Human-Like Voice",
        description: "Ultra-realistic voice modulation that sounds so natural, your customers won't believe it's AI."
    },
    {
        icon: Database,
        title: "CRM Integration",
        description: "Automatically syncs every interaction and detail directly into your existing CRM workflow."
    },
    {
        icon: MessageSquare,
        title: "Smart Q&A",
        description: "Trained on your business knowledge base to answer complex customer questions accurately."
    },
    {
        icon: Zap,
        title: "Instant Setup",
        description: "Get up and running in minutes. No complex coding or technical expertise required."
    }
];

export default function FeaturesGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <feature.icon size={28} />
                            </div>
                            <h3 className={styles.title}>{feature.title}</h3>
                            <p className={styles.description}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
