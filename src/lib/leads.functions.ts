import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  profession: z.string().trim().max(100).optional().or(z.literal("")),
  budget: z.string().trim().max(100).optional().or(z.literal("")),
  timeline: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
  source: z.enum(["contact", "custom", "booking", "template"]).default("contact"),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("leads").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      profession: data.profession || null,
      budget: data.budget || null,
      timeline: data.timeline || null,
      message: data.message || null,
      source: data.source,
    });

    if (error) throw new Error(error.message);

    return { ok: true };
  });
