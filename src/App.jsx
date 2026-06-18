import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Wifi,
  Printer,
  Mail,
  ShieldCheck,
  HardDrive,
  Tv,
  CheckCircle2,
  Phone,
  Mail as MailIcon,
  MapPin,
  MessageCircle,
  Star,
  Clock,
  Home,
  ArrowRight,
  Laptop,
  ShoppingCart,
} from "lucide-react";

const Button = ({ children, className = "", asChild, ...props }) => {
  if (asChild) {
    return React.cloneElement(children, {
      className: `${children.props.className || ""} ${className}`,
      ...props,
    });
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const services = [
  {
    icon: Monitor,
    title: "PC & Mac Support",
    text: "Slow laptops, updates, setup, troubleshooting and general help.",
  },
  {
    icon: Wifi,
    title: "Wi‑Fi & Internet Help",
    text: "Router setup, weak signal, printer Wi‑Fi issues and home network checks.",
  },
  {
    icon: Printer,
    title: "Printer Setup",
    text: "New printers, Wi‑Fi printing, scanning problems and reconnecting after router changes.",
  },
  {
    icon: Mail,
    title: "Email Problems",
    text: "Outlook, Gmail, Apple Mail, Microsoft 365, syncing issues and account setup.",
  },
  {
    icon: Smartphone,
    title: "Phones & Tablets",
    text: "iPhone, iPad and Android setup, data transfer, backups and app support.",
  },
  {
    icon: ShieldCheck,
    title: "Security Basics",
    text: "Scam email advice, antivirus checks, password hygiene and safer account settings.",
  },
  {
    icon: ShoppingCart,
    title: "Buying New Devices",
    text: "Advice and recommendations for laptops, phones, printers, Wi-Fi equipment and other technology.",
  },
  {
    icon: Tv,
    title: "Smart TV & Devices",
    text: "Streaming apps, HDMI issues, device setup and home tech troubleshooting.",
  },
];

const problems = [
  "My printer won’t connect to Wi‑Fi",
  "My laptop is running slowly",
  "My emails are not syncing",
  "I can’t sign into Microsoft 365",
  "My Wi‑Fi does not reach upstairs",
  "I need photos moved to a new phone",
  "My new router has broken my devices",
  "I’m worried about scam emails",
];

const pricing = [
  {
    title: "Quick Help",
    price: "From £15",
    detail: "Simple checks, advice or small local jobs.",
  },
  {
    title: "Standard Support",
    price: "£20/hr",
    detail: "Home visits, setup, troubleshooting and guidance.",
  },
  {
    title: "Remote Support",
    price: "Ask for quote",
    detail: "For suitable software, email and settings issues.",
  },
];

const testimonials = [
  {
    quote: "Greg was friendly, patient and explained everything clearly.",
    name: "Local customer",
  },
  {
    quote: "Helped get our printer and Wi‑Fi working again after a router change.",
    name: "Home visit customer",
  },
  {
    quote: "Reliable, professional and easy to talk to.",
    name: "Aberdeenshire customer",
  },
];

export default function GMTSTechSupportWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 ring-1 ring-blue-400/30">
              <Laptop className="h-7 w-7 text-blue-400" />
            </div>
            <div>
              <div className="leading-tight">
                <p className="text-2xl font-bold tracking-tight text-blue-400">
                  GMTS
                </p>
                <p className="text-sm text-slate-200">
                  Gregor Marston Tech Support
                </p>
                <p className="text-xs text-slate-400">
                  Kemnay & Aberdeenshire
                </p>
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <Button asChild className="rounded-2xl bg-blue-500 px-5 hover:bg-blue-400">
            <a href="tel:+447780241176" className="whitespace-nowrap">Call Greg</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.24),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.14),transparent_40%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-100">
                <CheckCircle2 className="h-4 w-4 text-blue-300" /> Friendly local tech support you can trust
              </div>
              <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
                Clear, calm help for your home tech.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                PC, Mac, Wi‑Fi, printers, email, phones, smart TVs and everyday technology support across Kemnay, Inverurie and surrounding Aberdeenshire areas.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-2xl bg-blue-500 px-7 hover:bg-blue-400">
                  <a href="tel:+447780241176" className="flex items-center gap-2"><Phone className="h-4 w-4" /> Call 07780 241176</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white">
                  <a href="mailto:tech@gregormarston.com" className="flex items-center gap-2"><MailIcon className="h-4 w-4" /> Email for help</a>
                </Button>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-3">
                <div className="flex items-center gap-2"><Home className="h-4 w-4 text-blue-300" /> Home visits</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-blue-300" /> Flexible times</div>
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-300" /> Clear advice</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <Card className="rounded-[2rem] border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
                <CardContent className="p-6 md:p-8">
                  <div className="rounded-[1.5rem] bg-slate-900 p-6 ring-1 ring-white/10">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Most common issues</p>
                    <div className="mt-6 space-y-4">
                      {problems.slice(0, 6).map((problem) => (
                        <div key={problem} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                          <p className="text-slate-100">{problem}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-white px-5 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="font-semibold text-blue-600">Services</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Support for the tech problems people actually have.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Straightforward help at home, without confusing jargon. I can diagnose the issue, explain the options and help you get things working again.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, text }) => (
                <Card key={title} className="rounded-3xl border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-5 py-20 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-semibold text-blue-600">Common problems</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">Not sure what the issue is?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                That’s completely fine. You can describe what is happening in plain English and I’ll help narrow it down.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {problems.map((problem) => (
                <div key={problem} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <ArrowRight className="h-4 w-4 shrink-0 text-blue-600" />
                  <span className="text-sm font-medium text-slate-800">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 bg-white px-5 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="font-semibold text-blue-600">Pricing</p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight">Simple, transparent starting prices.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Final cost depends on travel, complexity and parts if needed. I’ll always explain the likely options before doing anything major.
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {pricing.map((item, index) => (
                <Card key={item.title} className={`rounded-3xl border-slate-200 shadow-sm ${index === 1 ? "ring-2 ring-blue-500" : ""}`}>
                  <CardContent className="p-7">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-4 text-4xl font-bold tracking-tight text-blue-600">{item.price}</p>
                    <p className="mt-4 leading-7 text-slate-600">{item.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-slate-950 px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="rounded-[2rem] border-white/10 bg-white/10 text-white shadow-xl">
              <CardContent className="p-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-500/15 ring-1 ring-blue-400/30">
                  <Laptop className="h-10 w-10 text-blue-300" />
                </div>
                <h2 className="mt-8 text-4xl font-bold tracking-tight">Hi, I’m Greg.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  I’m a Computer Science graduate based in Kemnay, providing friendly local support for computers, phones, Wi-Fi and home technology across Aberdeenshire.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  My aim is simple: help you get your technology working, explain things clearly and make the process feel less stressful.
                </p>
              </CardContent>
            </Card>
            <div className="grid content-center gap-5 sm:grid-cols-2">
              {[
                "Computer Science background",
                "Experience with Windows, Mac, iPhone and Android",
                "Clear explanations without jargon",
                "Local home visits available",
                "Practical support for everyday tech issues",
                "Friendly and reliable support",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                  <p className="text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="bg-white px-5 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="font-semibold text-blue-600">Reviews</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">Built on trust, patience and clear communication.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <Card key={item.quote} className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-7">
                    <div className="mb-5 flex gap-1 text-blue-500">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
                    <p className="mt-5 font-semibold text-slate-950">— {item.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        <section id="contact" className="bg-blue-600 px-5 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div>
              <p className="font-semibold text-blue-100">Get help</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Need tech support? Send a message or call.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
                Tell me what device you’re using, what problem you’re seeing and whether you’d prefer a home visit or remote help.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="inline-flex min-w-[260px] items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-blue-700 hover:bg-blue-50">
                  <a href="tel:+447780241176"><Phone className="mr-2 h-4 w-4" /> Call 07780 241176</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-2xl border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 hover:text-white">
                  <a href="mailto:tech@gregormarston.com"><MailIcon className="mr-2 h-4 w-4" /> Email Greg</a>
                </Button>
              </div>
            </div>
            <Card className="rounded-[2rem] border-white/20 bg-white text-slate-950 shadow-2xl">
              <CardContent className="space-y-5 p-8">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-blue-600" />
                  <div><p className="font-bold">Phone</p><p className="text-slate-600">07780 241176</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <MailIcon className="mt-1 h-5 w-5 text-blue-600" />
                  <div><p className="font-bold">Email</p><p className="text-slate-600">tech@gregormarston.com</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-blue-600" />
                  <div><p className="font-bold">Area</p><p className="text-slate-600">Kemnay, Inverurie & nearby Aberdeenshire areas</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle className="mt-1 h-5 w-5 text-blue-600" />
                  <div><p className="font-bold">Best first message</p><p className="text-slate-600">“Hi Greg, I need help with…” plus the device/model if you know it.</p></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 px-5 py-8 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Gregor Marston Tech Support.</p>
          <p>gregormarston.com</p>
        </div>
      </footer>
    </div>
  );
}
