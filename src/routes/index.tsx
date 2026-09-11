import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Placeholder } from "@/components/Placeholder";

import jeep from "@/assets/img-8947.jpg.asset.json";
import foam from "@/assets/img-9244.jpg.asset.json";
import vette from "@/assets/img-9585.jpg.asset.json";
import rolls from "@/assets/img-9814.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nate's Mobile Auto Detailing | Orange County, CA" },
      {
        name: "description",
        content:
          "Premium mobile auto detailing in Orange County: maintenance washes, paint correction, ceramic coatings and carpet extractions. Call (714) 795-0575.",
      },
      { property: "og:title", content: "Nate's Mobile Auto Detailing | Orange County, CA" },
      {
        property: "og:description",
        content:
          "Mobile detailing that comes to you. Paint correction, ceramic coatings, interior extractions. 5.0 rated in Orange County.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "(714) 795-0575";
const TEL = "tel:+17147950575";

const services = [
  { name: "Maintenance Wash", desc: "Foam bath, decontamination, hand dry, tire dressing.", from: "$75" },
  { name: "Full Interior", desc: "Vacuum, steam clean, seat shampoo, carpet extraction.", from: "$150" },
  { name: "Paint Correction", desc: "Multi-stage machine polish that erases swirls and haze.", from: "$350" },
  { name: "Ceramic Coating", desc: "Years of gloss, slickness and real UV protection.", from: "$650" },
  { name: "Clay Bar & Wax", desc: "Bonded contaminants removed, sealed with premium wax.", from: "$120" },
  { name: "Engine & Headlights", desc: "Engine bay detail plus headlight polishing and clarity restore.", from: "$90" },
];

const steps = [
  { n: "01", t: "Book a time", d: "Call or text and pick a slot. Open 7 AM daily." },
  { n: "02", t: "We roll to you", d: "Fully mobile setup with our own water and power." },
  { n: "03", t: "Detail day", d: "Foam, decontaminate, correct, protect. No shortcuts." },
  { n: "04", t: "Walkaround", d: "We hand it back looking better than delivery day." },
];

function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="glass-card mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
          <span className="font-display text-sm tracking-[0.25em] uppercase">Nate&apos;s Detailing</span>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#process" className="transition-colors hover:text-foreground">Process</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href={TEL}
            className="bg-brand-gradient rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Call now
          </a>
        </div>
      </motion.header>

      {/* Hero */}
      <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden">
        <motion.img
          src={vette.url}
          alt="Orange sports car detailed at sunset by Nate's Mobile Auto Detailing"
          style={{ y: imgY }}
          className="absolute inset-0 h-[120%] w-full object-cover opacity-45"
        />
        <div className="bg-hero-gradient absolute inset-0 opacity-80" />
        <motion.div style={{ opacity: fade }} className="relative mx-auto w-full max-w-6xl px-6 pt-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xs font-semibold tracking-[0.4em] text-accent uppercase"
          >
            Orange County, CA · 5.0 rated
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-3xl text-5xl leading-[0.95] sm:text-7xl"
          >
            Showroom shine,
            <span className="text-brand-gradient"> parked in your driveway.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Premium mobile detailing — maintenance washes, paint correction, ceramic coatings and
            carpet extractions. We bring everything to you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={TEL}
              className="bg-brand-gradient rounded-full px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Book a detail · {PHONE}
            </a>
            <a
              href="https://www.instagram.com/natesdetailing22/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:bg-secondary"
            >
              See Instagram
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Before / After */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.4em] text-accent uppercase">The difference</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Drag to see it happen</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Same panel, same day. Slide across to compare a dull, contaminated finish with a fully
            corrected and coated one.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-10">
          <BeforeAfter before={foam.url} after={rolls.url} />
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl">Recent work</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.05}>
            <img
              src={jeep.url}
              alt="Blue Jeep Wrangler after a full detail"
              className="aspect-4/5 w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={foam.url}
              alt="Supercar covered in snow foam during a wash"
              className="aspect-4/5 w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <img
              src={rolls.url}
              alt="Blue luxury sedan with polished wheel"
              className="aspect-4/5 w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <Placeholder className="aspect-4/5 w-full" />
          </Reveal>
          <Reveal delay={0.25}>
            <Placeholder className="aspect-4/5 w-full" />
          </Reveal>
          <Reveal delay={0.3}>
            <Placeholder className="aspect-4/5 w-full" />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.4em] text-accent uppercase">Services</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Pick your level of clean</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <div className="glass-card group h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl">{s.name}</h3>
                    <span className="text-brand-gradient font-display text-lg">{s.from}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.4em] text-accent uppercase">Process</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Four steps, zero hassle</h2>
            </Reveal>
            <div className="mt-10 space-y-8">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="flex gap-5">
                    <span className="font-display text-brand-gradient text-2xl">{s.n}</span>
                    <div>
                      <h3 className="text-lg">{s.t}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2}>
            <Placeholder className="aspect-square w-full" />
          </Reveal>
        </div>
      </section>

      {/* Review */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <Reveal>
          <p className="font-display text-2xl text-accent">★★★★★</p>
          <blockquote className="mt-6 text-2xl leading-snug sm:text-3xl">
            &ldquo;5.0 on Google — and the kind of finish that makes neighbors ask who did it.&rdquo;
          </blockquote>
          <p className="mt-5 text-sm text-muted-foreground">Nate&apos;s Mobile Auto Detailing · Placentia, CA</p>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-border py-24">
        <div className="bg-hero-gradient absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-6xl">Ready when you are</h2>
            <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
              Serving Orange County and the Inland Empire. Open 7 AM daily. Call or text to lock in a
              slot this week.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={TEL}
                className="bg-brand-gradient rounded-full px-8 py-4 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                {PHONE}
              </a>
              <a
                href="https://maps.google.com/?q=531+Shoshoni+Ave,+Placentia,+CA+92870"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-8 py-4 font-semibold transition-colors hover:bg-secondary"
              >
                531 Shoshoni Ave, Placentia
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nate&apos;s Mobile Auto Detailing ·{" "}
        <a href="https://www.instagram.com/natesdetailing22/" className="hover:text-foreground">
          @natesdetailing22
        </a>
      </footer>
    </div>
  );
}
