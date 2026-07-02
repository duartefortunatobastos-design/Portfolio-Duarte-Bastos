import { useState, type FormEvent } from "react";
import {
  Github,
  Instagram,
  ArrowUpRight,
  Code2,
  Medal,
  Trophy,
  Timer,
  Brain,
  Languages,
  Network,
  Shield,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { LangProvider, useLang } from "./i18n";
import { TechLanguageIcon } from "./TechIcons";
import portrait from "@/assets/portrait.png";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import projectPap from "@/assets/project-pap.png";
import projectPortfolio from "@/assets/project-portfolio.png";
import projectAsapol from "@/assets/project-asapol.png";
import sports1 from "@/assets/sports-1.png";

const PROJECT_IMAGES = [projectPap, projectPortfolio, projectAsapol];

const PROJECT_BROWSER_PREVIEWS: ({ url: string; badge?: string } | null)[] = [
  { url: "lone-wolf-pap", badge: "PAP" },
  { url: "duarte-bastos-portfolio" },
  { url: "asapol" },
];

const LEARNING_ICONS = [Network, Shield];
const SPORT_ICONS = [Medal, Trophy, Timer];

export function Portfolio() {
  return (
    <LangProvider>
      <div className="bg-brand-bg text-foreground font-body min-h-screen">
        <Toaster />
        <Nav />
        <Hero />
        <About />
        <Story />
        <Projects />
        <Skills />
        <Sports />
        <Contact />
        <Footer />
      </div>
    </LangProvider>
  );
}

function LangToggle({ className = "" }: { className?: string }) {
  const { lang, toggle, t } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label={`Switch language to ${t.toggle}`}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-brand-surface/70 backdrop-blur text-[10px] uppercase tracking-widest font-bold text-white/80 hover:text-brand-accent hover:border-brand-accent/50 transition-colors ${className}`}
    >
      <Languages className="size-3.5" />
      <span>{lang.toUpperCase()}</span>
      <span className="text-white/30">/</span>
      <span className="text-brand-accent">{t.toggle}</span>
    </button>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const NAV = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.story, href: "#story" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.sports, href: "#sports" },
  ];
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display shrink-0 text-base font-bold tracking-tight text-white md:text-lg"
        >
          Duarte Bastos
        </a>
        <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-white/60">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-brand-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 bg-brand-primary/10 border border-brand-primary/40 rounded-full text-brand-accent hover:bg-brand-primary/20 transition-colors"
          >
            {t.nav.connect}
          </a>
          <LangToggle />
        </div>
        <div className="md:hidden flex items-center gap-3">
          <LangToggle />
          <button
            className="text-white/70 text-xs uppercase tracking-widest"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-brand-bg/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm uppercase tracking-widest">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-brand-accent"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="text-brand-accent">
              {t.nav.connect}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 md:px-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden bg-brand-bg">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.22] animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-brand-bg/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/20 via-brand-bg/60 to-brand-bg" />
        <div className="hero-grain absolute inset-0 opacity-[0.35]" />
        <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-brand-primary/10 blur-[160px] animate-float" />
        <div className="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-brand-accent/8 blur-[140px] animate-float [animation-delay:3s]" />
      </div>

      <div className="mx-auto w-full max-w-7xl pt-28 pb-32">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          <div
            className="shrink-0 animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            <img
              src={logo}
              alt="Duarte Bastos logo"
              className="h-36 w-auto object-contain sm:h-44 md:h-52 lg:h-60"
            />
          </div>

          <div className="max-w-4xl">
            <h1
              className="font-display text-[clamp(3.25rem,11vw,7rem)] font-bold leading-[0.92] tracking-[-0.045em] text-white animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              {t.hero.name}
            </h1>

            <p
              className="mt-6 md:mt-8 font-display text-lg md:text-2xl lg:text-[1.75rem] font-medium leading-snug tracking-[-0.02em] text-white/90 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              {t.hero.tagline1}
              <span className="mx-3 text-white/25 font-light">|</span>
              <span className="text-white/55">{t.hero.tagline2}</span>
            </p>

            <div
              className="mt-8 max-w-xl space-y-1 text-base md:text-lg leading-relaxed text-white/45 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <p>{t.hero.desc1}</p>
              <p>{t.hero.desc2}</p>
            </div>

            <div
              className="mt-10 flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-brand-bg transition-all duration-300 hover:scale-[1.02] hover:bg-white/90"
              >
                {t.hero.ctaProjects}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold tracking-wide text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                {t.hero.ctaAbout}
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-24 grid md:grid-cols-2 gap-16 items-start max-w-7xl mx-auto"
    >
      <div className="relative md:sticky md:top-28">
        <img
          src={portrait}
          alt="Duarte Bastos"
          loading="lazy"
          width={1024}
          height={1280}
          className="w-full aspect-[4/5] object-cover object-top rounded-2xl border border-white/5"
        />
      </div>
      <div className="space-y-8">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent">
          {t.about.kicker}
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          {t.about.title1} <span className="text-brand-primary">{t.about.title2}</span>
        </h2>
        <div className="space-y-4 text-justify text-lg leading-relaxed text-white/60">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>

        <div className="space-y-4 pt-2">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            {t.about.highlightsTitle}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {t.about.highlights.map((item) => (
              <div
                key={item}
                className="glass-card flex min-h-24 flex-col items-center justify-center rounded-xl border border-white/5 px-3 py-4 text-center transition-all duration-300 hover:border-brand-accent/40 hover:bg-brand-accent/5 hover:shadow-glow"
              >
                <span className="font-display text-sm font-bold text-white md:text-base">
                  {item}
                </span>
              </div>
            ))}
            <div className="glass-card flex min-h-24 flex-col items-center justify-center rounded-xl border border-brand-accent/20 bg-brand-accent/5 px-3 py-4 text-center transition-all duration-300 hover:border-brand-accent/40 hover:shadow-glow">
              <div className="font-display text-xl font-bold text-brand-accent md:text-2xl">
                {t.about.location.value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-white/70">
                {t.about.location.label}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent/70">
            {t.about.valuesTitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {t.about.values.map((item) => (
              <span
                key={item}
                className="rounded-full border border-brand-accent/20 bg-brand-accent/5 px-5 py-2 text-sm font-medium text-brand-accent backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  const { t } = useLang();
  return (
    <section id="story" className="py-32 px-6 md:px-24 border-t border-white/5 bg-brand-surface/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">
          {t.story.kicker}
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 leading-tight max-w-2xl">
          {t.story.title1} <span className="gradient-text">{t.story.title2}</span>.
        </h2>

        <ol className="relative ml-3 space-y-12 border-l border-white/10">
          {t.story.items.map((item) => (
            <li key={`${item.year}-${item.title}`} className="relative pl-8 group">
              <span className="absolute -left-[9px] top-2 size-4 rounded-full border-2 border-brand-primary bg-brand-bg transition-all group-hover:scale-125 group-hover:border-brand-accent" />
              <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-x-8">
                <span className="font-mono text-sm leading-snug text-brand-accent md:pt-1">
                  {item.year}
                </span>
                <div className="min-w-0">
                  <h3 className="mb-3 font-display text-xl font-bold leading-snug md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-justify leading-relaxed text-white/60">{item.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectBrowserPreview({
  image,
  title,
  url,
  badge,
}: {
  image: string;
  title: string;
  url: string;
  badge?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b10] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-500 group-hover:border-brand-accent/35 group-hover:shadow-glow">
      <div className="mb-3 flex items-center gap-2 border-b border-white/5 pb-3">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <div className="ml-1 min-w-0 flex-1 truncate rounded-md border border-white/5 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] text-white/35">
          {url}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-xl border border-white/5 bg-black">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={1200}
          height={800}
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b0b10] via-[#0b0b10]/40 to-transparent" />
      </div>
      {badge && (
        <span className="absolute top-7 right-5 rounded-full border border-brand-accent/30 bg-brand-bg/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-accent backdrop-blur-sm">
          {badge}
        </span>
      )}
    </div>
  );
}

function Projects() {
  const { t } = useLang();
  return (
    <section id="work" className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">
            {t.projects.kicker}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {t.projects.title1} <span className="text-brand-primary">{t.projects.title2}</span>
          </h2>
        </div>
        <p className="text-white/50 max-w-md text-justify md:text-left">{t.projects.intro}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {t.projects.items.map((project, i) => {
          const browserPreview = PROJECT_BROWSER_PREVIEWS[i];
          return (
          <article key={project.title} className="group flex flex-col">
            {browserPreview ? (
              <ProjectBrowserPreview
                image={PROJECT_IMAGES[i]}
                title={project.title}
                url={browserPreview.url}
                badge={browserPreview.badge}
              />
            ) : (
              <div className="relative overflow-hidden rounded-2xl border border-white/5 transition-colors group-hover:border-brand-accent/30">
                <img
                  src={PROJECT_IMAGES[i]}
                  alt={project.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent" />
              </div>
            )}

            <div className="mt-6 flex flex-1 flex-col">
              <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55 text-justify">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 px-2 py-1 font-mono text-[10px] text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                  rel={project.liveUrl.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-bg transition-all hover:bg-white/90"
                >
                  {t.projects.viewProject}
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={project.codeUrl}
                  target={project.codeUrl.startsWith("http") ? "_blank" : undefined}
                  rel={project.codeUrl.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all hover:border-brand-accent/40 hover:bg-brand-accent/10"
                >
                  {t.projects.code}
                  <Github className="size-4" />
                </a>
              </div>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}

function Skills() {
  const { t } = useLang();
  return (
    <section
      id="skills"
      className="py-32 px-6 md:px-24 border-t border-white/5 bg-brand-surface/20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent">
            {t.skills.kicker}
          </div>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            {t.skills.title1} <span className="text-brand-primary">{t.skills.title2}</span>
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 flex items-center gap-3 font-display text-2xl font-bold md:text-3xl">
              <Code2 className="size-7 text-brand-accent" />
              {t.skills.technicalTitle}
            </h3>
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
              {t.skills.languagesLabel}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {t.skills.tech.map((name) => (
                <div
                  key={name}
                  className="flex w-full items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/35 hover:bg-brand-accent/5 hover:shadow-glow sm:gap-2.5 sm:px-4"
                >
                  <TechLanguageIcon name={name} />
                  <span className="text-xs font-medium text-white/85 sm:text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-3 font-display text-2xl font-bold md:text-3xl">
              <Brain className="size-7 text-brand-accent" />
              {t.skills.otherTitle}
            </h3>
            <p className="mb-8 text-sm text-white/50">{t.skills.learningLabel}</p>
            <div className="space-y-4">
              {t.skills.learning.map((label, i) => {
                const Icon = LEARNING_ICONS[i];
                return (
                  <div
                    key={label}
                    className="glass-card group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-glow"
                  >
                    <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-brand-accent/20 bg-brand-accent/10 transition-transform duration-500 group-hover:scale-110">
                      <Icon
                        className="size-5 animate-float text-brand-accent"
                        style={{ animationDelay: `${i * 0.8}s` }}
                      />
                    </div>
                    <span className="font-display text-lg font-semibold">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sports() {
  const { t } = useLang();
  return (
    <section id="sports" className="py-32 px-6 md:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent">
              {t.sports.kicker}
            </div>
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              {t.sports.title1} <span className="gradient-text">{t.sports.title2}</span>
            </h2>
            <p className="mb-8 leading-relaxed text-white/60 text-justify">{t.sports.intro}</p>
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/5 lg:mx-0">
              <img
                src={sports1}
                alt="Duarte Bastos a jogar futebol"
                loading="lazy"
                width={768}
                height={1024}
                className="aspect-[3/4] w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="flex w-full flex-col justify-center gap-5">
            {t.sports.categories.map((category, i) => {
              const Icon = SPORT_ICONS[i];
              return (
                <div
                  key={category.sport}
                  className="glass-card flex w-full flex-col items-center gap-4 rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-glow"
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-brand-primary/30 bg-brand-primary/15">
                      <Icon className="size-5 text-brand-accent" />
                    </div>
                    <h3 className="font-display text-xl font-bold md:text-2xl">{category.sport}</h3>
                  </div>
                  <ul className="mx-auto w-full max-w-sm space-y-2">
                    {category.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-left text-sm leading-relaxed text-white/60 md:text-base"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const socialLinks = [
    { icon: Github, label: "GitHub", href: t.contact.social.github },
    { icon: Instagram, label: "Instagram", href: t.contact.social.instagram },
  ];

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
  const isComplete =
    trimmedName.length > 0 && trimmedEmail.length > 0 && trimmedMessage.length > 0 && emailIsValid;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast.error(t.contact.fillAllFields);
      return;
    }

    if (!emailIsValid) {
      toast.error(t.contact.invalidEmail);
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
      toast.success(t.contact.success);
    }, 700);
  }

  return (
    <section id="contact" className="border-t border-white/5 py-32 px-6 md:px-24">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent">
            {t.contact.kicker}
          </div>
          <h2 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl">
            {t.contact.title1} <span className="gradient-text">{t.contact.title2}</span>
          </h2>
          <p className="mb-10 leading-relaxed text-white/60">{t.contact.intro}</p>

          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            {t.contact.linksLabel}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <SocialLink key={label} icon={Icon} label={label} href={href} />
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="glass-card space-y-5 rounded-2xl border border-white/5 p-6 md:p-8"
        >
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            placeholder={t.contact.name}
            aria-label={t.contact.name}
            className="w-full rounded-xl border border-white/5 bg-brand-surface/60 px-5 py-4 text-white placeholder:text-white/40 transition-all focus:border-brand-accent/50 focus:outline-none"
          />
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder={t.contact.email}
            aria-label={t.contact.email}
            className="w-full rounded-xl border border-white/5 bg-brand-surface/60 px-5 py-4 text-white placeholder:text-white/40 transition-all focus:border-brand-accent/50 focus:outline-none"
          />
          <textarea
            id="contact-message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder={t.contact.message}
            aria-label={t.contact.message}
            className="w-full resize-none rounded-xl border border-white/5 bg-brand-surface/60 px-5 py-4 text-white placeholder:text-white/40 transition-all focus:border-brand-accent/50 focus:outline-none"
          />
          <button
            type="submit"
            disabled={submitting || !isComplete}
            className="w-full rounded-xl bg-brand-primary py-4 font-bold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {submitting ? t.contact.sending : t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}

function SocialLink({
  icon: Icon,
  label,
  href,
}: {
  icon: typeof Github;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="glass-card group inline-flex items-center gap-3 rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white/80 transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:text-brand-accent hover:shadow-glow"
    >
      <Icon className="size-4 transition-transform group-hover:scale-110" />
      {label}
    </a>
  );
}

function Footer() {
  const { t } = useLang();
  const socialLinks = [
    { icon: Github, label: "GitHub", href: t.contact.social.github },
    { icon: Instagram, label: "Instagram", href: t.contact.social.instagram },
  ];

  return (
    <footer className="px-6 pb-10 md:px-24">
      <div className="mx-auto max-w-7xl border-t border-white/5 pt-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-xl font-bold text-white md:text-2xl">{t.footer.name}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
              {t.footer.socialLabel}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:text-brand-accent hover:shadow-glow"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
