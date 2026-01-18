"use client";

import { useEffect } from "react";
import Script from "next/script";
import styles from "./FormEmbed.module.css";

export default function FormEmbed() {
    return (
        <section className={styles.section} id="get-started">
            <div className={styles.container}>
                <div className={styles.iframeWrapper}>
                    <iframe
                        src="https://link.laaiguy.com/widget/form/ysNvRbxOpBWDZh4scYyJ"
                        style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
                        id="inline-ysNvRbxOpBWDZh4scYyJ"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="AI Your Biz Form 1"
                        data-height="851"
                        data-layout-iframe-id="inline-ysNvRbxOpBWDZh4scYyJ"
                        data-form-id="ysNvRbxOpBWDZh4scYyJ"
                        title="AI Your Biz Form 1"
                    />
                </div>
                <Script src="https://link.laaiguy.com/js/form_embed.js" strategy="lazyOnload" />
            </div>
        </section>
    );
}
