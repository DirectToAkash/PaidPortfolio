export type Audience = {
  slug: string;
  label: string;
  heading: string;
  title: string;
  description: string;
  intro: string;
  keywords: string[];
  problems: { title: string; body: string }[];
  includes: string[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  guideSlugs: string[];
};

const commonSteps = [
  {
    title: "Tell us about your work",
    body: "Send your resume, projects, photos or profile links through the enquiry form. No account, no call needed to start.",
  },
  {
    title: "We design and build it",
    body: "We structure the copy, lay out your sections and build the site so it loads fast and reads well on a phone.",
  },
  {
    title: "You review, then it goes live",
    body: "You see the finished site first and ask for changes. Once you are happy, it goes live on your own domain.",
  },
];

export const audiences: Audience[] = [
  {
    slug: "students",
    label: "Students",
    heading: "Portfolio website for students in India",
    title: "Portfolio Website for Students in India | Built for You",
    description:
      "A done-for-you portfolio website for college students in India. Show projects, internships and skills on one link recruiters can open in seconds.",
    intro:
      "A resume PDF gets skimmed for six seconds. A portfolio website gives a recruiter something to actually look at: your projects, what you built them with, and proof that you finish things. We build that site for you, so you can spend your time on placements instead of fighting a website builder.",
    keywords: [
      "portfolio website for students India",
      "portfolio website for college students",
      "student portfolio website examples",
      "portfolio website for final year students",
    ],
    problems: [
      {
        title: "Your projects live in five different places",
        body: "A GitHub repo here, a Drive folder there, a Canva deck somewhere else. A recruiter will not chase all three. One page collects everything worth showing.",
      },
      {
        title: "Free builders leave their name on your work",
        body: "Most free plans put a subdomain and a banner on your site. For a placement application, that reads as unfinished. Your site sits on your own domain with nothing borrowed.",
      },
      {
        title: "You do not have time to learn design",
        body: "Final year is projects, exams and applications at once. Building a website from scratch is a week you do not have. We hand you a finished one.",
      },
    ],
    includes: [
      "A hero section with your name, course and what you want to do next",
      "Project cards with the problem, your role and the tools you used",
      "Internships, certifications and coursework laid out clearly",
      "Resume download button and links to GitHub, LinkedIn and email",
      "Fast loading on a mobile phone, where most recruiters open links",
      "Your own domain, no builder branding anywhere on the page",
    ],
    steps: commonSteps,
    faqs: [
      {
        q: "I only have two or three college projects. Is that enough?",
        a: "Yes. Three projects explained properly beat ten listed as one-liners. We structure each one so the reader understands the problem and what you actually did.",
      },
      {
        q: "Can you build it before my placement season starts?",
        a: "Tell us your deadline in the enquiry form and we will confirm whether we can hit it before starting.",
      },
      {
        q: "Do I need to know code to update it later?",
        a: "No. Send us the change and we handle it, or we can walk you through editing text yourself.",
      },
    ],
    relatedSlugs: ["freshers", "developers", "designers"],
    guideSlugs: ["best-premium-portfolio-website-india"],
  },
  {
    slug: "freshers",
    label: "Freshers",
    heading: "Portfolio website for freshers with no experience",
    title: "Portfolio Website for Freshers | Stand Out With No Experience",
    description:
      "A personal portfolio website for freshers and first-time job seekers in India. Turn coursework, internships and side projects into proof you can be hired.",
    intro:
      "The hardest part of a fresher application is that every resume looks the same. A portfolio website is the one place where you can show work instead of listing adjectives, and almost nobody in your batch will have one.",
    keywords: [
      "portfolio website for freshers",
      "personal portfolio for job",
      "resume website for freshers",
      "portfolio website for job seekers",
    ],
    problems: [
      {
        title: "No work experience to point at",
        body: "Coursework, self-taught builds and volunteer work count when they are presented as work. We frame them the way a hiring manager reads them.",
      },
      {
        title: "Your resume gets filtered before a human sees it",
        body: "A portfolio link in your email signature, LinkedIn and applications gives you a second door into the conversation.",
      },
      {
        title: "You are applying to different kinds of roles",
        body: "One page, clearly organised, works for every application instead of rewriting your resume each time.",
      },
    ],
    includes: [
      "A short positioning line: who you are and the role you are targeting",
      "Projects and coursework written up as real work, not bullet points",
      "Skills grouped so a recruiter can scan them in a few seconds",
      "Contact form and resume download so responding is one click",
      "Clean, readable design that loads instantly on mobile",
      "Your own domain that you keep and control",
    ],
    steps: commonSteps,
    faqs: [
      {
        q: "What if I have nothing to put on it yet?",
        a: "Send us what you do have: coursework, a certification, one side project. We will tell you honestly whether it is enough or what would make it stronger.",
      },
      {
        q: "Is a portfolio website better than a LinkedIn profile?",
        a: "They do different jobs. LinkedIn proves you exist; a portfolio proves what you can build. Use both, and link one to the other.",
      },
      {
        q: "How long does it take?",
        a: "It depends on how much content you send and how many rounds of changes you want. We give you a timeline before starting.",
      },
    ],
    relatedSlugs: ["students", "developers", "job-seekers"],
    guideSlugs: ["best-premium-portfolio-website-india"],
  },
  {
    slug: "developers",
    label: "Developers",
    heading: "Developer portfolio website, designed and built for you",
    title: "Developer Portfolio Website | Custom Built, Not a Template Dump",
    description:
      "A custom developer portfolio website for software engineers, full stack and web developers in India. Projects, stack and GitHub presented properly.",
    intro:
      "You can build your own portfolio. The question is whether you want to spend three weekends picking a font instead of shipping. We build the site, you keep writing code, and the result looks like something a senior engineer would ship.",
    keywords: [
      "developer portfolio website",
      "portfolio website for web developers",
      "portfolio website for full stack developer",
      "portfolio website for software engineer fresher",
    ],
    problems: [
      {
        title: "Your GitHub is not a portfolio",
        body: "A repo list shows commits, not judgement. A portfolio explains why you built something and what the trade-offs were.",
      },
      {
        title: "The half-finished personal site",
        body: "Most developer portfolios die in a branch called redesign. Handing it off is the fastest way to actually have one.",
      },
      {
        title: "Recruiters do not read code",
        body: "The first person opening your link is often non-technical. The page has to work for them and for the engineer who reads it next.",
      },
    ],
    includes: [
      "Project case studies: the problem, your approach, the stack, the outcome",
      "A stack section that reads as capability rather than a logo wall",
      "GitHub, LinkedIn and live demo links wired into every project",
      "Fast, server-rendered pages that score well on performance checks",
      "A writing or open-source section if you want one",
      "Your own domain with clean, indexable pages",
    ],
    steps: commonSteps,
    faqs: [
      {
        q: "Can I take over the code later?",
        a: "Tell us what you need in the enquiry. We will confirm what is possible before you commit to anything.",
      },
      {
        q: "GitHub Pages is free. Why pay for this?",
        a: "GitHub Pages hosts a site; it does not decide what goes on it. What you are paying for is the structure, the writing and the finish.",
      },
      {
        q: "Can you match a specific design I like?",
        a: "Send the reference in your enquiry and we will tell you what we can do with it.",
      },
    ],
    relatedSlugs: ["students", "data-professionals", "freelancers"],
    guideSlugs: ["portfolio-website-for-software-developers-india"],
  },
  {
    slug: "designers",
    label: "UI/UX & graphic designers",
    heading: "Portfolio website for UI UX and graphic designers",
    title: "Portfolio Website for UI UX & Graphic Designers in India",
    description:
      "A custom portfolio website for UI UX, product and graphic designers in India. Own your case studies instead of renting a profile on someone else's platform.",
    intro:
      "Behance and Dribbble show your work next to everyone else's, in their layout, with their branding. A portfolio site is the one place where the presentation is also your design decision, and where a client lands with nothing else competing for attention.",
    keywords: [
      "portfolio website for UI UX designer",
      "portfolio website for graphic designer",
      "designer portfolio website India",
    ],
    problems: [
      {
        title: "Platform profiles flatten your work",
        body: "A grid of thumbnails hides your process. Case studies with context are what get you hired for the interesting projects.",
      },
      {
        title: "You redesign your own site forever",
        body: "Designers are the worst clients for themselves. An outside build ends the loop.",
      },
      {
        title: "Image-heavy sites load badly",
        body: "We compress and size your work properly so a client on mobile data still sees it in a second.",
      },
    ],
    includes: [
      "Case study pages: brief, process, decisions, final screens",
      "Optimised image handling so heavy visuals still load fast",
      "An about section that reads like a person, not a job description",
      "A clear enquiry path for clients and recruiters",
      "Links out to Behance, Dribbble or Instagram if you use them",
      "Your own domain and a layout you signed off on",
    ],
    steps: commonSteps,
    faqs: [
      {
        q: "Can I supply my own design?",
        a: "Yes. If you have Figma files, we can build from them. Mention it in the enquiry.",
      },
      {
        q: "Do you handle the copywriting?",
        a: "We structure it and draft it from what you send. You approve every word before launch.",
      },
      {
        q: "Can I add new projects myself?",
        a: "Tell us how often you plan to update and we will pick a setup that matches.",
      },
    ],
    relatedSlugs: ["developers", "freelancers", "content-writers"],
    guideSlugs: [
      "portfolio-website-for-uiux-designers-india",
      "portfolio-website-for-graphic-designers-india",
    ],
  },
  {
    slug: "freelancers",
    label: "Freelancers",
    heading: "Portfolio website for freelancers who want better clients",
    title: "Portfolio Website for Freelancers in India | Win Better Clients",
    description:
      "A professional portfolio website for freelancers in India. Stop sending screenshots over chat and send one link that closes the conversation.",
    intro:
      "Marketplaces take a cut and keep the client relationship. A portfolio site is the asset you own: the link you put in a pitch, a proposal or a cold email, where the price conversation starts on your terms instead of in a bidding war.",
    keywords: [
      "portfolio website for freelancers",
      "online portfolio to get hired",
      "professional portfolio website",
    ],
    problems: [
      {
        title: "Marketplace profiles put you next to the cheapest bid",
        body: "Your own site removes the price comparison and puts your work first.",
      },
      {
        title: "Sending work over chat looks amateur",
        body: "One link beats seven screenshots. It also lets the client forward you internally.",
      },
      {
        title: "No clear way for people to enquire",
        body: "We put a working enquiry form on the page and send submissions straight to you.",
      },
    ],
    includes: [
      "A services section written around what clients actually search for",
      "Selected work with outcomes, not just pictures",
      "A clear enquiry form that lands in your inbox",
      "A testimonials section ready to fill as clients send them",
      "Fast pages that hold up when you send the link mid-conversation",
      "Your own domain that you keep if you ever change services",
    ],
    steps: commonSteps,
    faqs: [
      {
        q: "Should I show my rates on the site?",
        a: "It depends on your market. We will lay out both options and you decide before we build.",
      },
      {
        q: "Can it handle enquiries from outside India?",
        a: "Yes. The page and the enquiry form work the same wherever the visitor is.",
      },
      {
        q: "What if I change what I offer later?",
        a: "Send us the update. Copy and section changes are straightforward.",
      },
    ],
    relatedSlugs: ["designers", "content-writers", "job-seekers"],
    guideSlugs: ["best-premium-portfolio-website-india"],
  },
  {
    slug: "data-professionals",
    label: "Data analysts & scientists",
    heading: "Portfolio website for data analysts and data scientists",
    title: "Portfolio Website for Data Analysts & Data Scientists in India",
    description:
      "A portfolio website for data analysts and data scientists in India. Show dashboards, notebooks and results in a way a hiring manager understands.",
    intro:
      "A notebook full of cells proves you can code. It does not prove you can answer a business question. A portfolio lets you lead with the question, the finding and the decision it supported, then link the notebook underneath for whoever wants it.",
    keywords: [
      "portfolio website for data analyst",
      "portfolio website for data scientist",
      "portfolio website for computer science students",
    ],
    problems: [
      {
        title: "Kaggle notebooks are not readable to hiring managers",
        body: "We put a plain-language summary in front of every project so a non-technical reader gets the point.",
      },
      {
        title: "Dashboards live behind logins",
        body: "Screenshots, a short walkthrough and the key numbers make the work visible without giving away access.",
      },
      {
        title: "Everything looks like a class assignment",
        body: "Framing matters. The same project reads very differently when it starts with a business question.",
      },
    ],
    includes: [
      "Project write-ups: question, data, method, finding, impact",
      "Charts and dashboard screenshots presented cleanly",
      "A tools and languages section that scans quickly",
      "Links to notebooks, repos and published dashboards",
      "Resume download and contact form",
      "Your own domain, fast pages, mobile-first layout",
    ],
    steps: commonSteps,
    faqs: [
      {
        q: "My data is confidential. Can I still show the project?",
        a: "Yes, with anonymised numbers and a described method. We will help you draw the line.",
      },
      {
        q: "How many projects should I include?",
        a: "Three strong ones is usually better than eight thin ones.",
      },
      {
        q: "Can you include a blog for my analyses?",
        a: "Yes, if you want one. Mention it in the enquiry.",
      },
    ],
    relatedSlugs: ["developers", "students", "mba"],
    guideSlugs: ["portfolio-website-for-data-scientists-india"],
  },
  {
    slug: "mba",
    label: "MBA students",
    heading: "Portfolio website for MBA students and graduates",
    title: "Portfolio Website for MBA Students & Graduates in India",
    description:
      "A personal portfolio website for MBA students and graduates in India. Present live projects, internships and case competitions beyond a one-page resume.",
    intro:
      "MBA hiring is crowded with near-identical resumes. A portfolio gives you room to explain the live project you ran, the case competition you placed in and the internship where you made an impact, with numbers.",
    keywords: [
      "portfolio website for MBA students",
      "personal portfolio for job",
      "professional portfolio website",
    ],
    problems: [
      {
        title: "One page is not enough room",
        body: "The interesting detail of your summer internship gets cut for space. On a portfolio, it gets a section.",
      },
      {
        title: "Everyone lists the same skills",
        body: "Specific outcomes with numbers separate you from a page of adjectives.",
      },
      {
        title: "Nothing to send after a networking chat",
        body: "A link is a better follow-up than an attachment, and it does not get lost in an inbox.",
      },
    ],
    includes: [
      "A positioning line for the function and industry you are targeting",
      "Internship and live-project write-ups with measurable outcomes",
      "Case competitions, certifications and leadership roles",
      "Resume download and LinkedIn link",
      "Clean, formal design that suits corporate recruiters",
      "Your own domain, fast on mobile",
    ],
    steps: commonSteps,
    faqs: [
      {
        q: "Is a portfolio normal for non-technical roles?",
        a: "It is uncommon, which is the advantage. Recruiters notice the ones who have it.",
      },
      {
        q: "Can I keep some details confidential?",
        a: "Yes. We can describe the work without naming the company or exact figures.",
      },
      {
        q: "How soon can it be ready?",
        a: "Send your deadline with the enquiry and we will confirm before starting.",
      },
    ],
    relatedSlugs: ["freshers", "data-professionals", "job-seekers"],
    guideSlugs: ["portfolio-website-for-mba-graduates-india"],
  },
  {
    slug: "content-writers",
    label: "Content writers & marketers",
    heading: "Portfolio website for content writers and digital marketers",
    title: "Portfolio Website for Content Writers & Digital Marketers",
    description:
      "A portfolio website for content writers and digital marketing professionals in India. Collect your best published work in one link clients can trust.",
    intro:
      "Drive links expire, PDFs get corrupted and published pieces disappear when a client redesigns. A portfolio site keeps your best work in one stable place, presented the way you would want a paying client to read it.",
    keywords: [
      "portfolio website for content writer",
      "portfolio website for digital marketing fresher",
      "online portfolio to get hired",
    ],
    problems: [
      {
        title: "Scattered clips across a dozen sites",
        body: "One page collects them with a short line on what each piece achieved.",
      },
      {
        title: "Samples in Drive folders feel unprofessional",
        body: "A clean page signals that you take your own work seriously.",
      },
      {
        title: "No proof of results",
        body: "Traffic, rankings or conversions next to the clip turn writing samples into a business case.",
      },
    ],
    includes: [
      "A clip library grouped by niche or format",
      "Short result notes next to each piece where you have them",
      "A services and rates section, if you want it public",
      "An enquiry form that reaches you directly",
      "Fast, readable typography built for long-form",
      "Your own domain, so links you share never break",
    ],
    steps: commonSteps,
    faqs: [
      {
        q: "Some clients want ghostwritten work kept private.",
        a: "We can present those as unattributed samples or leave them off entirely. Your call.",
      },
      {
        q: "Can I add new clips myself?",
        a: "Tell us how often you publish and we will pick a setup that fits.",
      },
      {
        q: "Do you write the about page?",
        a: "We draft it from what you send and you approve it.",
      },
    ],
    relatedSlugs: ["freelancers", "designers", "job-seekers"],
    guideSlugs: [
      "portfolio-website-for-content-writers-india",
      "portfolio-website-for-digital-marketers-india",
    ],
  },
  {
    slug: "job-seekers",
    label: "Job seekers",
    heading: "Portfolio website for job seekers changing roles",
    title: "Portfolio Website for Job Seekers in India | Get Noticed",
    description:
      "A personal portfolio website for job seekers and career switchers in India. One link that explains your experience better than a resume can.",
    intro:
      "When you are switching functions or coming back after a break, a resume works against you: it is a timeline, and timelines highlight gaps. A portfolio is organised by what you can do, which is the thing you actually want read first.",
    keywords: [
      "portfolio website for job seekers",
      "personal portfolio for job",
      "online portfolio to get hired",
    ],
    problems: [
      {
        title: "A resume forces a chronological story",
        body: "A portfolio leads with capability and puts dates where they belong: further down.",
      },
      {
        title: "Career switches need explaining",
        body: "A short, confident about section does the explaining before the interview.",
      },
      {
        title: "Applications disappear into a system",
        body: "A link in your signature and LinkedIn gives people a way to find you outside the queue.",
      },
    ],
    includes: [
      "A capability-first structure instead of a date-first timeline",
      "Work samples and outcomes from every relevant role",
      "An about section that addresses the switch head-on",
      "Resume download, contact form and LinkedIn link",
      "Fast, clean pages that work on any device",
      "Your own domain that stays yours between jobs",
    ],
    steps: commonSteps,
    faqs: [
      {
        q: "Can I hide my current employer?",
        a: "Yes. We can describe the work without naming the company.",
      },
      {
        q: "I am applying to two very different fields.",
        a: "We can build two focused sections, or a second page for the other track.",
      },
      {
        q: "Will it show up on Google under my name?",
        a: "We build pages so search engines can read them, but ranking depends on how common your name is and how much you link to the site.",
      },
    ],
    relatedSlugs: ["freshers", "mba", "freelancers"],
    guideSlugs: ["best-premium-portfolio-website-india"],
  },
  {
    slug: "doctors-and-clinicians",
    label: "Doctors & clinicians",
    heading: "Portfolio website for doctors, dentists and clinicians",
    title: "Portfolio Website for Doctors, Dentists & Clinicians in India",
    description:
      "A professional portfolio website for doctors, dentists and independent clinicians in India. Qualifications, services and appointment enquiries in one place.",
    intro:
      "Patients look you up before they book. What they find is usually a directory listing you do not control. A portfolio site puts your qualifications, your practice and a way to reach you on a page that belongs to you.",
    keywords: [
      "portfolio website for doctors",
      "portfolio website for dentists",
      "professional portfolio website India",
    ],
    problems: [
      {
        title: "Directory listings own your search results",
        body: "Your own site gives patients somewhere authoritative to land instead.",
      },
      {
        title: "No clear path to book",
        body: "An enquiry or appointment form on the page removes the phone-tag step.",
      },
      {
        title: "Credentials buried in a PDF",
        body: "Degrees, registrations, affiliations and areas of practice, laid out so a patient understands them.",
      },
    ],
    includes: [
      "Qualifications, registrations and areas of practice",
      "Services or treatments explained in plain language",
      "Clinic details, timings and location",
      "An appointment or enquiry form that reaches you directly",
      "Reassuring, uncluttered design that loads fast on mobile",
      "Your own domain and clean, indexable pages",
    ],
    steps: commonSteps,
    faqs: [
      {
        q: "Can patients book directly?",
        a: "We can add an enquiry form as standard, or a booking flow if you need one. Mention it in the enquiry.",
      },
      {
        q: "Can you follow medical advertising rules?",
        a: "We keep claims factual and stick to what you supply. You approve every line before launch.",
      },
      {
        q: "Do you handle multiple clinic locations?",
        a: "Yes. Tell us how many in the enquiry form.",
      },
    ],
    relatedSlugs: ["freelancers", "job-seekers", "designers"],
    guideSlugs: [
      "portfolio-website-for-doctors-india",
      "portfolio-website-for-dentists-india",
    ],
  },
];

export const audiencesBySlug: Record<string, Audience> = Object.fromEntries(
  audiences.map((a) => [a.slug, a]),
);

export function getAudience(slug: string): Audience | undefined {
  return audiencesBySlug[slug];
}
