import { useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, Filter, ExternalLink, Loader2, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCurrency } from "@/hooks/use-currency";
import { templates, templateCategories, type Template } from "@/data/templates";
import { submitLead } from "@/lib/leads.functions";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().max(1000).optional(),
});

type EnquiryData = z.infer<typeof enquirySchema>;

export default function Templates() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selected, setSelected] = useState<Template | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { formatPrice } = useCurrency();

  const form = useForm<EnquiryData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const filtered = templates.filter((template) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      template.name.toLowerCase().includes(q) ||
      template.description.toLowerCase().includes(q);
    const matchesCategory =
      selectedCategory === "All" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const onSubmit = async (values: EnquiryData) => {
    if (!selected) return;
    setIsSubmitting(true);
    try {
      await submitLead({
        data: {
          name: values.name,
          email: values.email,
          phone: values.phone ?? "",
          profession: "",
          budget: "",
          timeline: "",
          message: `Design: ${selected.name}\n\n${values.message ?? ""}`,
          source: "template",
        },
      });
      toast.success("Enquiry sent", {
        description: "We'll get back to you with pricing and next steps.",
      });
      form.reset();
      setSelected(null);
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again, or email us directly.",
      });
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
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Portfolio <span className="text-glow">Designs</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Hand-crafted portfolio designs for professionals across India. Every design is
              fully responsive and personalised with your own content before launch.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="search"
                placeholder="Search designs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                aria-label="Search portfolio designs"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-white/40" />
              {templateCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-white text-black hover:bg-white/90"
                      : "border-white/20 text-white hover:bg-white/10"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((template, index) => (
              <motion.article
                key={template.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group glass rounded-xl overflow-hidden hover:glow transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={template.previewImage}
                    alt={`${template.name} website design preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm text-white border bg-white/10 border-white/20">
                    {template.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2 gap-3">
                    <h2 className="text-lg font-semibold text-white">{template.name}</h2>
                    <span className="text-xl font-bold text-white whitespace-nowrap">
                      {formatPrice(template.priceUsd, template.priceInr)}
                    </span>
                  </div>
                  <p className="text-sm text-white/50 mb-4">{template.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {template.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded bg-white/5 text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {template.demoUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                        asChild
                      >
                        <a href={template.demoUrl} target="_blank" rel="noreferrer noopener">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live preview
                        </a>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      className="bg-white text-black hover:bg-white/90 flex-1"
                      onClick={() => {
                        form.reset();
                        setSelected(template);
                      }}
                    >
                      <Sparkles className="w-4 h-4 mr-1" />
                      Enquire
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/60">No designs match your search yet.</p>
            </div>
          )}
        </div>
      </main>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-md bg-black/95 border-white/20 text-white">
          <DialogHeader>
            <DialogTitle>Enquire about {selected?.name}</DialogTitle>
            <DialogDescription className="text-white/60">
              Share your details and we'll reply with pricing, timeline and what we need from
              you.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white/5 border-white/10 text-white" />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone / WhatsApp (optional)</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white/5 border-white/10 text-white" />
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
                    <FormLabel>Anything we should know? (optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={3}
                        {...field}
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black hover:bg-white/90"
              >
                {isSubmitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Send enquiry
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}
