"use client";

import { motion } from "framer-motion";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <GoogleAnalytics
        gaMeasurementId={process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID}
      />

      {children}
    </motion.div>
  );
}
