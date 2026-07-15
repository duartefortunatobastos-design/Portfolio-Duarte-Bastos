import { useState, type ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import {
  Github,
  Instagram,
  ArrowUpRight,
  ArrowUp,
  Code2,
  Medal,
  Languages,
  Network,
  Shield,
  Mail,
  Globe,
  Layout,
  Wrench,
  Server,
} from "lucide-react";
import { LangProvider, useLang } from "./i18n";
import { TechLanguageIcon } from "./TechIcons";
import { FadeIn, FadeInItem } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import portrait from "@/assets/portrait.png";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import projectPap from "@/assets/project-pap.png";
import projectAsapol from "@/assets/project-asapol.png";
import { CookieConsent } from "@/components/legal/CookieConsent";

const PROJECT_IMAGES = [projectPap, projectAsapol];

const PROJECT_BROWSER_PREVIEWS: ({ url: string; badge?: string } | null)[] = [
  { url: "lone-wolf-pap" },
  { url: "asapol" },
];

const HERO_FOCUS_ICONS = [Globe, Code2, Layout, Wrench];
const SERVICE_ICONS = [Globe, Code2, Layout, Wrench];
const GROWTH_ICONS = [Network, Shield, Server];

const SECTION_Y = "py-20 sm:py-24 md:py-28 lg:py-32";
const SECTION_X = "px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function useSocialLinks() {
  const { t } = useLang();

  return [
    { icon: Github, label: "GitHub", href: t.contact.social.github },
    { icon: Instagram, label: "Instagram", href: t.contact.social.instagram },
  ];
}

export function Portfolio() {
  return (
    <LangProvider>
      <div className="bg-brand-bg text-foreground font-body min-h-screen overflow-x-clip">
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <CookieConsent />
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
  const { activeId, scrolled } = useScrollSpy();
  const NAV = [
    { label: t.nav.home, href: "#top", id: "top" },
    { label: t.nav.about, href: "#about", id: "about" },
    { label: t.nav.projects, href: "#projects", id: "projects" },
    { label: t.nav.skills, href: "#skills", id: "skills" },
  ];
  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)] ${
        scrolled
          ? "border-white/10 bg-brand-bg/90 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-white/5 bg-brand-bg/70 backdrop-blur-md"
      }`}
    >
      <div className={`mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 sm:h-16 ${SECTION_X}`}>
        <a
          href="#top"
          className="group font-display text-sm font-bold tracking-tight text-white transition-colors hover:text-brand-accent sm:text-base"
        >
          {t.nav.brand}
        </a>
        <div className="hidden items-center gap-4 text-[10px] font-medium uppercase tracking-widest text-white/60 lg:flex xl:gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-active={activeId === item.id}
              className="nav-link transition-colors hover:text-brand-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            data-active={activeId === "contact"}
            className="rounded-full border border-brand-primary/40 bg-brand-primary/10 px-4 py-2 text-brand-accent transition-all duration-300 hover:scale-[1.03] hover:bg-brand-primary/20 hover:shadow-glow"
          >
            {t.nav.contact}
          </a>
          <LangToggle />
        </div>
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <LangToggle />
          <button
            className="min-h-11 min-w-11 px-2 text-[10px] uppercase tracking-widest text-white/70 transition-colors hover:text-brand-accent sm:text-xs"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>
      <div
        className={`overflow-hidden border-t border-white/5 bg-brand-bg/95 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-3 sm:px-6 sm:py-4">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              className={`rounded-lg px-2 py-3 text-sm uppercase tracking-widest transition-all duration-300 hover:bg-white/5 hover:text-brand-accent ${
                activeId === item.id ? "text-brand-accent" : "text-white/70"
              } ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-lg px-2 py-3 text-sm uppercase tracking-widest text-brand-accent transition-colors hover:bg-brand-accent/10"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section
      id="top"
      className={`relative flex min-h-[100dvh] items-center overflow-hidden ${SECTION_X}`}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden bg-brand-bg">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18] animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-brand-bg/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/10 via-brand-bg/70 to-brand-bg" />
        <div className="hero-grain absolute inset-0 opacity-[0.3]" />
        <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-brand-primary/10 blur-[160px] animate-float-slow" />
        <div className="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-brand-accent/8 blur-[140px] animate-float-slow [animation-delay:3s]" />
      </div>

      <div className="mx-auto w-full max-w-7xl pb-20 pt-24 sm:pb-24 sm:pt-28 md:pb-28 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 xl:gap-20">
          <div className="min-w-0 text-center lg:text-left">
            <FadeIn immediate delay={80}>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-accent sm:text-sm">
                {t.hero.kicker}
              </p>
            </FadeIn>

            <FadeIn immediate delay={140}>
              <div className="mt-4 flex flex-col items-center gap-6 sm:gap-7 lg:flex-row lg:items-center lg:justify-start lg:gap-8 xl:gap-10">
                <div className="relative shrink-0">
                  <div
                    className="pointer-events-none absolute inset-0 scale-[1.35] rounded-full bg-brand-accent/12 blur-2xl"
                    aria-hidden="true"
                  />
                  <img
                    src={logo}
                    alt="DB13 — Duarte Bastos logo"
                    className="relative h-24 w-auto max-w-[11rem] object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.12)] sm:h-28 sm:max-w-[13rem] md:h-32 lg:h-36 xl:h-40"
                  />
                </div>
                <h1 className="font-display text-[clamp(3rem,11vw,6.5rem)] font-bold leading-[0.9] tracking-[-0.05em] text-shimmer">
                  <span className="block">{t.hero.nameLine1}</span>
                  <span className="block">{t.hero.nameLine2}</span>
                </h1>
              </div>
            </FadeIn>

            <FadeIn immediate delay={220}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg lg:mx-0">
                {t.hero.pitch}
              </p>
            </FadeIn>

            <FadeIn immediate delay={300}>
              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold tracking-wide text-brand-bg shadow-[0_4px_24px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.03] hover:bg-white/90 sm:w-auto sm:px-8"
                >
                  {t.hero.ctaProjects}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#about"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:w-auto sm:px-8"
                >
                  {t.hero.ctaAbout}
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-brand-accent/30 bg-brand-accent/10 px-6 py-3 text-sm font-semibold tracking-wide text-brand-accent backdrop-blur-sm transition-all duration-300 hover:border-brand-accent/50 hover:bg-brand-accent/15 sm:w-auto sm:px-8"
                >
                  {t.hero.ctaContact}
                </a>
              </div>
            </FadeIn>

            <FadeIn immediate delay={380}>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {t.hero.focusAreas.map((area, i) => {
                  const Icon = HERO_FOCUS_ICONS[i];
                  return (
                    <div
                      key={area.title}
                      className="glass-card rounded-2xl border border-white/8 p-4 text-left transition-colors hover:border-brand-accent/25 sm:p-5"
                    >
                      <div className="mb-3 grid size-9 place-items-center rounded-xl border border-brand-accent/20 bg-brand-accent/10">
                        <Icon className="size-4 text-brand-accent" aria-hidden="true" />
                      </div>
                      <p className="font-display text-sm font-bold text-white">{area.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                        {area.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          <FadeIn immediate delay={160} className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <img
                src={portrait}
                alt="Duarte Bastos"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 rounded-full border border-brand-accent/35 bg-brand-bg/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-accent backdrop-blur-sm">
                {t.about.availableBadge}
              </div>
              <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-white/10 bg-brand-bg/90 p-4 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">
                  {t.about.roleDeveloper}
                </p>
                <p className="mt-1 font-display text-sm font-bold text-white">{t.about.roleBrand}</p>
              </div>
            </div>
          </FadeIn>
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
      className={`mx-auto max-w-7xl ${SECTION_Y} ${SECTION_X}`}
    >
      <SectionHeader
        kicker={t.about.kicker}
        title={
          <>
            {t.about.title1} <span className="text-brand-primary">{t.about.title2}</span>
          </>
        }
      />

      <FadeIn delay={60}>
        <p className="mx-auto max-w-3xl text-center text-[1.05rem] font-medium leading-relaxed text-white/82 text-pretty sm:text-lg sm:leading-[1.75]">
          {t.about.lead}
        </p>
      </FadeIn>

      <FadeIn delay={120}>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {t.about.stats.map((stat, i) => (
            <FadeInItem key={stat.label} index={i} baseDelay={0} step={60}>
              <div className="glass-card rounded-2xl border border-white/8 p-4 text-center sm:p-5">
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            </FadeInItem>
          ))}
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
        {t.about.blocks.map((block, i) => (
          <FadeIn key={block.title} delay={160 + i * 80}>
            <article className="glass-card h-full rounded-2xl border border-white/5 p-5 sm:p-6">
              <h3 className="mb-3 font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
                {block.title}
              </h3>
              <p className="text-sm leading-[1.8] text-white/58 text-pretty sm:text-[0.95rem]">
                {block.body}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={280}>
        <div className="mt-8 rounded-2xl border border-brand-accent/15 bg-brand-accent/[0.04] px-5 py-4 sm:px-6 sm:py-5">
          <p className="text-sm leading-relaxed text-white/72 text-pretty sm:text-[0.98rem] sm:leading-[1.75]">
            {t.about.closing}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={340}>
        <div className="mt-12 space-y-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent/70">
            {t.about.experienceTitle}
          </p>
          <ol className="relative space-y-8 sm:space-y-10">
            {t.about.experience.map((item, i) => (
              <FadeInItem key={`${item.year}-${item.title}`} index={i} baseDelay={0} step={80}>
                <li className="relative pl-6 group sm:pl-8">
                  <span className="absolute -left-[9px] top-2 size-4 rounded-full border-2 border-brand-primary bg-brand-bg shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-500 group-hover:scale-125 group-hover:border-brand-accent group-hover:shadow-glow" />
                  <div className="grid grid-cols-1 items-start gap-2 rounded-2xl border border-transparent p-4 transition-all duration-500 group-hover:border-white/5 group-hover:bg-white/[0.02] sm:gap-3 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-x-6">
                    <span className="font-mono text-xs leading-snug text-brand-accent sm:text-sm md:pt-1">
                      {item.year}
                    </span>
                    <div className="min-w-0">
                      <h3 className="mb-2 font-display text-lg font-bold leading-snug sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/60 text-pretty sm:text-base">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </li>
              </FadeInItem>
            ))}
          </ol>
        </div>
      </FadeIn>

      <FadeIn delay={400}>
        <div className="mt-12 rounded-2xl border border-white/8 bg-white/[0.02] p-5 sm:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            {t.about.edgeTitle}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
            {t.about.edgeIntro}
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {t.about.edgeItems.map((item, i) => (
              <FadeInItem key={item.title} index={i} baseDelay={0} step={60}>
                <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-brand-bg/40 p-4">
                  <div className="grid size-9 shrink-0 place-items-center rounded-lg border border-brand-accent/20 bg-brand-accent/10">
                    <Medal className="size-4 text-brand-accent" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/50 sm:text-sm">{item.detail}</p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={460}>
        <div className="mt-10 space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent/70">
            {t.about.valuesTitle}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {t.about.values.map((item, i) => (
              <FadeInItem key={item} index={i} baseDelay={0} step={60}>
                <span className="rounded-full border border-brand-accent/20 bg-brand-accent/5 px-4 py-2 text-sm font-medium text-brand-accent backdrop-blur-sm transition-all duration-300 hover:border-brand-accent/40 hover:bg-brand-accent/10">
                  {item}
                </span>
              </FadeInItem>
            ))}
          </div>
        </div>
      </FadeIn>
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
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b0b10] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-500 group-hover:border-brand-accent/35 group-hover:shadow-glow sm:rounded-2xl sm:p-3">
      <div className="mb-2 flex items-center gap-1.5 border-b border-white/5 pb-2 sm:mb-3 sm:gap-2 sm:pb-3">
        <span className="size-2 rounded-full bg-red-500/70 sm:size-2.5" />
        <span className="size-2 rounded-full bg-yellow-500/70 sm:size-2.5" />
        <span className="size-2 rounded-full bg-green-500/70 sm:size-2.5" />
        <div className="ml-1 min-w-0 flex-1 truncate rounded-md border border-white/5 bg-white/[0.04] px-2 py-1 font-mono text-[9px] text-white/35 sm:px-3 sm:py-1.5 sm:text-[10px]">
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
    <section id="projects" className={`mx-auto max-w-7xl border-t border-white/5 ${SECTION_Y} ${SECTION_X}`}>
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-6">
        <SectionHeader
          kicker={t.projects.kicker}
          title={
            <>
              {t.projects.title1} <span className="text-brand-primary">{t.projects.title2}</span>
            </>
          }
          className="!mb-0"
        />
        <FadeIn delay={160} className="md:max-w-md">
          <p className="text-sm leading-relaxed text-white/50 text-pretty sm:text-base md:text-left">
            {t.projects.intro}
          </p>
        </FadeIn>
      </div>

      <div className="grid auto-rows-fr gap-6 sm:gap-8 md:grid-cols-2">
        {t.projects.items.map((project, i) => {
          const browserPreview = PROJECT_BROWSER_PREVIEWS[i];
          return (
          <FadeInItem key={project.title} index={i} baseDelay={80} step={100} className="h-full">
          <article className="group flex h-full flex-col">
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

            <div className="mt-5 flex flex-1 flex-col sm:mt-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/55">
                  {project.category}
                </span>
              </div>
              <h3 className="mt-2 font-display text-lg font-bold tracking-tight sm:text-xl md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55 text-pretty sm:mt-3">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 px-2 py-1 font-mono text-[10px] text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row sm:flex-wrap sm:gap-3 sm:pt-6">
                <a
                  href={project.liveUrl}
                  target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                  rel={project.liveUrl.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-bg transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] sm:w-auto"
                >
                  {t.projects.viewProject}
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={project.codeUrl}
                  target={project.codeUrl.startsWith("http") ? "_blank" : undefined}
                  rel={project.codeUrl.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all hover:border-brand-accent/40 hover:bg-brand-accent/10 sm:w-auto"
                >
                  {t.projects.code}
                  <Github className="size-4" />
                </a>
              </div>
            </div>
          </article>
          </FadeInItem>
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
      className={`border-t border-white/5 bg-brand-surface/20 ${SECTION_Y} ${SECTION_X}`}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker={t.skills.kicker}
          title={
            <>
              {t.skills.title1} <span className="text-brand-primary">{t.skills.title2}</span>
            </>
          }
          description={t.skills.intro}
        />

        <FadeIn>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent/70 sm:mb-6">
            {t.skills.servicesTitle}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.skills.services.map((service, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <FadeInItem key={service.title} index={i} baseDelay={0} step={70}>
                  <article className="glass-card card-interactive h-full rounded-2xl border border-white/8 p-5">
                    <div className="mb-4 grid size-10 place-items-center rounded-xl border border-brand-accent/20 bg-brand-accent/10">
                      <Icon className="size-5 text-brand-accent" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white sm:text-lg">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{service.description}</p>
                  </article>
                </FadeInItem>
              );
            })}
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
          <FadeIn delay={80}>
            <div className="min-w-0">
              <h3 className="mb-2 font-display text-xl font-bold sm:text-2xl">{t.skills.stackTitle}</h3>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 sm:mb-6">
                {t.skills.languagesLabel}
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                {t.skills.tech.map((name, i) => (
                  <FadeInItem key={name} index={i} baseDelay={0} step={50}>
                    <div className="card-interactive flex w-full min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-2.5 sm:gap-2.5 sm:px-3 sm:py-3 md:px-4">
                      <TechLanguageIcon name={name} />
                      <span className="truncate text-[11px] font-medium text-white/85 sm:text-xs md:text-sm">
                        {name}
                      </span>
                    </div>
                  </FadeInItem>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={140}>
            <div className="min-w-0">
              <h3 className="mb-5 font-display text-xl font-bold sm:text-2xl">{t.skills.growthTitle}</h3>
              <div className="space-y-3">
                {t.skills.growth.map((label, i) => {
                  const Icon = GROWTH_ICONS[i];
                  return (
                    <FadeInItem key={label} index={i} baseDelay={0} step={80}>
                      <div className="glass-card card-interactive group flex items-center gap-4 rounded-2xl border border-white/8 p-4 sm:p-5">
                        <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-brand-accent/20 bg-brand-accent/10 transition-transform duration-500 group-hover:scale-110">
                          <Icon
                            className="size-5 text-brand-accent"
                            aria-hidden="true"
                          />
                        </div>
                        <span className="font-display text-base font-semibold sm:text-lg">{label}</span>
                      </div>
                    </FadeInItem>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const socialLinks = useSocialLinks();

  return (
    <section id="contact" className={`border-t border-white/5 ${SECTION_Y} ${SECTION_X}`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker={t.contact.kicker}
          title={
            <>
              {t.contact.title1} <span className="gradient-text">{t.contact.title2}</span>
            </>
          }
          description={t.contact.intro}
          className="!mb-8 sm:!mb-10"
        />

        <FadeIn delay={120}>
          <div className="relative overflow-hidden rounded-3xl border border-brand-accent/20 bg-gradient-to-br from-brand-accent/[0.08] via-white/[0.02] to-transparent p-6 sm:p-8 md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-accent/10 blur-[80px]" />
            <p className="font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              {t.contact.ctaTitle}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              {t.contact.ctaSubtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${t.footer.email}`}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-bg transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 sm:min-w-[220px]"
              >
                <Mail className="size-4" aria-hidden="true" />
                {t.contact.emailLabel}
              </a>
              <a
                href={t.contact.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-6 py-3 text-sm font-semibold text-brand-accent transition-all duration-300 hover:scale-[1.02] hover:bg-brand-accent/15 sm:min-w-[220px]"
              >
                <WhatsAppIcon className="size-4" />
                {t.contact.whatsappLabel}
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={220}>
          <p className="mb-4 mt-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            {t.contact.socialLabel}
          </p>
        </FadeIn>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {socialLinks.map(({ icon: Icon, label, href }, i) => (
            <FadeInItem key={label} index={i} baseDelay={280} step={80}>
              <SocialLink icon={Icon} label={label} href={href} />
            </FadeInItem>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  icon: Icon,
  label,
  href,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="glass-card card-interactive group inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white/80 hover:text-brand-accent sm:w-auto"
    >
      <Icon className="size-4 transition-transform group-hover:scale-110" />
      {label}
    </a>
  );
}

function Footer() {
  const { t } = useLang();
  const socialLinks = useSocialLinks();
  const exploreLinks = [
    { label: t.nav.home, href: "#top" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className={`pb-8 sm:pb-10 ${SECTION_X} supports-[padding:max(0px)]:pb-[max(2rem,env(safe-area-inset-bottom))]`}>
      <FadeIn className="mx-auto max-w-7xl border-t border-white/5 pt-8 sm:pt-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-lg font-bold text-white sm:text-xl">{t.footer.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">{t.footer.tagline}</p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">{t.footer.exploreTitle}</p>
            <ul className="mt-4 space-y-2">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-brand-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">{t.footer.connectTitle}</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-brand-accent"
                >
                  <Mail className="size-3.5" aria-hidden="true" />
                  {t.footer.email}
                </a>
              </li>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-brand-accent"
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">{t.footer.legalTitle}</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-white/65 transition-colors hover:text-brand-accent"
                >
                  {t.cookies.privacyLink}
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-sm text-white/65 transition-colors hover:text-brand-accent"
                >
                  {t.cookies.cookieLink}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 sm:text-xs">
            © {new Date().getFullYear()} {t.footer.name}. {t.footer.rights}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/65 transition-colors hover:text-brand-accent"
          >
            {t.footer.backToTop}
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </FadeIn>
    </footer>
  );
}
