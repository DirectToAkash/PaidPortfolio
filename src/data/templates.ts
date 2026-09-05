export type Template = {
  id: string;
  name: string;
  description: string;
  priceInr: number;
  priceUsd: number;
  category: string;
  previewImage: string;
  features: string[];
  techStack: string[];
  demoUrl: string | null;
  isFeatured: boolean;
};

export const templates: Template[] = [
  {
    id: "advocate",
    name: "Advocate Portfolio",
    description:
      "A professional and authoritative portfolio for legal practitioners and advocates. Establishes trust and expertise.",
    priceInr: 950,
    priceUsd: 10,
    category: "Professional",
    previewImage: "/portfolio-advocate.png",
    features: ["Legal Practice Areas", "Case Studies", "Appointment Booking", "Professional Blog"],
    techStack: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://advocateportfolio.lovable.app/",
    isFeatured: true,
  },
  {
    id: "dentist",
    name: "Dentist Portfolio",
    description:
      "A clean and trustworthy portfolio for dental professionals. Highlight services, patient reviews, and easy booking.",
    priceInr: 950,
    priceUsd: 10,
    category: "Medical",
    previewImage: "/portfolio-dentist.png",
    features: ["Service Showcase", "Patient Reviews", "Online Booking", "Clinic Tour"],
    techStack: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://dentistportfolio.lovable.app/",
    isFeatured: true,
  },
  {
    id: "developer",
    name: "Developer Portfolio",
    description:
      "A professional portfolio for developers to showcase their projects, skills and open-source work.",
    priceInr: 950,
    priceUsd: 10,
    category: "Developer",
    previewImage: "/portfolio-razaq.png",
    features: ["Project Showcase", "Skills Section", "Contact Form", "Resume Download"],
    techStack: ["React", "Next.js", "TailwindCSS"],
    demoUrl: "http://razaq.vercel.app/",
    isFeatured: true,
  },
  {
    id: "designer",
    name: "Designer Portfolio",
    description:
      "A UI/UX designer portfolio built around case studies — show the thinking behind the work, not just the screens.",
    priceInr: 9999,
    priceUsd: 120,
    category: "Designer",
    previewImage: "/portfolio-nizarali.png",
    features: ["UI/UX Showcase", "Case Studies", "Clean Design", "Contact Form"],
    techStack: ["React", "Framer Motion", "TailwindCSS"],
    demoUrl: "https://nizarali.framer.website/",
    isFeatured: true,
  },
  {
    id: "creative",
    name: "Creative Portfolio",
    description:
      "A bold, image-led portfolio for photographers, artists and content creators who lead with visuals.",
    priceInr: 950,
    priceUsd: 10,
    category: "Creative",
    previewImage: "/portfolio-creative.png",
    features: ["Full-bleed Gallery", "Reels & Video", "About Story", "Enquiry Form"],
    techStack: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: null,
    isFeatured: false,
  },
  {
    id: "personal",
    name: "Personal Brand Portfolio",
    description:
      "A clean personal site for students, freshers and professionals — about, experience, projects and contact in one page.",
    priceInr: 950,
    priceUsd: 10,
    category: "Personal",
    previewImage: "/portfolio-aman.png",
    features: ["About & Experience", "Project Cards", "Resume Download", "Contact Form"],
    techStack: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: null,
    isFeatured: false,
  },
];

export const templateCategories = [
  "All",
  ...Array.from(new Set(templates.map((t) => t.category))),
];
