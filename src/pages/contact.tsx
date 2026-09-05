import { useEffect } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { submitLead } from "@/lib/leads.functions";
import { Mail, MapPin, Phone, Send, Loader2, MessageSquare, Clock } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "directtoakash@gmail.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Noida, INDIA",
    description: "Remote-friendly team",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9984709265",
    description: "Mon-Fri, 9AM-6PM IST",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "< 24 Hours",
    description: "Usually much faster",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await submitLead({
        data: {
          name: data.name,
          email: data.email,
          message: `${data.subject}

${data.message}`,
          source: "contact",
        },
      });
      toast.success("Message sent", {
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch {
      toast.error("Something went wrong", { description: "Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>

      <main className="min-h-screen pt-24 pb-16">
        <div className="absolute inset-0 bg-black grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get in<span className="text-glow"> Touch</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and
              we&apos;ll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1 space-y-6"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="glass rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm text-white/50 mb-1">{item.title}</h3>
                      <p className="text-lg font-semibold text-white">{item.value}</p>
                      <p className="text-sm text-white/50 mt-1">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-white" />
                  <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                                data-testid="input-contact-name"
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
                                data-testid="input-contact-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Subject</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="How can we help you?"
                              className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                              data-testid="input-contact-subject"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Tell us more about what you need..."
                              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[150px]"
                              data-testid="textarea-contact-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto bg-white text-black hover:bg-white/90 glow-sm px-8"
                      disabled={isSubmitting}
                      data-testid="button-send-message"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60 mb-6">
              Can&apos;t find what you&apos;re looking for? Check our FAQ or reach out directly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-white mb-2">How long does it take?</h3>
                <p className="text-sm text-white/60">
                  Templates are instant. Custom portfolios take 1-4 weeks depending on complexity.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Do you offer refunds?</h3>
                <p className="text-sm text-white/60">
                  Yes, we offer a 30-day money-back guarantee on all purchases.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Can I request changes?</h3>
                <p className="text-sm text-white/60">
                  Custom portfolios include unlimited revisions. Templates are customizable.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
