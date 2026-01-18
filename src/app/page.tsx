import Link from "next/link";
import { Phone, Play } from "lucide-react";
import styles from "./page.module.css";
import SocialProof from "@/components/SocialProof";
// import FeaturesGrid from "@/components/FeaturesGrid"; // Replaced
import FeaturesGridNew from "@/components/FeaturesGridNew";
// import AudioDemo from "@/components/AudioDemo"; // Replaced
import AudioSamples from "@/components/AudioSamples";
import FormSection from "@/components/FormSection";
import VideoModal from "@/components/VideoModal";
import FormModal from "@/components/FormModal";
import HeroSection from "@/components/HeroSection";
import AIReceptionistHero from "@/components/AIReceptionistHero";
import ChatDemo from "@/components/ChatDemo";

export default function Home() {
  return (
    <main className={styles.main}>

      <HeroSection />

      <SocialProof />

      <AIReceptionistHero />

      {/* Modals */}
      <VideoModal />
      <FormModal />

      <ChatDemo />

      <FeaturesGridNew />

      <AudioSamples />

      <FormSection />
    </main>
  );
}
