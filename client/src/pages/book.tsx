import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Footer } from "@/components/footer";
import { BookingForm } from "@/components/booking-form";

export default function Book() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Book a Consultation | PaidPortfolio</title>
                <meta
                    name="description"
                    content="Schedule a call with our team to discuss your custom portfolio website needs."
                />
            </Helmet>

            <main className="min-h-screen pt-32 pb-20 relative">
                <div className="absolute inset-0 bg-black grid-pattern opacity-30 pointer-events-none" />

                <div className="relative z-10 container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Schedule a <span className="text-glow">Consultation</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Ready to take your portfolio to the next level? Pick a time below to discuss your goals.
                        </p>
                    </div>

                    {/* Custom On-Site Booking UI */}
                    <div className="relative z-20">
                        <BookingForm />
                    </div>

                    <div className="text-center mt-16 text-sm text-white/40">
                        <p>Prefer email? <a href="/contact" className="underline hover:text-white">Contact us directly</a></p>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
