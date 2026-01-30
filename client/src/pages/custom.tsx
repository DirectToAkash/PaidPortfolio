import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  MessageSquare, 
  Palette, 
  Code, 
  Rocket, 
  Check,
  CheckCircle,
  Loader2
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { insertCustomRequestSchema, type InsertCustomRequest } from "@shared/schema";

const customRequestFormSchema = insertCustomRequestSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  profession: z.string().min(1, "Please select your profession"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  description: z.string().min(20, "Please provide at least 20 characters describing your needs"),
});

type CustomRequestFormData = z.infer<typeof customRequestFormSchema>;

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We discuss your goals and vision",
  },
  {
    icon: Palette,
    title: "Design Phase",
    description: "Custom mockup based on your brand",
  },
  {
    icon: Code,
    title: "Development",
    description: "Clean code with animations",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploy and ongoing support",
  },
];

const features = [
  "Fully custom design tailored to you",
  "Mobile-first responsive approach",
  "SEO optimization included",
  "Premium animations & interactions",
  "Unlimited revisions during design",
  "Free hosting setup assistance",
  "1 year of maintenance & updates",
  "Priority support via email & chat",
];

export default function Custom() {
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<CustomRequestFormData>({
    resolver: zodResolver(customRequestFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      profession: "",
      budget: "",
      timeline: "",
      description: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: CustomRequestFormData) => {
      return apiRequest("POST", "/api/custom-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: CustomRequestFormData) => {
    mutation.mutate(data);
  };

  return (
    <>
      <Helmet>
        <title>Custom Portfolio Website Service | PaidPortfolio</title>
        <meta
          name="description"
          content="Get a fully custom portfolio website designed and built from scratch. Perfect for developers, designers, and professionals who want to stand out."
        />
        <meta
          name="keywords"
          content="custom portfolio website service, personal portfolio for job, developer portfolio design, hire portfolio designer"
        />
        <link rel="canonical" href="https://paidportfolio.com/custom" />
      </Helmet>

      <Navbar />

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
              Custom<span className="text-glow"> Portfolio Service</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Get a fully custom portfolio website designed and built from scratch, 
              tailored to your unique style and professional needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Our Process</h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-white/60">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">What&apos;s Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="glass rounded-xl p-6 mt-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">$299</span>
                  <span className="text-white/50">starting price</span>
                </div>
                <p className="text-sm text-white/60">
                  Final price depends on project complexity. Average project: $299-$599
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Request Your Custom Portfolio</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70">Full Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="John Doe"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                                data-testid="input-name"
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
                            <FormLabel className="text-white/70">Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="john@example.com"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70">Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="+1 (555) 123-4567"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="profession"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70">Profession</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white/5 border-white/10 text-white" data-testid="select-profession">
                                  <SelectValue placeholder="Select profession" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="developer">Developer</SelectItem>
                                <SelectItem value="designer">Designer</SelectItem>
                                <SelectItem value="student">Student</SelectItem>
                                <SelectItem value="freelancer">Freelancer</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70">Budget Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white/5 border-white/10 text-white" data-testid="select-budget">
                                  <SelectValue placeholder="Select budget" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="299-399">$299 - $399</SelectItem>
                                <SelectItem value="400-499">$400 - $499</SelectItem>
                                <SelectItem value="500-599">$500 - $599</SelectItem>
                                <SelectItem value="600+">$600+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70">Timeline</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white/5 border-white/10 text-white" data-testid="select-timeline">
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1-2-weeks">1-2 Weeks</SelectItem>
                                <SelectItem value="2-4-weeks">2-4 Weeks</SelectItem>
                                <SelectItem value="1-month">1 Month+</SelectItem>
                                <SelectItem value="flexible">Flexible</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Project Description</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Tell us about your vision, the projects you want to showcase, any specific features or styles you have in mind..."
                              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[120px]"
                              data-testid="textarea-description"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-white text-black hover:bg-white/90 glow-sm"
                      disabled={mutation.isPending}
                      data-testid="button-submit-request"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Submit Request
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-white/40 text-center">
                      We&apos;ll respond within 24 hours. No commitment required.
                    </p>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
