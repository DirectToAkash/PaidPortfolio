import {
  type User,
  type InsertUser,
  type PortfolioTemplate,
  type InsertTemplate,
  type Order,
  type InsertOrder,
  type CustomRequest,
  type InsertCustomRequest,
  type ContactMessage,
  type InsertContact,
  type Testimonial
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Templates
  getTemplates(): Promise<PortfolioTemplate[]>;
  getTemplate(id: string): Promise<PortfolioTemplate | undefined>;
  getFeaturedTemplates(): Promise<PortfolioTemplate[]>;
  createTemplate(template: InsertTemplate): Promise<PortfolioTemplate>;

  // Orders
  getOrders(): Promise<Order[]>;
  getOrder(id: string): Promise<Order | undefined>;
  getOrdersByUser(userId: string): Promise<Order[]>;
  createOrder(order: InsertOrder): Promise<Order>;

  // Custom Requests
  getCustomRequests(): Promise<CustomRequest[]>;
  getCustomRequest(id: string): Promise<CustomRequest | undefined>;
  createCustomRequest(request: InsertCustomRequest): Promise<CustomRequest>;

  // Contact Messages
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContact): Promise<ContactMessage>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private templates: Map<string, PortfolioTemplate>;
  private orders: Map<string, Order>;
  private customRequests: Map<string, CustomRequest>;
  private contactMessages: Map<string, ContactMessage>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.users = new Map();
    this.templates = new Map();
    this.orders = new Map();
    this.customRequests = new Map();
    this.contactMessages = new Map();
    this.testimonials = new Map();

    this.seedData();
    // Force rebuild to pick up new template data
  }

  private seedData() {
    // Seed templates
    const templateData: Omit<PortfolioTemplate, "id">[] = [
      {
        name: "Developer Pro",
        description: "A sleek, modern portfolio template perfect for software developers and engineers. Features code snippets, project showcases, and GitHub integration.",
        price: 10,
        priceInr: 950,
        category: "Developer",
        previewImage: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=500&fit=crop",
        features: ["GitHub Integration", "Code Snippets", "Dark Mode", "Contact Form"],
        techStack: ["React", "TailwindCSS", "Framer Motion"],
        demoUrl: "#",
        isFeatured: true,
        rating: 5,
        reviewCount: 124,
      },
      {
        name: "Creative Studio",
        description: "Bold and artistic template for designers, photographers, and creative professionals. Stunning gallery layouts and smooth animations.",
        price: 10,
        priceInr: 950,
        category: "Designer",
        previewImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
        features: ["Image Gallery", "Lightbox", "Animation Effects", "Portfolio Grid"],
        techStack: ["Next.js", "GSAP", "Styled Components"],
        demoUrl: "#",
        isFeatured: true,
        rating: 5,
        reviewCount: 98,
      },
      {
        name: "Minimal Edge",
        description: "Clean and minimalist design that puts your work front and center. Perfect for those who appreciate simplicity.",
        price: 10,
        priceInr: 950,
        category: "Minimal",
        previewImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
        features: ["Minimal Design", "Fast Loading", "SEO Optimized", "Mobile First"],
        techStack: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        isFeatured: false,
        rating: 4,
        reviewCount: 156,
      },
      {
        name: "Tech Pioneer",
        description: "Futuristic template with cutting-edge design elements. Perfect for tech enthusiasts and innovators.",
        price: 10,
        priceInr: 950,
        category: "Developer",
        previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        features: ["3D Elements", "Particle Effects", "Terminal Style", "API Ready"],
        techStack: ["React", "Three.js", "TailwindCSS"],
        demoUrl: "#",
        isFeatured: true,
        rating: 5,
        reviewCount: 87,
      },
      {
        name: "Portfolio X",
        description: "Versatile and adaptable template that works for any profession. Easy to customize and personalize.",
        price: 10,
        priceInr: 950,
        category: "Creative",
        previewImage: "https://images.unsplash.com/photo-1522542550221-31fd8575f9f0?w=800&h=500&fit=crop",
        features: ["Multi-page", "Blog Ready", "Contact Form", "Social Links"],
        techStack: ["Vue.js", "Nuxt", "SCSS"],
        demoUrl: "#",
        isFeatured: false,
        rating: 4,
        reviewCount: 112,
      },
      {
        name: "Dark Matter",
        description: "A stunning dark-themed portfolio with elegant typography and subtle animations. Perfect for night owls.",
        price: 10,
        priceInr: 950,
        category: "Modern",
        previewImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
        features: ["Dark Theme", "Smooth Scroll", "Lazy Loading", "SEO Ready"],
        techStack: ["React", "Chakra UI", "Framer Motion"],
        demoUrl: "#",
        isFeatured: true,
        rating: 5,
        reviewCount: 203,
      },
      {
        name: "Starter Kit",
        description: "Perfect for beginners and students. Simple setup, easy customization, and comprehensive documentation.",
        price: 10,
        priceInr: 950,
        category: "Minimal",
        previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
        features: ["Easy Setup", "Documentation", "Responsive", "Fast"],
        techStack: ["HTML", "TailwindCSS", "Alpine.js"],
        demoUrl: "#",
        isFeatured: false,
        rating: 4,
        reviewCount: 89,
      },
      {
        name: "Gradient Flow",
        description: "Eye-catching gradients and flowing animations create a memorable first impression.",
        price: 10,
        priceInr: 950,
        category: "Creative",
        previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
        features: ["Gradient Backgrounds", "Smooth Animations", "Modern Layout", "Contact Form"],
        techStack: ["React", "CSS Modules", "Lottie"],
        demoUrl: "#",
        isFeatured: false,
        rating: 4,
        reviewCount: 67,
      },
      {
        name: "Open Book Portfolio",
        description: "A personal portfolio template designed to showcase your work and personality. Features a clean layout and easy customization.",
        price: 10,
        priceInr: 950,
        category: "Personal",
        previewImage: "/portfolio-creative.png",
        features: ["Personal Branding", "About Section", "Project Gallery", "Contact Link"],
        techStack: ["React", "TailwindCSS"],
        demoUrl: "https://directtoakash.github.io/NewPortfolio/",
        isFeatured: true,
        rating: 5,
        reviewCount: 42,
      },
    ];

    templateData.forEach((template) => {
      const id = randomUUID();
      this.templates.set(id, { ...template, id });
    });

    // Seed testimonials
    const testimonialData: Omit<Testimonial, "id">[] = [
      {
        name: "Sarah Chen",
        role: "Software Engineer at Google",
        content: "My portfolio from PaidPortfolio helped me land interviews at top tech companies. The design is stunning and recruiters always compliment it.",
        avatar: null,
        rating: 5,
      },
      {
        name: "Marcus Johnson",
        role: "UX Designer at Apple",
        content: "I went from getting zero callbacks to multiple offers. The custom portfolio they built for me truly showcases my work in the best light.",
        avatar: null,
        rating: 5,
      },
      {
        name: "Emily Rodriguez",
        role: "Freelance Developer",
        content: "Worth every penny! My client inquiries increased 10x after launching my new portfolio. The ROI is incredible.",
        avatar: null,
        rating: 5,
      },
    ];

    testimonialData.forEach((testimonial) => {
      const id = randomUUID();
      this.testimonials.set(id, { ...testimonial, id });
    });
  }

  // Users
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = {
      ...insertUser,
      id,
      email: insertUser.email || null,
      role: "user"
    };
    this.users.set(id, user);
    return user;
  }

  // Templates
  async getTemplates(): Promise<PortfolioTemplate[]> {
    return Array.from(this.templates.values());
  }

  async getTemplate(id: string): Promise<PortfolioTemplate | undefined> {
    return this.templates.get(id);
  }

  async getFeaturedTemplates(): Promise<PortfolioTemplate[]> {
    return Array.from(this.templates.values()).filter(t => t.isFeatured);
  }

  async createTemplate(insertTemplate: InsertTemplate): Promise<PortfolioTemplate> {
    const id = randomUUID();
    const template: PortfolioTemplate = {
      ...insertTemplate,
      id,
      demoUrl: insertTemplate.demoUrl || null,
      isFeatured: insertTemplate.isFeatured ?? false,
      rating: insertTemplate.rating ?? 5,
      reviewCount: insertTemplate.reviewCount ?? 0,
      features: insertTemplate.features || null,
      techStack: insertTemplate.techStack || null,
      priceInr: insertTemplate.priceInr ?? 0,
    };
    this.templates.set(id, template);
    return template;
  }

  // Orders
  async getOrders(): Promise<Order[]> {
    return Array.from(this.orders.values());
  }

  async getOrder(id: string): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async getOrdersByUser(userId: string): Promise<Order[]> {
    return Array.from(this.orders.values()).filter(o => o.userId === userId);
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = randomUUID();
    const order: Order = {
      ...insertOrder,
      id,
      userId: insertOrder.userId || null,
      templateId: insertOrder.templateId || null,
      status: insertOrder.status ?? "pending"
    };
    this.orders.set(id, order);
    return order;
  }

  // Custom Requests
  async getCustomRequests(): Promise<CustomRequest[]> {
    return Array.from(this.customRequests.values());
  }

  async getCustomRequest(id: string): Promise<CustomRequest | undefined> {
    return this.customRequests.get(id);
  }

  async createCustomRequest(insertRequest: InsertCustomRequest): Promise<CustomRequest> {
    const id = randomUUID();
    const request: CustomRequest = {
      ...insertRequest,
      id,
      phone: insertRequest.phone || null,
      profession: insertRequest.profession || null,
      status: "pending"
    };
    this.customRequests.set(id, request);
    return request;
  }

  // Contact Messages
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async createContactMessage(insertMessage: InsertContact): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      status: "unread"
    };
    this.contactMessages.set(id, message);
    return message;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
}

export const storage = new MemStorage();
