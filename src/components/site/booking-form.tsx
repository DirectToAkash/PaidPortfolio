import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { submitLead } from "@/lib/leads.functions";
import { Loader2, Calendar as CalendarIcon, Clock, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Schema for the user details form
const bookingSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const TIME_SLOTS = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

export function BookingForm() {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [timeSlot, setTimeSlot] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            name: "",
            email: "",
            notes: "",
        },
    });

    const onSubmit = async (data: BookingFormData) => {
        if (!date || !timeSlot) {
            toast.error("Incomplete selection", {
                description: "Please select both a date and a time slot.",
            });
            return;
        }
        setIsSubmitting(true);
        try {
            await submitLead({
                data: {
                    name: data.name,
                    email: data.email,
                    message: `Call requested for ${format(date, "PPP")} at ${timeSlot}.

Notes: ${data.notes || "None"}`,
                    source: "booking",
                },
            });
            setIsSuccess(true);
            toast.success("Booking request sent", {
                description: "We'll confirm your call by email shortly.",
            });
        } catch {
            toast.error("Something went wrong", {
                description: "Please try again, or message us on WhatsApp.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="glass p-8 rounded-2xl text-center border border-white/10">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-white/60 mb-6">
                    We have received your booking request for<br />
                    <strong className="text-white">{date && format(date, "PPPP")} at {timeSlot}</strong>.
                </p>
                <p className="text-sm text-white/40">
                    Check your email for confirmation details.
                </p>
                <Button
                    variant="outline"
                    className="mt-8 border-white/20 text-white hover:bg-white/10"
                    onClick={() => {
                        setIsSuccess(false);
                        setDate(undefined);
                        setTimeSlot(null);
                        form.reset();
                    }}
                >
                    Book Another
                </Button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* LEFT COLUMN: Calendar & Time */}
            <div className="space-y-6">
                <div className="glass p-6 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-2 mb-4 text-white">
                        <CalendarIcon className="w-5 h-5 text-white/70" />
                        <h3 className="font-semibold text-lg">Select Date</h3>
                    </div>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border border-white/10 text-white"
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6} // Disable past dates + weekends
                        initialFocus
                    />
                </div>

                <AnimatePresence>
                    {date && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="glass p-6 rounded-2xl border border-white/10"
                        >
                            <div className="flex items-center gap-2 mb-4 text-white">
                                <Clock className="w-5 h-5 text-white/70" />
                                <h3 className="font-semibold text-lg">Select Time</h3>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {TIME_SLOTS.map((slot) => (
                                    <Button
                                        key={slot}
                                        variant={timeSlot === slot ? "default" : "outline"}
                                        className={`
                      ${timeSlot === slot
                                                ? "bg-white text-black hover:bg-white/90"
                                                : "border-white/20 text-white hover:bg-white/10 hover:text-white"
                                            }
                    `}
                                        onClick={() => setTimeSlot(slot)}
                                    >
                                        {slot}
                                    </Button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* RIGHT COLUMN: Form Details */}
            <div>
                <div className={`glass p-8 rounded-2xl border border-white/10 h-full transition-opacity duration-300 ${(!date || !timeSlot) ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                    <h3 className="text-2xl font-bold text-white mb-6">Enter Details</h3>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white/70">Your Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="John Doe"
                                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white/70">Email Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="email"
                                                placeholder="john@example.com"
                                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="notes"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white/70">Topic / Notes (Optional)</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                placeholder="What would you like to discuss?"
                                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[100px]"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="pt-4 border-t border-white/10">
                                <div className="flex justify-between text-sm mb-4">
                                    <span className="text-white/60">Selected:</span>
                                    <span className="text-white font-medium">
                                        {date ? format(date, "MMM dd") : "--"} @ {timeSlot || "--"}
                                    </span>
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-white text-black hover:bg-white/90 glow-sm"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Sending Request...
                                        </>
                                    ) : (
                                        "Confirm Booking"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
