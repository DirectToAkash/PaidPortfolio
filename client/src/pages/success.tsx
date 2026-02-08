import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Home, Download } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Success() {
    return (
        <>
            <Helmet>
                <title>Payment Successful | PaidPortfolio</title>
                <meta name="description" content="Thank you for your purchase!" />
            </Helmet>

            <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                <div className="absolute inset-0 bg-black" />
                <div className="absolute inset-0 grid-pattern opacity-30" />

                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

                <div className="relative z-10 text-center px-4 w-full max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass rounded-2xl p-8 sm:p-12 w-full mx-auto border border-green-500/20">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8 ring-1 ring-green-500/50"
                            >
                                <Check className="w-12 h-12 text-green-400" />
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl sm:text-5xl font-bold text-white mb-4"
                            >
                                Payment <span className="text-green-400">Successful!</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-white/60 mb-8 text-lg"
                            >
                                Thank you for your purchase. We have sent a confirmation email with your order details and download instructions.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <Link href="/">
                                    <Button
                                        size="lg"
                                        className="w-full sm:w-auto bg-white text-black hover:bg-white/90 glow-sm"
                                    >
                                        <Home className="w-4 h-4 mr-2" />
                                        Return Home
                                    </Button>
                                </Link>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10"
                                    onClick={() => window.open("mailto:directtoakash@gmail.com")}
                                >
                                    Contact Support
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
