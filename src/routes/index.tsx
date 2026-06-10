import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Award,
  Briefcase,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Send,
  Sparkles,
  Sun,
  Trophy,
  Wrench,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandhiya R — Aspiring Java Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sandhiya R, aspiring Java Developer and ECE student passionate about full stack development, problem solving, and continuous learning.",
      },
      { property: "og:title", content: "Sandhiya R — Aspiring Java Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Sandhiya R — Java, Full Stack, ServiceNow Development.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const SKILLS = {
  Programming: [
    { name: "Java (1.7 / 1.8 / 17)", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
  ],
  Database: [{ name: "MySQL", level: 80 }],
  Tools: [
    { name: "Eclipse", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Google Colab", level: 70 },
    { name: "Zoho Creator", level: 70 },
  ],
  AI: [{ name: "Prompt Engineering", level: 80 }],
};

const PROJECTS = [
  {
    title: "Stay On Track",
    desc: "A productivity management application that helps users minimize distractions and stay focused on their goals.",
    tech: ["Java", "HTML", "CSS"],
    features: [
      "Distraction blocker & focus timer",
      "Daily goal tracking",
      "Clean, minimal UI",
    ],
    link: "#",
  },
  {
    title: "Online Food Delivery System",
    desc: "A responsive food ordering platform with menu browsing, cart, and order management.",
    tech: ["Java", "HTML", "CSS", "MySQL"],
    features: [
      "Dynamic menu & cart",
      "Order tracking",
      "MySQL-backed persistence",
    ],
    link: "#",
  },
  {
    title: "Temple Survey Management System",
    desc: "A web-based survey application to digitize and manage temple data collection workflows.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    features: [
      "Structured survey forms",
      "Admin dashboard",
      "Searchable records",
    ],
    link: "#",
  },
];

const EDUCATION = [
  {
    title: "B.E. Electronics and Communication Engineering",
    place: "M. Kumarasamy College of Engineering, Karur",
    period: "2023 – Present",
    detail: "CGPA: 7.45",
  },
  { title: "Higher Secondary (HSC)", place: "", period: "Completed", detail: "76%" },
  { title: "SSLC", place: "", period: "Completed", detail: "80%" },
];

const ACHIEVEMENTS = [
  "Pursuing ServiceNow CSA & Developer Certifications",
  "Completed Internship at Wipro Infrastructure Engineering",
  "Participated in National Level Makeathon",
  "Presented papers at engineering colleges",
  "Attended workshops on Data Science, Web Development & Emerging Tech",
];

const SOFT_SKILLS = [
  "Problem Solving",
  "Critical Thinking",
  "Adaptability",
  "Communication",
];

function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(n.id);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased scroll-smooth selection:bg-primary/30">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-accent-glow/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="font-display text-lg font-bold tracking-tight">
            Sandhiya<span className="text-primary">.</span>
          </button>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  active === n.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark((d) => !d)}
              className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <button
              onClick={() => setMenuOpen((m) => !m)}
              className="lg:hidden p-2 rounded-lg border border-border"
              aria-label="Menu"
            >
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="px-6 py-3 flex flex-col">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="text-left py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur text-xs text-muted-foreground mb-6">
              <Sparkles className="size-3 text-primary" />
              Available for placements & internships
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Sandhiya R
              <span className="block mt-2 bg-gradient-to-r from-primary via-accent-glow to-primary bg-clip-text text-transparent">
                Aspiring Java Developer
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Full Stack Development Enthusiast
            </p>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
              Building efficient software solutions through clean code,
              problem-solving, and a commitment to continuous learning. Focused on
              Java, full stack development, and ServiceNow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-all"
              >
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card/60 backdrop-blur hover:bg-secondary transition-colors font-medium"
              >
                <Mail className="size-4" /> Contact Me
              </button>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card/60 backdrop-blur hover:bg-secondary transition-colors font-medium"
              >
                <Download className="size-4" /> Resume
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 max-w-md gap-6">
              {[
                { k: "3+", v: "Projects" },
                { k: "1", v: "Internship" },
                { k: "7.45", v: "CGPA" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl font-bold text-primary">{s.k}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 to-accent-glow/30 blur-2xl" />
              <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-xl p-8 shadow-elegant">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-card to-accent-glow/20 flex items-center justify-center">
                  <span className="font-display text-8xl font-bold bg-gradient-to-br from-primary to-accent-glow bg-clip-text text-transparent">
                    SR
                  </span>
                </div>
                <div className="mt-6 space-y-3 text-sm">
                  <Row icon={<GraduationCap className="size-4 text-primary" />} label="B.E. ECE • 2023–Present" />
                  <Row icon={<MapPin className="size-4 text-primary" />} label="Karur, Tamil Nadu" />
                  <Row icon={<Code2 className="size-4 text-primary" />} label="Java • Full Stack • ServiceNow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="01 — About" title="A short introduction.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <Code2 className="size-6 text-primary mb-3" />
            <h3 className="font-display font-semibold mb-2">Java Developer</h3>
            <p className="text-sm text-muted-foreground">
              Passionate about Java and building reliable, well-structured software with a focus on clean code.
            </p>
          </Card>
          <Card>
            <Sparkles className="size-6 text-primary mb-3" />
            <h3 className="font-display font-semibold mb-2">Full Stack & ServiceNow</h3>
            <p className="text-sm text-muted-foreground">
              Exploring full stack development and ServiceNow to design end-to-end digital experiences.
            </p>
          </Card>
          <Card>
            <GraduationCap className="size-6 text-primary mb-3" />
            <h3 className="font-display font-semibold mb-2">ECE Student</h3>
            <p className="text-sm text-muted-foreground">
              Pursuing B.E. Electronics & Communication Engineering with a strong inclination toward software.
            </p>
          </Card>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow="02 — Education" title="Academic journey.">
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />
          <div className="space-y-8">
            {EDUCATION.map((e, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[26px] md:-left-[34px] top-2 size-4 rounded-full bg-primary ring-4 ring-background shadow-glow" />
                <Card>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display font-semibold">{e.title}</h3>
                      {e.place && <p className="text-sm text-muted-foreground">{e.place}</p>}
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-medium">{e.detail}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="03 — Skills" title="Tools & technologies.">
        <div className="grid md:grid-cols-2 gap-6">
          <SkillGroup icon={<Code2 className="size-5" />} title="Programming" items={SKILLS.Programming} />
          <SkillGroup icon={<Database className="size-5" />} title="Database" items={SKILLS.Database} />
          <SkillGroup icon={<Wrench className="size-5" />} title="Tools" items={SKILLS.Tools} />
          <SkillGroup icon={<Sparkles className="size-5" />} title="AI Skills" items={SKILLS.AI} />
        </div>
        <div className="mt-10">
          <h3 className="font-display font-semibold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {SOFT_SKILLS.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm border border-border bg-card/60 backdrop-blur hover:border-primary/60 hover:text-primary transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="04 — Projects" title="Selected work.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 shadow-elegant flex flex-col"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Code2 className="size-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Tech</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-5 flex-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Key Features</p>
                <ul className="space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={p.link}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-sm font-medium"
              >
                <Github className="size-4" /> View on GitHub
              </a>
            </article>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="05 — Experience" title="Internship.">
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />
          <div className="relative">
            <div className="absolute -left-[26px] md:-left-[34px] top-2 size-4 rounded-full bg-primary ring-4 ring-background shadow-glow" />
            <Card>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-display text-lg font-semibold">Product Designing Intern</h3>
                  <p className="text-sm text-primary font-medium">Wipro Infrastructure Engineering</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  June – July 2025
                </span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Worked on product design concepts and iterations.",
                  "Collaborated with cross-functional technical teams.",
                  "Improved usability and functionality of design outputs.",
                  "Gained hands-on experience in prototyping and product development.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Briefcase className="size-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" eyebrow="06 — Achievements" title="Highlights.">
        <div className="grid sm:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((a, i) => (
            <Card key={a} className="flex items-start gap-4">
              <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                {i % 2 === 0 ? (
                  <Trophy className="size-5 text-primary" />
                ) : (
                  <Award className="size-5 text-primary" />
                )}
              </div>
              <p className="text-sm pt-1.5">{a}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="07 — Contact" title="Let's connect.">
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="space-y-5">
            <p className="text-sm text-muted-foreground">
              Open to internships, placements, and collaboration on interesting software projects. Reach out via any of the channels below.
            </p>
            <div className="space-y-3">
              <ContactRow icon={<Mail className="size-4" />} label="Email" value="sandhiya.r@example.com" href="mailto:sandhiya.r@example.com" />
              <ContactRow icon={<Phone className="size-4" />} label="Phone" value="+91 00000 00000" href="tel:+910000000000" />
              <ContactRow icon={<Linkedin className="size-4" />} label="LinkedIn" value="linkedin.com/in/sandhiya-r" href="#" />
              <ContactRow icon={<Github className="size-4" />} label="GitHub" value="github.com/sandhiya-r" href="#" />
            </div>
          </Card>
          <ContactForm />
        </div>
      </Section>

      <footer className="border-t border-border/60 mt-12">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sandhiya R. All rights reserved.</p>
          <p>Built with care · Java · Full Stack · ServiceNow</p>
        </div>
      </footer>
    </div>
  );
}

function Row({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 text-muted-foreground">
      <span className="size-8 rounded-lg bg-secondary/60 flex items-center justify-center">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-6 shadow-elegant ${className}`}>
      {children}
    </div>
  );
}

function SkillGroup({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: { name: string; level: number }[];
}) {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-5">
        <span className="size-9 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
          {icon}
        </span>
        <h3 className="font-display font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {items.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between text-sm mb-1.5">
              <span>{s.name}</span>
              <span className="text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent-glow transition-all duration-1000"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 p-3 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/50 transition-colors group"
    >
      <span className="size-10 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-sm font-medium truncate">{value}</p>
      </div>
    </a>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };
  return (
    <Card>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
        </div>
        <Field label="Subject" name="subject" required />
        <div>
          <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            maxLength={1000}
            className="mt-1.5 w-full rounded-lg bg-background/60 border border-border px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-all"
        >
          {sent ? "Message sent ✓" : (<>Send Message <Send className="size-4" /></>)}
        </button>
      </form>
    </Card>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="mt-1.5 w-full rounded-lg bg-background/60 border border-border px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}
