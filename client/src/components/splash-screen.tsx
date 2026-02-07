import { motion } from "framer-motion";
import { useEffect } from "react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
    useEffect(() => {
        // Show for 2 seconds then trigger exit
        const timer = setTimeout(() => {
            onComplete();
        }, 2000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Fade out background over 0.5s
        >
            <motion.div
                className="w-24 h-24 flex items-center justify-center overflow-hidden"
                layoutId="brand-logo"
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Smooth easeOutCubic-ish
            >
                <img src="/logo-icon.png" alt="PaidPortfolio Logo" className="w-full h-full object-cover" />
            </motion.div>
        </motion.div>
    );
}
